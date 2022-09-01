import React from 'react'

export default function Team() {
    return (
        <div id='team' className='small-bg md:bg-pattern pt-5 pb-12 px-8 flex flex-col items-center justify-center'>
            <h2 className='text-center text-6xl py-6'>The Team</h2>
            <div className='px-4 py-8 text-white text-sm bg-gray-900 flex flex-col items-center rounded-md border-4 border-lime'>


                <div className='max-w-[2/3] px-2 flex flex-col justify-between'>
                    <p className='text-xs text-center pt-3 my-6'>Meet the team who works tirelessly to ensure the long-term success of TLB</p>
                    <div className='flex flex-row justify-center py-6'>
                        <img src='./images/starceo.webp' className='w-1/2 mx-6' />
                        <img src='./images/djcoo.webp' className='w-1/2 mx-6' />
                    </div>
                    <div className='flex flex-row justify-center py-6'>
                        <img src='./images/raven.webp' className='w-1/2 mx-6' />
                        <img src='./images/kevanj.webp' className='w-1/2 mx-6' />
                    </div>
                    <div className='flex flex-row justify-center py-6'>
                        <img src='./images/marla.webp' className='w-1/2 mx-6' />
                        <img src='./images/west.png' className='w-1/2 mx-6' />
                    </div>

                </div>
            </div>
        </div>
    )
}