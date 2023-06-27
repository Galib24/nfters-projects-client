import React from 'react';
import './FirstSection.css'

const FirstSection = () => {
    return (
        <>
            <div className=' py-96   '>
                <div className='ml-5'>
                    <h1 className='uppercase text-5xl font-extrabold'>discover, and collect <br /> Digital art nfts </h1>
                    <p className='my-6'>Digital marketing for crypto collections and <br /> non-fungible tokens (NFTs). Buy, Sell, and discover <br /> exclusive digital assets.</p>
                    <button className='btn rounded-3xl    px-5 bg-[#3D00B7] text-white border-[#3D00B7] btn-ghost'>Explore Now</button>
                </div>

                <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <div>
                        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-3 my-6 ml-6'>
                            <div>
                                <h1 className='text-4xl font-extrabold'>89K+</h1>
                                <p>Artwork</p>
                            </div>
                            <div>
                                <h1 className='text-4xl font-extrabold'>12K+</h1>
                                <p>Auction</p>
                            </div>
                            <div>
                                <h1 className='text-4xl font-extrabold'>15K+</h1>
                                <p>Artist</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='  image1 w-full'>


                            <div className='relative'>


                                <div className='absolute w-[330px] ml-40'>
                                    <img src='https://i.ibb.co/wM40BQC/unsplash-t-ZCr-Fp-SNi-IQ.png' alt="" />

                                </div>
                                <div className='absolute w-[340px] ml-20 '>
                                    <img src='https://i.ibb.co/NVw2bGC/unsplash-p-Vo-EPp-Lw818.png' alt="" />
                                </div>
                                <div className='absolute w-[353px] '>
                                    <img src='https://i.ibb.co/bLYCYkb/unsplash-E8-Ufcyxz514.png' alt="" />
                                </div>

                                {/* <div style={{borderRadius: '50px 50px 50px 50px', width: '90px'}} className='p-5 absolute top-28  bg-green-600 '>Live Auction</div> */}
                                <div className='absolute top-30 mt-10 ml-10'>
                                    <h2 className='text-2xl font-semibold text-white '>Abstr Gradient NFT</h2>
                                    <div className='flex'>
                                    <img className='mr-4' src='https://i.ibb.co/0GjMPTZ/Ellipse-95.png' alt="" />
                                    <p className='text-white'>Arkhan17</p>
                                    </div>
                                </div>
                                <div className='absolute top-48  w-[100px] '>
                                    <img src='https://i.ibb.co/ngmpxSt/Group-83.png' alt="" />
                                </div>

                                <div className='grid sm:grid-cols-2 md:grid-cols-2  backdrop-blur-sm bg-white/30 absolute top-80 ml-10 px-11 rounded-3xl gap-4 text-white '>
                                    <div>
                                        <h2>Current Bid</h2>
                                        <span className='flex'>
                                            <img className='mr-2' src='https://i.ibb.co/Z8tCzkY/Vector.png' alt="" />
                                            <p>0.25 ETH</p>
                                        </span>
                                    </div>
                                    <div>
                                        <p>Ends in</p>
                                        <h1 className='mr-1'>12h 43m 43s</h1>

                                    </div>
                                </div>
                          
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default FirstSection;