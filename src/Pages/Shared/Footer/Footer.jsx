import React from 'react';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div>
                <footer className="footer p-10 bg-white text-black">

                    <div>
                        <span className="footer-title">Social</span>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <h1 className='text-3xl font-bold uppercase'>nfters</h1>
                                <p className='my-7'>The world's first largest digital marketplace for crypto collections and non-fungible tokens (NFT's) Buys, sell and discover exclusive items </p>
                                <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3  '>
                                    <div style={{ width: '50px' }} className='btn btn-ghost rounded-full text-white  bg-blue-400 '>
                                        <FaFacebookSquare className='rounded-full w-5 text-2xl'></FaFacebookSquare>
                                    </div>
                                    <div style={{ width: '50px' }} className='btn btn-ghost rounded-full text-white  bg-sky-400 '>
                                        <FaTwitterSquare className='rounded-full  w-5 text-2xl'></FaTwitterSquare>
                                    </div>
                                    <div style={{ width: '50px' }} className='btn btn-ghost rounded-full text-white  bg-sky-600 '>
                                        <FaLinkedin className='rounded-full text-2xl'></FaLinkedin>
                                    </div>
                                </div>
                            </div>

                            <div className='ml-5'>
                                <h1 className='text-3xl font-semibold'>Market Place</h1>
                                <ul className='mt-7 font-semibold'>
                                    <Link>
                                        <li>All NFTs</li>
                                    </Link>
                                    <Link>
                                        <li>New</li>
                                    </Link>
                                    <Link>
                                        <li>Art</li>
                                    </Link>
                                    <Link>
                                        <li>Sports</li>
                                    </Link>
                                    <Link>
                                        <li>Utility</li>
                                    </Link>
                                    <Link>
                                        <li>Music</li>
                                    </Link>
                                    <Link>
                                        <li>Domain Name</li>
                                    </Link>
                                </ul>
                            </div>

                            <div>
                                <h1 className='text-3xl font-semibold'>My Account</h1>
                                <ul className='mt-7 font-semibold'>
                                    <Link>
                                        <li>Profile</li>
                                    </Link>
                                    <Link>
                                        <li>Favorite</li>
                                    </Link>
                                    <Link>
                                        <li>My Collections</li>
                                    </Link>
                                    <Link>
                                        <li>Settings</li>
                                    </Link>
                                </ul>
                            </div>

                            <div className='w-full'>
                                <h1 className='text-3xl font-semibold'> Stay The Loop</h1>
                                <p className='my-7'>Join Our mailing list to stay the loop with our newest feature releases, NFT drops and tips for navigating NFTs</p>
                                <div className='flex relative'>
                                    <input className='rounded-full w-full  border-y-4 px-20 py-2' placeholder='Email Address' type="text" name="" id="" />
                                    <button className='btn-secondary rounded-3xl absolute right-0 mt-1 py-2 px-3   text-white font-semibold '>Subscribe Now</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </footer>
                <footer className="footer footer-center p-4 bg-white text-base-content">
                    <div>
                        <p className='text-gray-300'>Copyright © 2023 Avi Yansah</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;