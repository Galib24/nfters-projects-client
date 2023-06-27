import React from 'react';


const CollectionFeatured = () => {
    return (
        <div className='bg-gray-200'>
        <div>
        <h1 className='uppercase font-extrabold text-3xl ml-5 my-16'>collection featured nfts</h1>
        </div>
            <section className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                

                {/*----------------------------------- first part ------------------- */}
                <div className='mr-3'>
                    <div className='flex'>
                        <div className='w-50'>
                            <img src="https://i.ibb.co/sCDSSGt/unsplash-F56-Y7dgr-Akc.png" alt="" />
                        </div>
                        <div>
                            <div className='w-50'>
                                <img style={{ width: '120px' }} className=' rounded-2xl ml-5 ' src='https://i.ibb.co/sjHsjFg/amhd.png' alt="" />
                            </div>
                            <div className='w-50 mt-5'>
                                <img style={{ width: '120px' }} className=' rounded-2xl ml-5 ' src='https://i.ibb.co/k4LS9RJ/adhadd.png' alt="" />
                            </div>
                            <div className='w-50 mt-5'>
                                <img style={{ width: '120px' }} className=' rounded-2xl ml-5 ' src='https://i.ibb.co/85R63tz/ahdfdsa.png' alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold mt-2'>Amazing Collection</h1>
                        <div className='flex  items-center'>
                            <div className='w-10 mt-5'>
                                <img className='mr-5 ' src='https://i.ibb.co/0GjMPTZ/Ellipse-95.png' alt="" />
                            </div>
                            <p className='ml-3'>by Arkhan</p>
                            <button className='ml-40 btn rounded-3xl bg-transparent border-blue-300 text-blue-400'>Total 54 Items</button>
                        </div>
                    </div>
                </div>
                {/*----------------------------- second part--------------------- */}
                <div className='mr-3'>
                    <div className='flex'>
                        <div className='w-50'>
                            <img className='w-72' src="https://i.ibb.co/bLYCYkb/unsplash-E8-Ufcyxz514.png" alt="" />
                        </div>
                        <div>
                            <div className='w-50'>
                                <img style={{ width: '100px' }} className=' rounded-2xl ml-5 ' src='https://i.ibb.co/k4LS9RJ/adhadd.png' alt="" />
                            </div>
                            <div className='w-50 mt-5'>
                                <img style={{ width: '100px' }} className=' rounded-2xl ml-5 ' src='https://i.ibb.co/sjHsjFg/amhd.png' alt="" />
                            </div>
                            <div className='w-50 mt-5'>
                                <img style={{ width: '100px' }} className=' rounded-2xl ml-5 ' src='https://i.ibb.co/tqjv0kh/adsohaf.png' alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold mt-2'>Amazing Collection</h1>
                        <div className='flex  items-center'>
                            <div className='w-10 mt-5'>
                                <img className='mr-5 ' src='https://i.ibb.co/0GjMPTZ/Ellipse-95.png' alt="" />
                            </div>
                            <p>by Arkhan</p>
                            <button className='ml-40 btn rounded-3xl bg-transparent border-blue-300 text-blue-400'>Total 54 Items</button>
                        </div>
                    </div>
                </div>
                {/* --------------------------------------third part ----------------------- */}
                <div className='mr-5'>
                    <div className='flex'>
                        <div className='w-50'>
                            <img className=' rounded-2xl' src="https://i.ibb.co/kcGRCcC/adhiaf.png" alt="" />
                        </div>
                        <div>
                            <div className='w-50'>
                                <img style={{ width: '110px' }} className=' rounded-2xl ml-5 ' src='https://i.ibb.co/f4jGDHX/adoha.png' alt="" />
                            </div>
                            <div className='w-50 mt-5'>
                                <img style={{ width: '110px' }} className=' rounded-2xl ml-5 ' src='https://i.ibb.co/8m1TV7n/adiha.png' alt="" />
                            </div>
                            <div className='w-50 mt-5'>
                                <img style={{ width: '110px' }} className=' rounded-2xl ml-5 ' src='https://i.ibb.co/sjHsjFg/amhd.png' alt="" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className='font-semibold mt-2'>Amazing Collection</h1>
                        <div className='flex  items-center'>
                            <div className='w-10 mt-5'>
                                <img className='mr-5 ' src='https://i.ibb.co/0GjMPTZ/Ellipse-95.png' alt="" />
                            </div>
                            <p>by Arkhan</p>
                            <button className='ml-40 mt-5 btn rounded-3xl bg-transparent border-blue-300 text-blue-400'>Total 54 Items</button>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default CollectionFeatured;