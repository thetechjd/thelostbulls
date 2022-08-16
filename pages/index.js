import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { useEffect, useState } from "react";
import Link from 'next/link';
import Head from 'next/head';
import Footer from '../components/Footer';
import About from '../components/About';
import Backstory from '../components/Backstory';
import FAQ from '../components/FAQ';
import SpaceMap from '../components/SpaceMap';
import Team from '../components/Team';
import Benefits from '../components/Benefits';
import { useStatus } from "../context/statusContext";
import { connectWallet, getCurrentWalletConnected, getNFTPrice, getTotalMinted } from "../utils/interact.js";

const contractABI = require("../pages/contract-abi.json");
const contractAddress = "0xfD803715f57F8d179A09d260bC3F568C36d259C6";
const web3 = createAlchemyWeb3(process.env.NEXT_PUBLIC_ALCHEMY_KEY);
const { MerkleTree } = require('merkletreejs');
const KECCAK256 = require('keccak256');
const addresses = require('../utils/addresses');

const leaves = addresses.map(x => KECCAK256(x));
const tree = new MerkleTree(leaves, KECCAK256, { sortPairs: true })

const buf2hex = x => '0x' + x.toString('hex')




const nftContract = new web3.eth.Contract(
  contractABI,
  contractAddress
);

export default function Home() {

  //State variables
  const { status, setStatus } = useStatus();
  const [walletAddress, setWallet] = useState("");
  const [count, setCount] = useState(1);
  const [totalMinted, setTotalMinted] = useState(0);
  const [price, setPrice] = useState(0);
  const [isWhitelisted, setWhitelisted] = useState(false);

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();
    setWallet(address)
    setStatus(status);
    addWalletListener();
    setPrice(await getNFTPrice());
    updateTotalSupply();
    setWhitelisted(isUserWhiteListed());



  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onMintPressed = async (e) => {
    e.preventDefault();
    let whitelistCheck = await nftContract.methods.onlyWhitelisted().call();
    let total = web3.utils.toWei(price, 'ether') * count;
    if (!whitelistCheck) {

      await nftContract.methods.mint(count).send({ from: walletAddress, value: total, gas: 300000 });

    }
    else {



      let leaf = buf2hex(KECCAK256(walletAddress));
      let proof = tree.getProof(leaf).map(x => buf2hex(x.data));
      await nftContract.methods.whitelistMint(count, proof).send({ from: walletAddress, value: total, gas: 300000 })

    }

  };

  const incrementCount = async () => {


    if (count < 6) {
      setCount(count + 1);
    }

  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const updateTotalSupply = async () => {
    const mintedCount = await getTotalMinted();
    setTotalMinted(mintedCount);
  };

  const isUserWhiteListed = async () => {
    let root = buf2hex(tree.getRoot())
    let leaf = buf2hex(KECCAK256(walletAddress));
    let proof = tree.getProof(leaf).map(x => buf2hex(x.data));
    const valid = tree.verify(proof, leaf, root);
    return valid

  }



  return (
    <>
      <Head>
        <title>The Lost Bulls</title>
        <meta name="description" content="Lost Bulls NFT Dapp" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/* Header */}
      <header className='fixed w-full top-0 md:px-8 px-5 pt-5 pb-3 z-70 flex-none md:z-50 bg-white/35 supports-backdrop-blur:bg-white/60'>

        {/* Header Container */}
        <div className='flex h-full items-center justify-center max-w-11xl mx-auto border-opacity-0'>

          {/* Logo Section */}


          {/* Desktop Navbar Section + Connect Wallet + icons */}
          <div className='items-center md:flex text-2xs'>
            <ul className='flex space-x-2'>
              <li>
                <a className='flex'>
                  <p className='md:h7 md:px-2 md:pt-1 pb-1 rounded uppercase text-sm font-black
          text-white md:flex'>Meet Some of The Lost Bulls </p>
                </a>
              </li>
              <li>
                <a className='flex'>
                  <p className='md:h7 md:px-2 md:pt-1 pb-1 rounded uppercase text-sm font-black
          text-white md:flex'>The Backstory</p>
                </a>
              </li>
              <li>
                <a className='flex'>
                  <p className='md:h7 md:px-2 md:pt-1 pb-1 rounded uppercase text-sm font-black
          text-white md:flex'>Space Map </p>
                </a>
              </li>
              <li>
                <a className='flex'>
                  <p className='md:h7 md:px-2 md:pt-1 pb-1 rounded uppercase text-sm font-black
          text-white md:flex'>FAQ's</p>
                </a>
              </li>

              {/* CONNECT WALLET */}
              <li>
                {walletAddress.length > 0 ? (

                  <div className='px-4 bg-opacity-20 text-black items-center relative h-9 tracking-wider sm:pt-0.5 md:pt-2 lg:pt-0.5 first::pt-0 duration-500 text-6xs md:text-base padding-huge opacity-100 hover:bg-opacity-70 rounded flex justify-center flex-row border border-pinkk hover:shadow-green-500/20 cursor-pointer'
                  >
                    Connected:{String(walletAddress).substring(0, 6)}
                    {"....."}
                    {String(walletAddress).substring(39)}
                  </div>
                ) : (

                  <button className='px-4 bg-teal bg-opacity-100 text-gray-900 font-semibold items-center relative h-9 tracking-wider pt-0.5 first::pt-0 duration-200 hover:bg-opacity-70 font-400 px-4 rounded text-2xs' id="walletButton"

                    onClick={connectWalletPressed}
                  >Connect Wallet
                  </button>
                )}
              </li>

              {/* Twitter Icon */}

            </ul>
          </div>

        </div>
      </header>

      {/* Hero/Mint Section */}
      <section className="flex items-center justify-center bg-pattern py-12 px-5 overflow-hidden relative z-10" id="">

        {/* margin between header and hero section */}
        <div className="mb-10 flex items-center max-w-md mt-4"></div>



        <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:justify-between text-slate-900">



          {/* Left Hero Section - Mint Info */}
          <div className="w-full flex flex-col items-center ">

            <img src='https://static.wixstatic.com/media/849138_468f0155ed364140b1ec62eebde296dc~mv2.jpg/v1/fill/w_104,h_100,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/TLB%20Logo_edited_edited.jpg' className='w-[100px] mt-10 justify-center items-center' />
            <div className="max-w-[1400px] mb-12 mt-8 md:mb-0">





              <img src='https://static.wixstatic.com/media/849138_03a62430433748f5bd3c66b9f2259e6e~mv2.png/v1/fill/w_980,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/thelostbulls%20banner_PNG.png' className='w-[1500px] mt-3 justify-center items-center' />


            </div>
            <h3 className='text-yellow-500'>For every NFT minted, TLB creators will automatically burn 1,000,000 Shiba Inu tokens</h3>

            <About />
            <h2 className="text-white text-6xl text-center">Meet Some of The Lost Bulls</h2>
            <img src='/images/lostbulls.gif' alt='pass image' className='w-max-[500px] mb-5 flex items-center justify-center' />



            {/* Total supply - Price info */}
            <div className='flex flex-col bg-fuschia items-center justify-center justify-between text-black rounded-md w-1/2 mx-auto p-2 border-2 border-gray-100'>

              <p className='text-gray-100 p-2'>{totalMinted}/5000 Minted</p>





              <div className='mb-4 w-full md:w-3/4 flex flex-row items-center justify-between'>
                <p className='font-bold text-xs md:text-sm text-gray-100'>Price Per Mint:</p>
                <p className='font-bold text-xs md: text-sm text-gray-100'>{price} ETH</p>
              </div>

            </div>

            {/* Increment & Decrement buttons */}
            {walletAddress.length > 0 ? (
              <div className='flex flex-col'>
                <div className='flex items-center justify-between sm:px-3 m-4'>
                  <button className='button w-10 h-10 flex items-center justify-center text-teal hover:shadow-lg bg-background font-bold rounded-md border border-opacity-80 border-teal'
                    onClick={decrementCount}
                  >
                    ــ
                  </button>
                  <p className="flex items-center justify-center flex-1 grow text-center font-bold text-fuschia text-2xl md:text-3xl">
                    {count}
                    {/* 1 */}
                  </p>
                  <button className="button w-10 h-10 flex items-center justify-center text-teal text-2xl hover:shadow-lg bg-background font-bold rounded-md border border-opacity-80 border-teal"
                    onClick={incrementCount}
                  >
                    +
                  </button>
                </div>
                <div className='flex items-center justify-center p-2 text-black'>
                  Total: {Number.parseFloat((price * count).toFixed(3))} ETH +
                  <span className='text-gray-500'> Gas</span>
                </div>
                <div className='flex items-center justify-center'>
                  <button
                    className='text-lg font-semibold uppercase font-base text-white px-12 py-2 tracking-wide bg-fuschia hover:shadow-green-500/20'
                    // onClick={mintPass}
                    onClick={onMintPressed}
                  >
                    Mint Now
                  </button>
                </div>
              </div>

            ) : (
              <>
                <p className='text-center flex flex-col font-bold text-black text-base md:text-2xl text-body-color leading-relaxed m-3 md:m-8 break-words ...'>
                  Connect Your Wallet to Mint
                </p></>
            )}

          </div>
        </div>

        {/* Total:  {nftPrice} + Gas */}
        {/* Mint Status */}
        {/* {status && (
      <div className="flex items-center justify-center">
        {status}
      </div>
    )} */}



        {/* Right Hero Section - Video/Image Bird PASS */}


      </section>

      {/*
      <Backstory />
      <SpaceMap />
      <FAQ />
      <Benefits />
      <Team />
      <Footer />
  */}

      {/* Content + footer Section */}

    </>
  )
}

