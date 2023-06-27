import React from 'react';
import useData from '../../hooks/useData';

const AllCollceciton = () => {
    const [allData] = useData();
    return (
        <>
                        {/* card sections */}
                        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 mb-16'>
                {
                    allData.map(items => <div key={items.id}>
                        <div className="card w-72 bg-base-100 shadow-xl">
                            <figure>
                                <div className='relative overflow-clip'>

                                    <img src={items.img} alt="Shoes" />
                                    <div className='flex absolute bottom-0'>
                                        <img src={items.logo1} alt="" />
                                        <img src={items.logo2} alt="" />
                                        <img src={items.logo3} alt="" />
                                        <img src={items.logo4} alt="" />
                                    </div>
                                </div>
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{items.name}</h2>
                                <span className='flex  rounded-2xl border-green-500'>
                                    <div className='w-4'>
                                        <img style={{ width: '12px' }} src="https://i.ibb.co/LtdsXJg/Vector.png" alt="" />
                                    </div>
                                    <div className='flex gap-2'>
                                        <p>{items.ratio} ETH</p>
                                        <p className=' ml-16'>{items.count}</p>
                                    </div>

                                </span>
                                <div className='flex'>
                                    <p className='rounded-3xl mr-11 hover:bg-[#5539A8] hover:text-white text-[#5539A8]'> {items.time}</p>
                                    <p className=' rounded-3xl  hover:bg-[#5539A8] hover:text-white'>Place a bid</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    )
                }

            </div>
        </>
    );
};

export default AllCollceciton;