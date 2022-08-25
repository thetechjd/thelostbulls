import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
import { useEffect, useState } from "react";
import Footer from '../components/Footer';

export default function Disclaimer() {

    const [isNavOpen, setIsNavOpen] = useState(false);


    return (
        <>
            <Head>
                <title>The Lost Bulls - NFT Collection</title>
                <meta name="description" content="Lost Bulls NFT Dapp" />
                <link rel="icon" href="/favicon.png" />
            </Head>

            {/* Header */}
            <header className='fixed w-full top-0 md:px-8 px-5 pt-5 pb-3 z-70 transition-colors duration-500 z-40 flex-none md:z-50 bg-header'>

                {/* Header Container */}
                <div className='flex h-full items-center justify-center max-w-11xl mx-auto border-opacity-0'>

                    {/* Logo Section */}

                    <div className='flex-grow'>
                        <div className='flex'>
                            <Link className='w-min-content' href='/' passHref>
                                <a className='flex'>
                                    <img alt='' src='/images/bull_logo.png' className='h-[80px]' />

                                </a>
                            </Link>
                        </div>
                    </div>



                    <nav>

                        <section className="MOBILE-MENU flex lg:hidden">
                            <div
                                className="HAMBURGER-ICON space-y-2"
                                onClick={() => setIsNavOpen((prev) => !prev)}
                            >
                                <span className="block h-0.5 w-12 animate-pulse bg-brightyellow"></span>
                                <span className="block h-0.5 w-12 animate-pulse bg-brightyellow"></span>
                                <span className="block h-0.5 w-12 animate-pulse bg-brightyellow"></span>
                            </div>

                            <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                                <div
                                    className="absolute top-0 right-0 px-8 py-8"
                                    onClick={() => setIsNavOpen(false)}
                                >
                                    <svg
                                        className="h-8 w-8 text-gray-600"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </div>
                                <div className=''>
                                    <ul className="flex flex-col items-center justify-between min-h-[250px]">
                                        <li className="border-b text-white border-gray-400 my-2 uppercase">
                                            <a href="./#benefits" >Benefits</a>
                                        </li>
                                        <li className="border-b text-white border-gray-400 my-2 uppercase">
                                            <a href="./#backstory">Backstory</a>
                                        </li>
                                        <li className="border-b text-white border-gray-400 my-2 uppercase">
                                            <a href="./#spacemap">SpaceMap</a>
                                        </li>

                                        <li className="border-b text-white border-gray-400 my-2 uppercase">
                                            <a href="./#faq">FAQ's</a>
                                        </li>
                                        <li className="border-b text-white text-xs border-gray-400 my-2 uppercase">
                                            <a href="./#giveback">GiveBack</a>
                                        </li>
                                        <li className="border-b text-white border-gray-400 my-2 uppercase">
                                            <a href="./#team">Team</a>
                                        </li>
                                        <li className="border-b text-white border-gray-400 my-2 uppercase">
                                            <a href="https://opensea.io">Opensea</a>
                                        </li>
                                        <li className="border-b text-white border-gray-400 my-2 uppercase">
                                            <a href="/stake">Stake</a>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </section>

                        <ul className="DESKTOP-MENU hidden space-x-2 lg:flex">
                            <li>
                                <a href="./#benefits" className='hidden sm:flex bg-opacity-0 text-gray-100 opacity-80 border-r items-center relative h-9 tracking-wider pt-0.5 first::pt-0 uppercase text-2xs font-500 padding-huge bg-blue-300 duration-200 px-1 hover:bg-opacity-90 flex justify-center flex-row cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                                    <p className='rounded uppercase text-xs font-black
          text-white md:flex'>Benefits</p>
                                </a>
                            </li>
                            <li>
                                <a href="./#backstory" className='hidden sm:flex bg-opacity-0 text-gray-100 opacity-80 items-center relative h-9 tracking-wider pt-0.5 first::pt-0 uppercase text-2xs font-500 bg-blue-200 duration-200 px-1 border-r hover:bg-opacity-90 flex justify-center flex-row cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                                    <p className='rounded uppercase text-xs font-black
          text-white md:flex'>Backstory</p>
                                </a>
                            </li>
                            <li>
                                <a href="./#spacemap" className='hidden sm:flex bg-opacity-0 text-gray-100 opacity-80 items-center relative h-9 tracking-wider pt-0.5 first::pt-0 uppercase text-2xs font-500 bg-blue-200 duration-200 px-1 border-r hover:bg-opacity-90 flex justify-center flex-row cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                                    <p className='rounded uppercase text-xs font-black
          text-white md:flex'>SpaceMap </p>
                                </a>
                            </li>

                            <li>
                                <a href="./#faq" className='hidden sm:flex bg-opacity-0 text-gray-100 opacity-80 border-r items-center relative h-9 tracking-wider pt-0.5 first::pt-0 uppercase text-2xs font-500 padding-huge bg-blue-300 duration-200 px-1 hover:bg-opacity-90 flex justify-center flex-row cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                                    <p className='rounded uppercase text-xs font-black
          text-white md:flex'>FAQ's</p>
                                </a>
                            </li>
                            <li>
                                <a href="./#giveback" className='hidden sm:flex bg-opacity-0 text-gray-100 opacity-80 border-r items-center relative h-9 tracking-wider pt-0.5 first::pt-0 uppercase text-2xs font-500 padding-huge bg-blue-300 duration-200 px-1 hover:bg-opacity-90 flex justify-center flex-row cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                                    <p className='rounded uppercase text-xs font-black
          text-white md:flex'>GiveBack</p>
                                </a>
                            </li>
                            <li>
                                <a href="./#team" className='hidden sm:flex bg-opacity-0 text-gray-100 opacity-80 items-center border-r relative h-9 tracking-wider pt-0.5 first::pt-0 uppercase text-2xs font-500 padding-huge bg-blue-300 duration-200 px-1 hover:bg-opacity-90 flex justify-center flex-row cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                                    <p className='rounded uppercase text-xs font-black
          text-white md:flex'>Team</p>
                                </a>
                            </li>
                            <li>
                                <a href="/stake" className='hidden sm:flex bg-opacity-0 text-gray-100 opacity-80 items-center border-r relative h-9 tracking-wider pt-0.5 first::pt-0 uppercase text-2xs font-500 padding-huge bg-blue-300 duration-200 px-1 hover:bg-opacity-90 flex justify-center flex-row cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                                    <p className='rounded uppercase text-xs font-black
          text-white md:flex'>Stake</p>
                                </a>
                            </li>
                            <li className='hidden sm:flex'>
                                <a className='bg-opacity-0 text-gray-100 opacity-80 items-center relative h-9 tracking-wider pt-0.5 first::pt-0 uppercase text-2xs font-500 padding-huge bg-blue-300 duration-200 px-1 hover:bg-opacity-90 rounded flex justify-center flex-row cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' href='http://opensea.io'>
                                    <svg width="40" height="40" viewBox="0 0 90 90" fill="white" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M90 45C90 69.8514 69.8514 90 45 90C20.1486 90 0 69.8514 0 45C0 20.1486 20.1486 0 45 0C69.8566 0 90 20.1486 90 45Z" fill="none" />
                                        <path d="M22.2011 46.512L22.3952 46.2069L34.1015 27.8939C34.2726 27.6257 34.6748 27.6535 34.8043 27.9447C36.7599 32.3277 38.4475 37.7786 37.6569 41.1721C37.3194 42.5683 36.3947 44.4593 35.3544 46.2069C35.2204 46.4612 35.0724 46.7109 34.9152 46.9513C34.8413 47.0622 34.7164 47.127 34.5823 47.127H22.5432C22.2195 47.127 22.03 46.7756 22.2011 46.512Z" fill="white" />
                                        <path d="M74.38 49.9149V52.8137C74.38 52.9801 74.2783 53.1281 74.1303 53.1928C73.2242 53.5812 70.1219 55.0052 68.832 56.799C65.5402 61.3807 63.0251 67.932 57.4031 67.932H33.9489C25.6362 67.932 18.9 61.1727 18.9 52.8322V52.564C18.9 52.3421 19.0803 52.1618 19.3022 52.1618H32.377C32.6359 52.1618 32.8255 52.4022 32.8024 52.6565C32.7099 53.5072 32.8671 54.3764 33.2693 55.167C34.046 56.7435 35.655 57.7283 37.3933 
57.7283H43.866V52.675H37.4673C37.139 52.675 36.9449 52.2959 37.1344 52.0277C37.2038 51.9214 37.2824 51.8104 37.3656 51.6856C37.9712 50.8257 38.8358 49.4895 39.6957 47.9684C40.2829 46.9421 40.8516 45.8463 41.3093 44.746C41.4018 44.5472 41.4757 44.3438 41.5497 44.1449C41.6745 43.7936 41.804 43.4653 41.8964 43.1371C41.9889 42.8597 42.0629 42.5684 42.1369 42.2956C42.3542 41.3617 42.4466 40.3723 42.4466 39.3459C42.4466 38.9437 42.4281 38.523 42.3911 38.1207C42.3727 37.6815 42.3172 37.2423 42.2617 36.8031C42.2247 36.4147 
42.1554 36.031 42.0814 35.6288C41.9889 35.0416 41.8595 34.4591 41.7115 33.8719L41.6607 33.65C41.5497 33.2478 41.4572 32.864 41.3278 32.4618C40.9625 31.1996 40.5418 29.9698 40.098 28.8186C39.9362 28.3609 39.7512 27.9217 39.5663 27.4825C39.2935 26.8213 39.0161 26.2203 38.7618 25.6516C38.6324 25.3927 38.5214 25.1569 38.4105 24.9165C38.2856 24.6437 38.1562 24.371 38.0267 24.112C37.9343 23.9132 37.8279 23.7283 37.7539 23.5434L36.9634 22.0824C36.8524 21.8836 37.0373 21.6478 37.2546 21.7079L42.2016 23.0487H42.2155C42.2247 23.0487 42.2293 23.0533 42.234 23.0533L42.8858 23.2336L43.6025 23.437L43.866 23.511V20.5706C43.866 19.1512 45.0033 18 46.4088 18C47.1116 18 47.7496 18.2866 48.2073 18.7536C48.665 19.2206 48.9517 19.8586 48.9517 20.5706V24.935L49.4787 25.0829C49.5203 25.0968 49.5619 25.1153 49.5989 25.143C49.7284 25.2401 49.9133 25.3835 50.1491 25.5591C50.334 25.7071 50.5328 25.8874 50.7733 26.0723C51.2495 26.4561 51.8181 26.9508 52.4423 27.5194C52.6087 27.6628 52.7705 27.8107 52.9185 27.9587C53.7229 28.7076 54.6245 29.5861 55.4844 30.557C55.7248 30.8297 55.9606 31.1071 56.201 31.3984C56.4415 31.6943 56.6957 31.9856 56.9177 32.2769C57.2089 32.6652 57.5233 33.0674 57.7961 33.4882C57.9255 33.687 58.0735 33.8904 58.1983 34.0892C58.5497 34.6209 58.8595 35.1711 59.1554 35.7212C59.2802 35.9755 59.4096 36.2529 59.5206 36.5257C59.8488 37.2608 60.1078 38.0098 60.2742 38.7588C60.3251 38.9206 60.362 39.0963 60.3805 39.2535V39.2904C60.436 39.5124 60.4545 39.7482 60.473 39.9886C60.547 40.756 60.51 41.5235 60.3435 42.2956C60.2742 42.6239 60.1817 42.9336 60.0708 43.2619C59.9598 43.5763 59.8488 43.9045 59.7055 44.2143C59.4281 44.8569 59.0999 45.4996 58.7115 46.1006C58.5867 46.3225 58.4387 46.5583 58.2908 46.7802C58.129 47.016 57.9625 47.238 57.8146 47.4553C57.6112 47.7327 57.3939 48.0239 57.1719 48.2828C56.9731 48.5556 56.7697 48.8284 56.5478 49.0688C56.238 49.434 55.9421 49.7808 55.6324 50.1137C55.4474 50.331 55.2486 50.5529 55.0452 50.7517C54.8464 50.9736 54.643 51.1724 54.458 51.3573C54.1483 51.6671 53.8894 51.9075 53.6721 52.1063L53.1635 52.5733C53.0895 52.638 52.9924 52.675 52.8907 52.675H48.9517V57.7283H53.9079C55.0175 57.7283 56.0716 57.3353 56.9223 56.6141C57.2135 56.3598 58.485 55.2594 59.9876 53.5997C60.0384 53.5442 60.1031 53.5026 60.1771 53.4841L73.8668 49.5265C74.1211 49.4525 74.38 49.6467 74.38 49.9149Z" fill="white" />
                                    </svg>
                                </a>
                            </li>

                        </ul>
                    </nav>
                    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: #210234;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                </div>

            </header>

            <section className="flex flex-col items-center justify-center bg-pattern py-12 overflow-hidden relative z-10" id="">

                <div id='disclaimer' className='bg-pattern w-full mt-12 pb-12 md:px-8 flex flex-col pt-10 items-center justify-center md:items-center md:justify-between text-white'>
                    <h2 className='text-center text-6xl py-6 mt-5'>Disclaimer</h2>
                    <div className='md:px-16 py-8 text-white text-sm text-center bg-gray-900 rounded-md border-4 border-lime'>
                        <p className="text-center pt-5">The Lost Bulls, including but not limited to the overall project, NFT, website, smart contracts, and any apps (“The Lost Bulls”) as presented in this conceptual paper is not a licensed, unlicensed, or exempted financial or payment service of any kind and in any jurisdiction. Any terminology used in this Whitepaper, on the Website, or within the app is intended only as a basic reference, without any reactive or legal meaning of the same terms in a regulated and/or financial environment. The Lost Bulls is a community-driven project and does not have owners, shareholders, promoters, marketers, managers, directors, or other figures or entities exerting any form of governance. The Lost Bulls collection is strictly a utility NFT collection in all jurisdictions and is not and cannot be considered to be a “security” or otherwise regulated token of any kind. The Lost Bulls is not in any way e-money and/or fiat money, or an asset-backed NFT, whether global or limited in scope. This Website taken by itself is not a contract or a contractual agreement of any kind, nor is it an invitation, solicitation, or offer to invest in The Lost Bulls in any way and with any expectation of profit therefrom. Any user of The Lost Bulls represents and warrants that such user has received appropriate technical, administrative, regulatory, and legal advice before and are accessing and/or reading this Website, and/or using any portion or element of The Lost Bulls. The user hereby acknowledges and accepts that there is an inherently high risk in accessing, acquiring, or using any kind of blockchain and/or cryptosystem, token, platform, software, or interface, including The Lost Bulls, and further disavows any claim of any kind against any community member directly or indirectly involved with The Lost Bulls, for any damage suffered, including total loss. </p>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}