import React from 'react';
import { Link } from 'react-router-dom' //helps in navigation from one page to another without refreshing the page


export default function Home() {
  return (
    <div className="bg-[#fcfcfc] w-[450px] h-[780px] mx-auto rounded-lg flex flex-col my-5 px-5 ">

      {/* Main Content */}
      <div className="flex flex-col">
        <div className="mt-8 flex justify-end">
          <Link to='/about'><button className="text-[22px] font-medium text-[#9fb2ff] underline">Skip</button></Link>
        </div>

        <div className="flex justify-center">
          <img src="https://s3-alpha-sig.figma.com/img/bd9b/3108/cb36b0b2aebaab8d7bad4ecbedf2a369?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X98NRcuTqs-LptbnMh8RugF2~giYfag76Pj4fDaCsYjiOxKMJAmU83mRTuBiDO--rZtkz8tgcqXe--QgR0XDTWiw3v3LSOmG1ty6G6aWVmj~1aqDWqMW0WQ0H9vT1ThnQYUm21xuvgiP31FNPy2JGIPek-rLc2gOU57w5pUncI0dkbC2XG~dHXLhmPJP2RGfxaPzPrXABntLnE6JVJtUKL5SNI3bToqm9hnpecsig~gIAJbwiF6otDKx1SRsB2giqMwv0Oz4N3dklR77Y2IKMrxtdBxRNY4nxASS8iW73pI4sp3CvgngfqAGrKgnSAc1fLXUjFDGSYNR~UwcgfB7Uw__"
            alt="Illustration" className="w-[282px] h-[282px] mt-14" />
        </div>

        <div>
          <h2 className="text-[20px] font-semibold leading-[24px] text-[#2c2b2b] mt-16">Track your Goal</h2>
          <p className="text-[16px] font-medium leading-[19.5px] text-[#787878] my-2  ">
            Don't worry if you have trouble determining your goals. We can help you determine your goals and track your goals.
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <Link to='/about'>
        <div className="w-20 h-20 relative left-[310px] mt-14">
          <div className="w-16 h-16 left-[7.08px] top-[6.80px] absolute bg-gradient-to-r from-indigo-100 to-indigo-400 rounded-full" />
          <div className="w-20 h-20 left-0 top-0 absolute rounded-full border border-indigo-400" />
          <div className="w-8 h-8 py-2 left-[24px] top-[23.60px] absolute justify-center items-center inline-flex font-medium text-[30px] text-white"> &gt; </div>
        </div>
      </Link>
    </div>
  );
};


