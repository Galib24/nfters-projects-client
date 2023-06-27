import React from 'react';
const SecondSection = () => {
    return (
        <>
            <div className='py-32 bg-gray-200 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                <div>
                    <h1 className='text-3xl ml-4 font-extrabold uppercase'>the amazing nft art <br /> of the world here</h1>
                </div>
                <div className='grid grid-cols-1'>
                    <div className='flex gap-5'>
                        <img src='https://i.ibb.co/nQ2Rdc3/card-tick-1-1.png' alt="" />
                        <h1 className='text-2xl font-semibold'>Fast Transaction</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa cupiditate quisquam reprehenderit minus, ex sint dolor aliquid corrupti quam.
                    </p>
                </div>
                <div className='grid grid-cols-1 mr-3'>
                    <div className='flex gap-5'>
                        <img src='https://i.ibb.co/qpNrnsC/chart-square-2.png' alt="" />
                        <h1  className='text-2xl font-semibold'>Fast Transaction</h1>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ipsa cupiditate quisquam reprehenderit minus, ex sint dolor aliquid corrupti quam.
                    </p>
                </div>
            </div>
        </>
    );
};

export default SecondSection;