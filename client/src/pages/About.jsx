import React from 'react'
import { Link } from 'react-router-dom' //helps in navigation from one page to another without refreshing the page

export default function About() {
  return (
    <div className="bg-[#fcfcfc] w-[450px] h-[780px] mx-auto rounded-lg flex flex-col my-5 px-5 ">

      {/* Main Content */}
      <div className="flex flex-col">
        <div className="mt-8 flex justify-end">
        <Link to='/sign-up'><button className="text-[22px] font-medium text-[#9fb2ff] underline">Skip</button></Link>
        </div>

        <div className="flex justify-center">
          <img src="https://s3-alpha-sig.figma.com/img/9958/8bb7/dbf14a6d26ec54e2ba9e71eaef184f6b?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wr3KQ~d1yUj8ihEHiaH7fqq2Bx87CveYvGg5WfoTnraj4r5QDk9Rs2g7PQ0NkiePRuEs015f2Scvkp9djImftRb7vIN0Q436lUOUi2Vz0HMN2YLBsrUwlsxwHK4~i~GT7KGdOrwjVV045VwrAdEFTsIHU5OFwbyLFidv7viJwMQL~Dj1dO58aVn70O0qclkztMmmGqgp5sbPUTTBET0FqbqH2YDMASEQdPn-Eamptqvrv8K6eu-nsZ5Tr9lKIAKKP4MB5iSZncm46y5fepqMHCd~cdCg13TMWcF-QtyOF1YrT3NN~w4WQDoFpdPZYcVqBqLyN6pDrkUSf-~AcMV5VQ__"
            alt="Illustration" className="w-[352px] h-[234px] mt-14" />
        </div>

        <div>
          <h2 className="text-[20px] font-semibold leading-[24px] text-[#2c2b2b] mt-16">Track your Goal</h2>
          <p className="text-[16px] font-medium leading-[19.5px] text-[#787878] my-2  ">
            Don't worry if you have trouble determining your goals. We can help you determine your goals and track your goals.
          </p>
        </div>
      </div>

      {/* Footer Navigation */}
      <Link to='/sign-up'>
        <div className="w-20 h-20 relative left-[310px] mt-24">
          <div className="w-16 h-16 left-[7.08px] top-[6.80px] absolute bg-gradient-to-r from-indigo-100 to-indigo-400 rounded-full" />
          <div className="w-20 h-20 left-0 top-0 absolute rounded-full border border-indigo-400" />
          <div className="w-8 h-8 py-2 left-[24px] top-[23.60px] absolute justify-center items-center inline-flex font-medium text-[30px] text-white"> &gt; </div>
        </div>
      </Link>
    </div>
  )
}
