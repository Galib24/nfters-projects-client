import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const navOptions = <>
        <li><Link className='font-semibold'>Marketplace</Link></li>
        <li><Link className='font-semibold'>Resource</Link></li>
        <li><Link className='font-semibold'>About</Link></li>


    </>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-secondary  text-2xl font-extrabold uppercase ml-4">nfters</a>
                </div>
                <div className="navbar-start mr-16 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="form-control mr-24  ml-20">
                        <div className="input-group relative ">
                            <input type="text" placeholder="Search…" className="input input-bordered px-7" />
                            <button className="btn absolute btn-ghost rounded-full right-0 ml-5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                    <button className="btn btn-active btn-secondary rounded-full px-5 py-4 mr-16">Primary</button>
                    <button className='btn border-[#3D00B7] border-2 rounded-3xl text-[#3D00B7] mr-5 btn-ghost'>Connect Wallet</button>
                </div>
            </div>
        </>
    );
};

export default NavBar;