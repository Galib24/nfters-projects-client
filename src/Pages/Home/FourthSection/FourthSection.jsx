import React from 'react';
import './FourthSection.css'
const FourthSection = () => {
    return (
        <>
            <div className='my-20 grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5'>
                <div className='relative overflow-clip image-collection '>
                    <div className='absolute  left-40 top-44   ' >
                    <img style={{width: '50px'}} src="https://i.ibb.co/0GjMPTZ/Ellipse-95.png" alt="" />
                    </div>

                    <div className='absolute   top-96 right-0    '>
                    <img style={{width: '50px'}} src="https://i.ibb.co/mHW2H18/Ellipse-95-1.png" alt="" />
                    </div>

                    <div className='absolute   bottom-0 left-44'>
                    <img style={{width: '50px'}} src="https://i.ibb.co/mHW2H18/Ellipse-95-1.png" alt="" />
                    </div>
                    
                </div>
                <div className=' mx-16 mt-44'>
                    <h1 className='uppercase text-3xl font-extrabold'>create and <br />sell your nfts</h1>
                    <p className='my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, voluptatem reiciendis vero enim maxime iure. Maiores sed dolore, vel quia corrupti deserunt similique provident voluptatem consequuntur, obcaecati perspiciatis, in cupiditate voluptas veritatis praesentium vitae accusamus quisquam. Nemo, sed architecto! Deleniti ab vel sapiente omnis voluptas. Odio facere odit tempore impedit.</p>
                    <button className='btn rounded-3xl  px-5 bg-[#3D00B7] text-white mr-16 border-[#3D00B7] btn-ghost'>Sign Up Now</button>
                </div>
            </div>
        </>
    );
};

export default FourthSection;