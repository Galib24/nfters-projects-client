import React, { useEffect, useState } from 'react';
import useData from '../../../hooks/useData';
const ThirdSection = () => {
    const [allData] = useData();
    const topData = allData.filter(item => item.ratio >= 1);
    console.log(topData);
    return (
        <>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 my-16 lg:grid-cols-3 '>
                <div className=' my-16 px-10'>
                    <img src="https://i.ibb.co/sCDSSGt/unsplash-F56-Y7dgr-Akc.png" alt="" />
                    <div className='flex gap-2  mt-4'>
                        <div className='w-10'>
                            <img src='https://i.ibb.co/0GjMPTZ/Ellipse-95.png' alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold'>The Futr Abstr</h1>
                            <p>10 in the stock</p>
                        </div>
                        <div className='flex-grow ml-10'>
                            <p>Hight Bid</p>
                            <div className='flex'>
                                <div className='w-50 mt-1' >
                                    <img src="https://i.ibb.co/LtdsXJg/Vector.png" alt="" />
                                </div>
                                <p className='font-semibold'>0.25 ETH</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-16 ml-10'>
                    <div className='flex gap-5'>

                        <div className=' w-36'>
                            <img className='rounded-xl' src='https://i.ibb.co/f4jGDHX/adoha.png' alt="" />
                        </div>

                        <div>
                            <h1 className='font-bold'>The Futr Abstr</h1>
                            <div className='flex gap-2'>
                                <div className='w-10 mt-5'>
                                    <img className='mr-5 ' src='https://i.ibb.co/0GjMPTZ/Ellipse-95.png' alt="" />
                                </div>
                                <span className='flex border-2 my-3 rounded-2xl border-green-500'>
                                    <div className='w-10'>
                                        <img style={{ width: '20px', marginTop: '10px', marginLeft: '25px' }} src="https://i.ibb.co/LtdsXJg/Vector.png" alt="" />
                                    </div>
                                    <p className='p-3'>0.25 ETH</p>
                                </span>

                            </div>
                            <button className='btn rounded-3xl  px-5 bg-[#3D00B7] text-white border-[#3D00B7] btn-ghost'>
                                Place a bid
                            </button>
                        </div>
                    </div>
                    <div className='flex gap-5 my-6'>
                        <div className=' w-36'>
                            <img className='rounded-xl' src='https://i.ibb.co/tcssq1j/sdfh.png' alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold'>The Futr Abstr</h1>
                            <div className='flex gap-2'>
                                <div className='w-10 mt-5'>
                                    <img className='mr-5 ' src='https://i.ibb.co/0GjMPTZ/Ellipse-95.png' alt="" />
                                </div>
                                <span className='flex border-2 my-3 rounded-2xl border-green-500'>
                                    <div className='w-10'>
                                        <img style={{ width: '20px', marginTop: '10px', marginLeft: '25px' }} src="https://i.ibb.co/LtdsXJg/Vector.png" alt="" />
                                    </div>
                                    <p className='p-3'>0.25 ETH</p>
                                </span>

                            </div>
                            <button className='btn rounded-3xl  px-5 bg-[#3D00B7] text-white border-[#3D00B7] btn-ghost'>
                                Place a bid
                            </button>
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <div className=' w-36'>
                            <img className='rounded-xl' src='https://i.ibb.co/8m1TV7n/adiha.png' alt="" />
                        </div>
                        <div>
                            <h1 className='font-bold'>The Futr Abstr</h1>
                            <div className='flex gap-2'>
                                <div className='w-10 mt-5'>
                                    <img className='mr-5 ' src='https://i.ibb.co/0GjMPTZ/Ellipse-95.png' alt="" />
                                </div>
                                <span className='flex border-2 my-3 rounded-2xl border-green-500'>
                                    <div className='w-10'>
                                        <img style={{ width: '20px', marginTop: '10px', marginLeft: '25px' }} src="https://i.ibb.co/LtdsXJg/Vector.png" alt="" />
                                    </div>
                                    <p className='p-3'>0.25 ETH</p>
                                </span>

                            </div>
                            <button className='btn rounded-3xl  px-5 bg-[#3D00B7] text-white border-[#3D00B7] btn-ghost'>
                                Place a bid
                            </button>
                        </div>
                    </div>
                </div>
                                                      {/* table part */}

                <div className="overflow-x-auto my-16 ml-7">
                    <h1 className='font-bold text-3xl'>TOP COLLECTIONS OVER</h1>
                    <p className='text-[#3D00B7] my-5'>Last 7 days</p>
                    <table className="table my-4">
                        
                   
                        <tbody>
                            {
                                topData.map((items, index) =>    <tr
                                key={items.id}
                                >
                                <td className='font-semibold text-2xl'>
                                  {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={items.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold ml-3">{items.name}</div>
                                            <div className='w-10 ml-3  flex'>
                                        <img className='mr-2' src="https://i.ibb.co/LtdsXJg/Vector.png" alt="" />
                                        <div>
                                            <p>{items.eth}</p>
                                        </div>
                                    </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                <div className="font-semibold text-[#14C8B0] text-2xl"> +{items.ratio}</div>
                                </td>
                              
                            </tr>
                     )
                            }
                         
                   
                        </tbody>
               

                    </table>
                </div>
            </section>
        </>
    );
};

export default ThirdSection;