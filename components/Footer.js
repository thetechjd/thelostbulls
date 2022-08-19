import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-footer h-40 pt-4 flex flex-col items-center'>
      <p>Whitepaper</p>
      <ul className='flex space-x-2'>
        <li className='hidden sm:flex'>
          <a className='bg-opacity-0 text-gray-100 opacity-80 items-center relative h-7 tracking-wider pt-0.5 first::pt-0 uppercase text-2xs font-500 padding-huge bg-blue-300 duration-200 px-4 hover:bg-opacity-90 rounded flex justify-center flex-row transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' href=' https://twitter.com/DadLifeNFT' target='_blank' rel='noreferrer'>
            <svg xmlns="http://www.w3.org/2000/svg" className=" fill-current stroke-current h-4 w-4" viewBox="0 0 40 40"><path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"></path></svg>
          </a>
        </li>
        {/* Discord Icon */}
        <li className='hidden sm:flex'>
          <a className='bg-opacity-0 text-gray-100 opacity-80 items-center relative h-7 tracking-wider pt-0.5 first::pt-0 uppercase text-2xs font-500 padding-huge bg-blue-300 duration-200 px-4 hover:bg-opacity-90 rounded flex justify-center flex-row cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' href='http://discord.gg/'>
            <span className="text-black text-xs hidden hover:visible absolute top-[-6px]">Closed </span>
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-current stroke-current h-4 w-4" viewBox="0 0 40 40"><path d="M33.567 7.554a32.283 32.283 0 00-7.969-2.472.12.12 0 00-.128.06c-.344.613-.725 1.411-.992 2.039a29.804 29.804 0 00-8.95 0 20.625 20.625 0 00-1.008-2.038.126.126 0 00-.128-.06 32.194 32.194 0 00-7.968 2.47.114.114 0 00-.053.046C1.296 15.18-.095 22.577.588 29.88c.003.036.023.07.05.092 3.349 2.459 6.593 3.952 9.776 4.941a.127.127 0 00.137-.045 23.203 23.203 0 002-3.253.124.124 0 00-.068-.172A21.379 21.379 0 019.43 29.99a.126.126 0 01-.012-.209c.205-.153.41-.313.607-.475a.121.121 0 01.126-.017c6.407 2.925 13.343 2.925 19.675 0a.12.12 0 01.128.015c.196.162.4.324.608.477a.126.126 0 01-.011.209c-.975.57-1.99 1.051-3.055 1.454a.125.125 0 00-.067.173 26.052 26.052 0 001.998 3.252c.031.043.087.062.138.046 3.199-.99 6.442-2.482 9.79-4.941a.126.126 0 00.052-.09c.816-8.445-1.368-15.78-5.789-22.283a.1.1 0 00-.05-.046zm-20.06 17.88c-1.928 0-3.517-1.771-3.517-3.946 0-2.175 1.558-3.946 3.518-3.946 1.975 0 3.549 1.787 3.518 3.946 0 2.175-1.558 3.946-3.518 3.946zm13.01 0c-1.93 0-3.52-1.771-3.52-3.946 0-2.175 1.56-3.946 3.52-3.946 1.974 0 3.548 1.787 3.517 3.946 0 2.175-1.543 3.946-3.518 3.946z"></path></svg>
          </a>
        </li>
        <li className='hidden sm:flex'>
          <a className='bg-opacity-0 text-gray-100 opacity-80 items-center relative h-7 tracking-wider pt-0.5 first::pt-0 uppercase text-2xs font-500 padding-huge bg-blue-300 duration-200 px-4 hover:bg-opacity-90 rounded flex justify-center flex-row cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' href='http://discord.gg/'>
            <span className="text-black text-xs hidden hover:visible absolute top-[-6px]">Closed </span>
            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32px" height="32px"><path d="M 11.46875 5 C 7.917969 5 5 7.914063 5 11.46875 L 5 20.53125 C 5 24.082031 7.914063 27 11.46875 27 L 20.53125 27 C 24.082031 27 27 24.085938 27 20.53125 L 27 11.46875 C 27 7.917969 24.085938 5 20.53125 5 Z M 11.46875 7 L 20.53125 7 C 23.003906 7 25 8.996094 25 11.46875 L 25 20.53125 C 25 23.003906 23.003906 25 20.53125 25 L 11.46875 25 C 8.996094 25 7 23.003906 7 20.53125 L 7 11.46875 C 7 8.996094 8.996094 7 11.46875 7 Z M 21.90625 9.1875 C 21.402344 9.1875 21 9.589844 21 10.09375 C 21 10.597656 21.402344 11 21.90625 11 C 22.410156 11 22.8125 10.597656 22.8125 10.09375 C 22.8125 9.589844 22.410156 9.1875 21.90625 9.1875 Z M 16 10 C 12.699219 10 10 12.699219 10 16 C 10 19.300781 12.699219 22 16 22 C 19.300781 22 22 19.300781 22 16 C 22 12.699219 19.300781 10 16 10 Z M 16 12 C 18.222656 12 20 13.777344 20 16 C 20 18.222656 18.222656 20 16 20 C 13.777344 20 12 18.222656 12 16 C 12 13.777344 13.777344 12 16 12 Z" /></svg>
          </a>
        </li>

      </ul>
      <div className='flex flex-row justify-between'>
        <p className='text-2xs px-6'>Privacy Policy</p>
        <p className='text-2xs px-6 '>Cookie Policy</p>
        <p className='text-2xs px-6'>Terms of Use</p>

      </div>
      <p className='text-2xs pt-4 pb-1'>©2022 by The Lost Bulls. </p>



    </footer>
  )
}
