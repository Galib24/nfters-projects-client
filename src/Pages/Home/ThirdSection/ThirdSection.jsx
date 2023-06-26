import React from 'react';
import img1 from '../../../assets/Ellipse 95.png'
import img2 from '../../../assets/imgmm.png'
import img3 from '../../../assets/Group.png'
import img4 from '../../../assets/imgmmm.png'
const ThirdSection = () => {
    return (
        <>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 my-16 lg:grid-cols-3'>
                <div className=' my-16 px-10'>
                    <img src="https://i.ibb.co/sCDSSGt/unsplash-F56-Y7dgr-Akc.png" alt="" />
                    <div className='flex gap-2  mt-4'>
                        <div className='w-10'>
                            <img src={img1} alt="" />
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
                        
                        <img  src={img2} alt="" />
                        
                        <div>
                            <h1 className='font-bold'>The Futr Abstr</h1>
                            <div className='flex gap-2'>
                                <div className='w-10 mt-5'>
                                    <img className='mr-5 ' src={img1} alt="" />
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
                        <img src={img3} alt="" />
                        <div>
                            <h1 className='font-bold'>The Futr Abstr</h1>
                            <div className='flex gap-2'>
                                <div className='w-10 mt-5'>
                                    <img className='mr-5 ' src={img1} alt="" />
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
                        <img src={img4} alt="" />
                        <div>
                            <h1 className='font-bold'>The Futr Abstr</h1>
                            <div className='flex gap-2'>
                                <div className='w-10 mt-5'>
                                    <img className='mr-5 ' src={img1} alt="" />
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
            </section>
        </>
    );
};

export default ThirdSection;