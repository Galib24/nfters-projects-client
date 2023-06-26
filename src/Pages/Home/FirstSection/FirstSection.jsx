import React from 'react';
import './FirstSection.css'
import img1 from '../../../assets/unsplash_E8Ufcyxz514.png'
import img2 from '../../../assets/unsplash_pVoEPpLw818.png'
import img3 from '../../../assets/unsplash_tZCrFpSNiIQ.png'
import firstLogo from '../../../assets/Group 83.png'
import secondLogo from '../../../assets/Vector.svg'
import user1 from '../../../assets/Ellipse 95.png'

const FirstSection = () => {
    return (
        <>
            <div className=' py-96   '>
                <div className='ml-5'>
                    <h1 className='uppercase text-5xl font-bold'>discover, and collect <br /> Digital art nfts </h1>
                    <p className='my-6'>Digital marketing for crypto collections and <br /> non-fungible tokens (NFTs). Buy, Sell, and discover <br /> exclusive digital assets.</p>
                    <button className='btn btn-secondary rounded-3xl font-bold'>Explore Now</button>
                </div>

                <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <div>
                        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-3 my-6 ml-6'>
                            <div>
                                <h1 className='text-4xl font-bold'>89K+</h1>
                                <p>Artwork</p>
                            </div>
                            <div>
                                <h1 className='text-4xl font-bold'>12K+</h1>
                                <p>Auction</p>
                            </div>
                            <div>
                                <h1 className='text-4xl font-bold'>15K+</h1>
                                <p>Artist</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='  image1 w-full'>


                            <div className='relative'>


                                <div className='absolute w-[330px] ml-40'>
                                    <img src={img3} alt="" />

                                </div>
                                <div className='absolute w-[340px] ml-20 '>
                                    <img src={img2} alt="" />
                                </div>
                                <div className='absolute w-[353px] '>
                                    <img src={img1} alt="" />
                                </div>

                                {/* <div style={{borderRadius: '50px 50px 50px 50px', width: '90px'}} className='p-5 absolute top-28  bg-green-600 '>Live Auction</div> */}
                                <div className='absolute top-30 mt-10 ml-10'>
                                    <h2 className='text-2xl font-semibold text-white '>Abstr Gradient NFT</h2>
                                    <div className='flex'>
                                    <img className='mr-4' src={user1} alt="" />
                                    <p className='text-white'>Arkhan17</p>
                                    </div>
                                </div>
                                <div className='absolute top-48  w-[100px] '>
                                    <img src={firstLogo} alt="" />
                                </div>

                                <div className='grid sm:grid-cols-2 md:grid-cols-2  backdrop-blur-sm bg-white/30 absolute top-80 ml-10 px-11 rounded-3xl gap-4 text-white '>
                                    <div>
                                        <h2>Current Bid</h2>
                                        <span className='flex'>
                                            <img className='mr-2' src={secondLogo} alt="" />
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