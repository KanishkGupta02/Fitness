import React, { useState } from 'react';
import { Link } from 'react-router-dom' //helps in navigation from one page to another without refreshing the page

import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const WorkoutTracker = () => {

    const handleToggle = (workout) => {
        setToggleStates(prevStates => ({ ...prevStates, [workout]: !prevStates[workout] }));
    };

    const workoutChartData = {
        labels: ['12:00 AM', '6:00 AM', '12:00 PM', '6:00 PM'],
        datasets: [
            {
                label: 'Morning Workout',
                data: [200, 550, 400, 300],
                backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(54, 162, 235, 1)'],
                borderWidth: 0,
            },
            {
                label: 'Evening Workout',
                data: [300, 600, 450, 900],
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)'],
                borderWidth: 0,
            },
        ],
    };

    const workoutChartOptions = {
        maintainAspectRatio: false,
        scales: {
            x: {
                title: {
                    display: true,
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Calories Burned'
                },
                ticks: {
                    beginAtZero: true,
                }
            }
        },
        plugins: {
            legend: {
                display: true,
            },
        },
        elements: {
            point: {
                radius: 0
            }
        },
    };




    return (
        <div className="bg-[#fcfcfc] w-[450px] h-full mx-auto rounded-lg flex flex-col my-5 px-5">
            {/* Other components like header go here */}
            <div className=" flex mt-10 justify-between">
                <Link to='/goals'><a href="#0" className="items-center rounded-lg font-bold bg-gray-100 px-3 py-2 text-xl"> &lt; </a></Link>
                <div className=" text-[#2c2b2b] font-semibold text-2xl mx-auto ml-20 mt-[6px] ">Workout Tracker</div>
                <Link to='/calendar'><a href="#0" className="items-center rounded-lg font-bold bg-gray-100 px-3 py-2 text-xl"> &gt; </a></Link>
            </div>


            <div className="relative h-44 w-full px-4 mt-4">
                <Bar data={workoutChartData} options={workoutChartOptions} />
            </div>

            <div className=" mx-auto align-middle rounded-2xl shadow-lg bg-gradient-to-r from-[#b1c2fd] to-[#efefef] p-2 mb-4  h-[73px] w-[400px]">
                <div className="flex justify-between items-center">
                    <div className='flex gap-6 '>
                        <img width="40" height="40" src="https://img.icons8.com/ios/50/228BE6/error--v1.png" alt="error--v1" className='mt-1 ml-3' />
                        <p className='mt-1 text-sm font-medium'>You've burned fewer calories than yesterday. Time to get moving!</p>
                    </div>
                </div>
            </div>

            {/* Upcoming workouts */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold">Upcoming Workout</h2>
                    <button className="text-sm text-gray-500">See More</button>
                </div>
                <div className="flex items-center mb-4 bg-white shadow rounded p-4">
                    <img src="https://s3-alpha-sig.figma.com/img/4aee/a404/269733701b8604f00f8ab3dbc8874dc4?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=W~R5jLwDlFZg5jA64xQhhXbvhiOqzfoczemNjyW41IVUCfJ07EPR-hsYnSBBRI2sqofehWaWTuQY~6RvVQ3wD76Uk4Txe5bN9Yj1DViahbdVfdkonHpB-PV-nkAvCb3M2NCNr6qtm~WbCe8Ev5zORs0VERmpMiOOhbBv355jujI8R0aeICn1CHOqALGYLcoqFrac56bs-WVo5jgsmBTg7gf1NHO-AuLwLmlrvKIaHMDoOPg1EhdNJrWE2shP4dNuAzmevLfNGzn1tgxrdGBTo~lSYqtGIlBfZOQfGq9c5AuV7OKylc4iRvLNCto3-0o-1ytNSDtJ1gRJESlnAmuicQ__"
                        alt="" className="w-12 h-12 bg-blue-50 rounded-full" />
                    <div className='flex flex-col justify-start ml-4'>
                        <span>Full Body Workout </span> <span className="text-gray-400 text-sm">Today 3pm</span>
                    </div>

                    <label for="check0" className="bg-[#8099FF] cursor-pointer relative left-28 w-12 h-7 rounded-full ">
                        <input type="checkbox" id="check0" className="sr-only peer" />
                        <span className="w-5 h-5 bg-white absolute rounded-full left-1 top-1 peer-checked:bg-black peer-checked:left-6 transition-all duration-500"></span>
                    </label>
                </div>

                <div className="flex items-center mb-4 bg-white shadow rounded p-4">
                    <img src="https://s3-alpha-sig.figma.com/img/5688/dda6/63ce83a9876ee1cadf652148a636fe39?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AqtSmY1k0iQ8zli~s3WMSgjesxoSBX573f59fyG3X26w9pIUPYo3nnz3m3c4qUGEIovIU09HBtKVrkQySapb0bh8Yp8U1FJK5aPFsozGeJ8X861G5sPhGHKYlsLopZDDDwAa6ARD3e6uHOn6FB3FULjSyMzWCM9Uf3ARLQk-RlKJA8a-wiR7virfjjVWh4IzgnqiQbjrIqzXxccxMsIXsy0zZjzxEuZlEglquyGS6~c4lWjn~qF0tc8kXABthnR~PLAlkKsLKaMV7GtrCE90MqDMlogLvYNaTUjWgiQ2UvuzhlOWODEEhPSJhpWAX-cKKrst9CGnC6Km~BR-DEGKKg__"
                        alt="" className="w-12 h-12 bg-blue-50 rounded-full" />
                    <div className='flex flex-col justify-start ml-4'>
                        <span>Upper Body Workout </span> <span className="text-gray-400 ">4 Feb 3:30 pm</span>
                    </div>

                    <label for="check1" className="bg-[#8099FF] cursor-pointer relative left-[91px] w-12 h-7 rounded-full ">
                        <input type="checkbox" id="check1" className="sr-only peer" />
                        <span className="w-5 h-5 bg-white absolute rounded-full left-1 top-1 peer-checked:bg-black peer-checked:left-6 transition-all duration-500"></span>
                    </label>
                </div>

                <h1 className="text-lg font-semibold">What Do You Want to Train</h1>
                <div className=" mx-auto rounded-2xl shadow-lg bg-[#8CB1FF] p-4 mb-16 mt-5">
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <span className="text-md font-semibold text-gray-700">Full Body Workout</span>
                            <span className="text-gray-500 text-sm">Arms</span>
                            <span className="text-gray-500 text-sm">Chest</span>
                        </div>
                        <div>
                            {/* Placeholder for the workout illustration */}
                            {/* Please replace 'exercise-illustration.png' with your actual image path */}
                            <img src="https://s3-alpha-sig.figma.com/img/23ae/977c/32610d884493905711642300c8cc67c0?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mu33qv9pYMsUqYlc9TFa5ztiZhwNCioQkCJ4s~C5W9TtHezEYCOvLE9X3I4rvzFgZJ1X4FDgOQwtkiNovuk7EWLhsinm8Sody3hycvElP3~J6V4oLgXkoHjd~O-oFgMKfjnYA~XKv9WfsKfotsK0WJ0gEjvTY~LXvi34bZZdbcMOZ-EEk5yKQ9kpACihIFgANBY-PN7NpvZN-0p1i05GsvdVvhx9LzOQLnTRmbUJakdyx3pqot3txCBZSpXDnnHJiDlwZwE-j-x84-yE2snCCUTn~LsZBbvKtpP7a1nl9h5I6Tkl503oojKuwQs~zH9rUa30hrt4I3WvV8Gkk5wwHg__"
                                alt="Workout Illustration" className="h-24 bg-[#FFFFFF] opacity-80 rounded-full  " />
                        </div>
                    </div>
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
    );
};

export default WorkoutTracker;
