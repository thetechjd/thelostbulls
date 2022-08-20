

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(process.env.NEXT_PUBLIC_ALCHEMY_KEY);

const contractABI = require("../pages/contract-abi.json");
const contractAddress = "0xCB20c7BC687549489cF638Eb2890F49a4712ca7c";

const nftContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);

export const connectWallet = async () => {

    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            const obj = {
                status: "👆🏽 Write a message in the text-field above.",
                address: addressArray[0],
            };
            return obj;
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a target="_blank" href={`https://metamask.io/download.html`}>
                            You must install Metamask, a virtual Ethereum wallet, in your
                            browser.
                        </a>
                    </p>
                </span>
            ),
        };
    }
};

export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
        try {
            const addressArray = await window.ethereum.request({
                method: "eth_accounts",
            });
            if (addressArray.length > 0) {
                return {
                    address: addressArray[0],
                    status: "👆🏽 Write a message in the text-field above.",
                };
            } else {
                return {
                    address: "",
                    status: "🦊 Connect to Metamask using the top right button.",
                };
            }
        } catch (err) {
            return {
                address: "",
                status: "😥 " + err.message,
            };
        }
    } else {
        return {
            address: "",
            status: (
                <span>
                    <p>
                        {" "}
                        🦊{" "}
                        <a target="_blank" href={`https://metamask.io/download.html`}>
                            You must install Metamask, a virtual Ethereum wallet, in your
                            browser.
                        </a>
                    </p>
                </span>
            ),
        };
    }




};

export const getNFTPrice = async () => {
    let whitelist = await nftContract.methods.onlyWhitelisted().call();

    if (!whitelist) {
        const mintPrice = await nftContract.methods.price().call()

    }
    else {
        const mintPrice = await nftContract.methods.priceWL().call()
        const priceEther = web3.utils.fromWei(mintPrice, "ether");
        return priceEther
    }
}

export const getTotalMinted = async () => {
    const totalMinted = await nftContract.methods.totalSupply().call()
    return totalMinted
}

export const getBalance = async () => {
    const balance = await nftContract.methods.balanceOf().call()
    return balance
}




