import React from 'react'

export default function About() {
    return (
        <div className='py-6 px-5 pt-5 pb-3 mb-5 bg-pattern flex flex-col items-center justify-between'>

            <div className='flex flex-row items-center text-center justify-between'>
                <img src='https://static.wixstatic.com/media/849138_273ce078870c4038bf0104473524f6c6~mv2.png/v1/fill/w_306,h_306,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/male%20bull%20in%20spaceship.png' className='hidden md:flex sm:w-[300px]' />
                <h2 className='text-white text-6xl text-center'>About the Lost Bulls</h2>
                <img src='https://static.wixstatic.com/media/849138_f3380bd2815d4783a1ba033b818f7215~mv2.png/v1/fill/w_330,h_330,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/female%20bull%20in%20spaceship.png' className='hidden md:flex sm:w-[300px]' />

            </div>
            <div className='px-16 text-white text-center'>
                <p className="mb-3">The Lost Bulls (TLB) is an NFT collection of 5,000 unique part-skeleton bulls living on the Ethereum blockchain as ERC-721 tokens. Each part-skeleton bull possesses a distinct combination of attributes from a total of 68 traits.</p>
                <p className="mb-3">TLB was designed with a symbolic meaning behind it.  It symbolizes the two different crypto markets, Bull and Bear.  The bull part of the body indicates the Bull market, and the skeleton part signifies being "Lost" or waiting for something optimistic to happen, hence the Bear market.</p>
                <p className="mb-3">When you buy one of the TLB NFTs, you are not only buying a unique digital art piece with symbolism connected to it. You are also taking part in all of its beneficial features.</p>
                <p>Scroll down to learn more about our digital collectibles, how to mint an NFT, and join <a href='https://discord.gg/yhYt9BZT' className='text-yellow-300'>The Lost Bulls Discord.</a></p>
            </div>
        </div>
    )
}
