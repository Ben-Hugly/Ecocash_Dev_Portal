import React from 'react';
import { FaChevronRight, FaTrash } from 'react-icons/fa';
import { FaArrowDown, FaArrowUp, FaArrowLeft } from 'react-icons/fa';
import { step_into, step_out,undo } from '../../assets/DashboardIcons';

const LabelWithCircle = ({ text, color }) => (
    <div className={`border border-[#035AA9] flex items-center space-x-1 rounded`}>
        <div className={`h-2 w-2 rounded-full ${color} ml-2`}></div>
        <span className={` text-white bg-${color} px-2 text-xs`}>
            {text}
        </span>
    </div>
);

const ArchivedApplicationCard = ({ id, title, allTimeData, weeklyData, status, currency, onRestore, onDelete }) => {
    return (
        <div className="bg-opacity-50 backdrop-blur-lg border border-[#035AA9] rounded-3xl p-6 flex flex-col shadow-lg"> 
            <div className="flex justify-between items-center mb-2 md:gap-8 gap-5">
                <h4 className="text-xl font-semibold">{id}</h4>
                <div className="flex items-center space-x-2">
                    <LabelWithCircle text="Archived" color="bg-red-500" />
                    <LabelWithCircle text="Live" color="bg-green-500" />
                    <div className={`border border-[#035AA9] flex items-center space-x-1 rounded`}>
                       <span className={` text-white px-2 text-xs`}>{currency}</span>
                     </div>
                    
                    <FaChevronRight className="text-red-500 " /> 
                </div>
            </div>

            <hr className="my-2 border-[#035AA9]" />
            <h5 className="text-lg mb-4 text-left mt-3">{title}</h5>

            <h6 className="font-normal text-left mt-4 text-sm">All time transactions</h6>
            <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-left">
                    <div className='flex flex-row items-center mt-2'> 
                        <p className='mr-2 text-sm'>Received</p> 
                        <img src={step_into} color='#F2F8FF'/> 
                    </div>
                    <p className="text-textGreen mt-2 text-sm">
                        <sup className='text-xs mr-2'>$</sup>
                        {allTimeData.received}
                    </p>
                </div>
                <div className="text-left">
                    <div className='flex flex-row items-center mt-2'> 
                        <p className='mr-2 text-xs'>Sent</p> 
                        <img src={step_out} color='#F2F8FF' /> 
                    </div>
                    <p className="text-blue-500 mt-2 text-sm"><sup className='text-xs mr-2'>$</sup>{allTimeData.sent}</p>
                </div>
                <div className="text-left">
                    <div className='flex flex-row items-center mt-2'> 
                        <p className='mr-2 text-xs'>Reversed:</p> 
                        <img src={undo} color='#F2F8FF' height={20} /> 
                    </div>
                    <p className="text-red-500 mt-2 text-sm"><sup className='text-xs mr-2'>$</sup>{allTimeData.reversed}</p>
                </div>
            </div>

            <h6 className="font-normal text-left mt-4 text-sm">This week's transactions</h6>
            <div className="grid grid-cols-3 gap-2">
                <div className="text-left">
                    <div className='flex flex-row items-center mt-2'> 
                        <p className='mr-2 text-xs'>Received</p> 
                        <img src={step_into} color='#F2F8FF'/> 
                    </div>
                    <p className="text-textGreen mt-2 text-sm"><sup className='text-xs mr-2'>$</sup>{weeklyData.received}</p>
                </div>
                <div className="text-left">
                    <div className='flex flex-row items-center mt-2'> 
                        <p className='mr-2 text-xs'>Sent</p> 
                       <img src={step_out} color='#F2F8FF' /> 
                    </div>
                    <p className="text-blue-500 mt-2 text-sm"><sup className='text-xs mr-2'>$</sup>{weeklyData.sent}</p>
                </div>
                <div className="text-left">
                    <div className='flex flex-row items-center mt-2'> 
                        <p className='mr-2 text-xs'>Reversed:</p> 
                        <img src={undo} color='#F2F8FF' height={20} /> 
                    </div>
                    <p className="text-red-500 mt-2 text-sm"><sup className='text-xs mr-2'>$</sup>{weeklyData.reversed}</p>
                </div>
            </div>
            <hr className="my-3 border-[#035AA9] mt-7" />

            <div className="flex space-x-4 mt-4"> 
                <button className="bg-[#02437D] text-white px-3 py-2 rounded-full hover:bg-[#023B6A] w-full text-sm"> 
                    Delete Forever 
                </button> 
                <button className="bg-[#035AA9] text-white px-3 py-2 rounded-full hover:bg-[#024D8F] w-full text-sm"> 
                    Restore Application 
                </button> 
            </div> 
        </div>
    );
};

const ArchivedApplications = ({ applications }) => {
    return (
        <div className="bg-[#1f303f] text-white p-6 rounded-3xl">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-left">Archived Applications</h2>
                <div className="flex items-center">
                    <button className="bg-[#02437D] text-white pl-5 pr-4 py-2 rounded-3xl hover:bg-[#023B6A] mr-2">
                        <FaTrash className="justify-center mr-1 my-1" />
                    </button>
                    <button className="bg-[#035AA9] text-white px-4 py-2 rounded-full hover:bg-[#024D8F] flex items-center">
                        View All <FaChevronRight className="ml-3 " />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {applications.map((app) => (
                    <ArchivedApplicationCard
                        key={app.id}
                        id={app.id}
                        title={app.title}
                        allTimeData={app.allTimeData}
                        weeklyData={app.weeklyData}
                        status={app.status}
                        currency={app.currency}
                        onRestore={app.onRestore}
                        onDelete={app.onDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default ArchivedApplications;