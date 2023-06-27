import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import useData from '../../../hooks/useData';

const FinalPart = () => {
    const [allData] = useData();
const [disabled, setDisabled] = useState(true)
    const slideData = allData.slice(0, 12);
    console.log(slideData);

    const handleShowMore = (e) =>{
        const display = (e).target.value;
        if(display){
          
            setDisabled(false) 
        }
        else{
            setDisabled(true)
        }
    }
    return (
        <>
            {/* primary part */}
            <h1 className='uppercase text-3xl font-extrabold'>discover more nfts</h1>
            <div className='navbar'>
                <ul className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-9 gap-2'>
                    <Link className='mr-5 rounded-3xl font-bold btn btn-ghost'>All Category </Link>
                    <Link className='mr-5 rounded-3xl font-bold btn btn-ghost'>Art </Link>
                    <Link className='mr-5 rounded-3xl font-bold btn btn-ghost'>Celebrities </Link>
                    <Link className='mr-5 rounded-3xl font-bold btn btn-ghost'>Gaming </Link>
                    <Link className='mr-5 rounded-3xl font-bold btn btn-ghost'>Spot </Link>
                    <Link className='mr-5 rounded-3xl font-bold btn btn-ghost'>Spot </Link>
                    <Link className='mr-5 rounded-3xl font-bold btn btn-ghost'>Music </Link>
                    <Link className='mr-5 rounded-3xl font-bold btn btn-ghost'>Crypto </Link>
                </ul>
                <div className='ml-32 items-center'>

                    <button className='btn btn-ghost rounded-3xl'><FaBars></FaBars> All Filter</button>
                </div>
            </div>
            {/* card sections */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 my-8 mb-16'>
                {
                    slideData.map(items => <div key={items.id}>
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
            <div className='flex  justify-center items-center mb-10'>
                {/* <button disabled={!disabled}  onClick={handleShowMore} className='btn border-[#3D00B7] border-2 rounded-3xl text-[#3D00B7] mr-5 btn-ghost'>See More</button> */}
               <Link to='/collections'>
               <input disabled={!disabled}  onClick={handleShowMore} className='btn border-[#3D00B7] border-2 rounded-3xl text-[#3D00B7] mr-5 btn-ghost' type="submit" value="See More" />
               </Link>
            </div>
        </>
    );
};

export default FinalPart;