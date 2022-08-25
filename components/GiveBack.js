import React from 'react'

export default function GiveBack() {
    return (
        <div id='giveback' className='bg-pattern pt-5 pb-12 px-8 flex flex-col items-center justify-center'>
            <h2 className='text-center text-6xl py-6'>TLB's Give-Back Program</h2>
            <div className='px-4 py-8 text-white text-sm bg-gray-900 flex flex-col items-center rounded-md border-4 border-lime'>
                <p className='text-center pt-5'>The TLB team believes in giving back to the community.  Therefore, in honor of the founder's family dog, Onyx, who recently passed from Amelanotic Melanoma, we have decided to donate 5% of our NFT minting profits to The American Society for the Prevention of Cruelty to Animals (ASPCA), an organization who "was founded on the belief that animals are entitled to kind and respectful treatment at the hands of humans and must be protected under the law." Once all 5,000 NFTs have been minted, TLB will make its donation.</p>
                <img src='./images/Onyx.webp' className='flex flex-col my-5 pt-1 pb-2 items-center w-1/2' />
            </div>
        </div>
    )
}
