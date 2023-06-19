import React from 'react';
import CountUp from 'react-countup';
import { FaGem, FaUser } from 'react-icons/fa';
import { BsStarFill } from 'react-icons/bs';
import { RiVipCrownFill } from 'react-icons/ri';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const TotalUser = () => {

    const infos = [
        {
            icon: <FaUser></FaUser>,
            number: 4735,
            name: "Total Users",
            color: "bg-red-500",
            growth: "16.33",
            growthIcon: <AiOutlineArrowDown></AiOutlineArrowDown>,
            growthColor: "text-emerald-500"
        },
        {
            icon: <BsStarFill></BsStarFill>,
            number: 1965,
            name: "Personal Users",
            color: "bg-pink-500",
            growth: "3.05",
            growthIcon: <AiOutlineArrowUp></AiOutlineArrowUp>,
            growthColor: "text-red-500"
        },
        {
            icon: <RiVipCrownFill></RiVipCrownFill>,
            number: 945,
            name: "Business Users",
            color: "bg-sky-500",
            growth: "2.01",
            growthIcon: <AiOutlineArrowUp></AiOutlineArrowUp>,
            growthColor: "text-red-500"
        },
        {
            icon: <FaGem></FaGem>,
            number: 1825,
            name: "Professional Users",
            color: "bg-emerald-500",
            growth: "11.78",
            growthIcon: <AiOutlineArrowDown></AiOutlineArrowDown>,
            growthColor: "text-emerald-500"
        }
    ]


    return (
        <div className='mt-5 md:mt-0 pl-16 pr-5 bg-slate-100 py-16'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-[1500px] mx-auto'>
                {
                    infos.map(info =>
                        <div className='text-start bg-white p-5 rounded-[5px]'>
                            <div className='flex justify-between'>
                                <div>
                                    <h1 className='text-xl uppercase font-bold text-gray-500'>{info.name}</h1>
                                    <CountUp
                                        end={info.number}
                                        duration={8}
                                        className='font-bold text-3xl'
                                    />
                                </div>
                                <div>
                                    <p className={`text-[25px] text-white rounded-full p-4 shadow-lg ${info.color}`}>{info.icon}</p>
                                </div>
                            </div>
                            <div className='mt-5 flex items-center gap-2'>
                                <div className={`${info.growthColor} flex items-center`}>
                                    <p>{info.growthIcon}</p>
                                    <p>{info.growth}%</p>
                                </div>
                                <p className='text-gray-500'>Since last month</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TotalUser;