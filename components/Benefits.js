import React from 'react'

export default function Benefits() {
    return (
        <div id='benefits' className='bg-pattern -mr-14 md:mr-0 pt-5 pb-12 px-8 flex flex-col justify-between'>
            <h2 className='text-center text-6xl py-6'>TLB Benefits</h2>
            <div className='px-4 py-8 text-white text-sm bg-gray-900 rounded-md border-4 border-lime'>

                <ul className='px-8 pt-8 list-disc'>
                    <li className='px-8 py-4'>TLB creators will automatically burn 1,000,000 Shiba Inu tokens for every TLB NFT minted.</li>
                    <li className='px-8 py-4 list-disc' >The TLB team knows that community is what drives the long-term value of any project. That is why we are rewarding our holders by offering staking terms in which 25% of TLB’s royalty fees will be placed in a community fund and distributed as a multi-tier system. Rewards will be based on the total number of NFTs staked by the community and will go by three different tiers:
                        <li className='mx-12 p-2 list-disc'>1 month: 20% the staked NFT’s portion</li>
                        <li className='mx-12 p-2 list-disc'>2 months: 33% the staked NFT’s portion</li>
                        <li className='mx-12 p-2 list-disc'>3 months: 100% the staked NFT’s portion</li>
                    </li>
                    <li className='px-8 py-4 list-disc' >(Example: the royalty balance is $100,000. $25,000 will be placed in the community fund to be distributed as staking rewards. There are 1,000 TLB NFTs being staked. A TLB NFT staked for 1 month will be rewarded $5 [($25,000/1000) x .2)])</li>
                    <ul>
                        <li className='list-disc py-4'>The creators of TLB are not even close to being finished! We are currently planning our next project, which TLB holders will have first priority to once dropped.</li>
                    </ul>





                </ul>
            </div>

        </div>
    )
}