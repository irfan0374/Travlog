import React from 'react'
import London from '/London.jpg'
import star from '/star.svg'
const DestinationCard = () => {
    return (
        <>
            <div className="card w-64 h-80 bg-base-100 shadow-xl">
                <img className='rounded-t-xl' src={London} alt="Shoes" />
                <div className=" p-2 px-3 flex justify-between">
                    <div>
                        <h2 className="font-bold">
                            London Bridge,
                        </h2>
                        <h2 className="font-bold">
                            Bantayan Island
                        </h2>
                    </div>
                    <div>
                        <div className='font-semibold text-pink-500'>$599.6</div>
                    </div>
                </div>

                <p className='font-thin px-3'>rome,Italy</p>
                <div className='flex mt-5 px-4'>

                    <h1 className='font-bold text-xl text-orange-500'>
                        4.8
                    </h1>
                    <img className="w-5 h-5 space-x-2" src={star} alt="" />
                </div>

            </div>

        </>
    )
}

export default DestinationCard
