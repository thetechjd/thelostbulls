import React from 'react'

export default function FAQ() {
    return (
        <div id='faq' className='bg-pattern pb-3 pt-12 px-4 flex flex-col justify-between'>

            <h2 className='text-center text-6xl py-6'>FAQ's</h2>
            <div className='px-4 py-8 text-white text-sm bg-gray-900 rounded-md border-4 border-lime'>
                <details className="accordion">
                    <summary className="">What is The Lost Bulls (TLB)?</summary>
                    <div className="">
                        <p>A: The Lost Bulls is an NFT collection of 5,000 part-skeleton bulls that acquires a symbolic meaning behind the art piece.</p>
                        <p>It was designed to represent the Bull and Bear crypto market.</p>
                    </div>
                </details>
                <details className="accordion">
                    <summary className="">What blockchain is TLB on?</summary>
                    <div className="">
                        <p>A: It is an ERC-721 token on the Ethereum blockchain.</p>
                    </div>
                </details>
                <details className="accordion">
                    <summary className="">Are all 5,000 of the TLB NFTs already minted?</summary>
                    <div className="">
                        <p>A: No, all 5,000 NFTs need to be minted by members..</p>
                    </div>
                </details>
                <details className="accordion">
                    <summary className="">How can I become a TLB holder?</summary>
                    <div className="">
                        <p>A: You can either mint a new TLB NFT from our website or buy one that has already been minted and is for resale.</p>
                    </div>
                </details>
                <details className="accordion">
                    <summary className="">Once I mint a TLB NFT, where can I resell it?</summary>
                    <div className="">
                        <p>A: For best experience, we recommend reselling on OpenSea. However, you can resell TLB on any Ethereum NFT marketplace.</p>
                    </div>
                </details>
                <details className="accordion">
                    <summary className="">What can I do with the TLB NFT?</summary>
                    <div className="">
                        <p>A: You can mint, stake, resell, trade, donate, or transfer the TLB NFT. </p>
                    </div>
                </details>
                <details className="accordion">
                    <summary className="">Where are the staked NFTs locked?</summary>
                    <div className="">
                        <p>A: All staked NFTs are locked in the staking contract.</p>
                    </div>
                </details>
                <details className="accordion">
                    <summary className="">Can NFT's purchased from secondary sales also be staked?</summary>
                    <div className="">
                        <p>A: Yes.</p>
                    </div>
                </details>
                <details className="accordion">
                    <summary className="">Is there a royalty fee with secondary sales?</summary>
                    <div className="">
                        <p>A: Yes, there is a 7% royalty fee on all secondary sales.</p>
                    </div>
                </details>
                <details className="accordion">
                    <summary className="">How can I join The Lost Bulls community?</summary>
                    <div className="">
                        <p>A: You can join our Discord. Simply click the Discord icon.</p>
                    </div>
                </details>
                <details className="accordion">
                    <summary className="">When I buy an NFT, does the ownership and commercial rights transfer to me?</summary>
                    <div className="">
                        <p>A: No, the intellectual properties and ownership rights stay solely with the creators at all times.</p>
                    </div>
                </details>
                <details className="accordion">
                    <summary className="">How much is it to mint a TLB NFT?</summary>
                    <div className="">
                        <p>A: The price to mint a TLB NFT will be determined soon. </p>
                    </div>
                </details>
            </div>









        </div >
    )
}
