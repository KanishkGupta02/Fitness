import React from 'react'
import { Link } from 'react-router-dom' //helps in navigation from one page to another without refreshing the page

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
const scheduleEntries = [
    { time: '06:00 AM', activity: null },
    { time: '07:00 AM', activity: 'Ab Workout, 7:30am' },
    { time: '08:00 AM', activity: null },
    { time: '09:00 AM', activity: 'Upperbody Workout, 9am' },
    { time: '10:00 AM', activity: null },
    { time: '11:00 AM', activity: null },
    { time: '12:00 AM', activity: null },
    { time: '01:00 AM', activity: null },
    { time: '02:00 AM', activity: 'Lowerbody Workout, 3pm' },
    { time: '03:00 AM', activity: null },
    { time: '04:00 AM', activity: null },
    { time: '05:00 AM', activity: null }
];

const Calendar = () => {
    return (
        <div className="bg-[#fcfcfc] w-[450px] h-full mx-auto rounded-lg flex flex-col my-5 px-5">
            <div className=" inline-flex mt-10">
                <Link to='/tracker'><a href="#0" className="items-center rounded-lg font-bold bg-gray-100 px-3 py-2 text-xl"> &lt; </a></Link>
                <div className=" text-[#2c2b2b] font-semibold text-2xl mx-auto ml-[70px] mt-[6px] ">Workout Schedule</div>
            </div>
            <div className="bg-white p-4">
                <div className="flex justify-center mb-4">
                    <div className="text-black-500 font-bold">{'<'} Feb 2024 {'>'}</div>
                </div>
                <div className="flex justify-between mb-4 ">
                    {daysOfWeek.map((day, index) => (
                        <div
                            key={day}
                            className={`p-2 text-center text-sm w-16 ${index === 1 ? ' bg-gradient-to-r from-[#DEE5FF] to-[#809AFF] rounded-lg text-white' : ''
                                }`}
                        >
                            {day}
                            <div className={` text-3xl ${index === 1 ? 'font-bold' : ''}`}>{index + 5}</div>
                        </div>
                    ))}
                </div>

                <div className="bg-white rounded-lg shadow p-4 max-w-sm">
                    {scheduleEntries.map((entry, index) => (
                        <div key={index} className={`flex justify-start gap-6 items-center py-2 ${entry.activity ? 'text-blue-800' : ''} ${index !== scheduleEntries.length - 1 ? 'border-b border-gray-300' : ''}`}>
                            <span className="text-gray-600">{entry.time}</span>
                            {entry.activity && <span className=" bg-gradient-to-r from-[#D3A4F4] to-[#E9B1E0] text-white rounded-full py-1 px-3 text-sm">{entry.activity}</span>}
                        </div>
                    ))}
                    <div className="relative left-[300px] bottom-[120px]">
                        <button className="text-white bg-gradient-to-r from-[#D3A4F4] to-[#E9B1E0] rounded-full p-3 text-3xl w-16 h-16 flex  justify-center">
                            +
                        </button>
                    </div>

                    <div className="fixed inset-x-0 bottom-0 bg-white border-t py-2 w-[450px] mx-auto">
                        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg w-[450px] mx-auto">
                            <div className="flex justify-between items-center mx-auto p-5 text-3xl">

                                <button className="flex flex-col items-center">
                                    <span className="text-blue-500"><img width="35" height="35" src="https://img.icons8.com/ios/50/home--v1.png" alt="home--v1" /></span>
                                </button>

                                <button className="relative right-8">
                                    <span className="text-blue-500"><img width="35" height="35" src="https://img.icons8.com/ios/50/instagram-new--v1.png" alt="instagram-new--v1" /></span>

                                </button>

                                <button className=" text-white rounded-full p-3 
                                absolute top-[-1.25rem] left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#DEE5FF] to-[#809AFF]">
                                    <span className="text-blue-500"><img width="35" height="35" src="https://img.icons8.com/ios/50/000000/search--v1.png" alt="search--v1" /></span>
                                </button>

                                <button className="relative left-8">
                                    <span className="text-blue-500"><img width="35" height="35" src="https://img.icons8.com/ios/50/camera--v1.png" alt="camera--v1" /></span>

                                </button>

                                <button className="flex flex-col items-center">
                                    <span className="text-blue-500"> <img width="40" height="40" src="https://img.icons8.com/ios/50/gender-neutral-user--v1.png" alt="gender-neutral-user--v1" /></span>

                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}


export default Calendar