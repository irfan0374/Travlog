import React from 'react'
import Navbar from '../Componets/Navbar'
import banner1 from '/Banner1.png'
import banner2 from '/Banner2.png'
import booking from '/booking.com.png'
import tripadvisor from '/tripadvisor.png'
import expedia from '/expedia.png'
import airbnb from '/airbnb.png'
import Orbitz from '/Orbitz.png'
import bag from '/bag.svg'
import bookingIcon from '/bookingIcon.png'
import weatherIcon from '/weatherIcon.png'
import worldIcon from '/worldIcon.png'
import DestinationCard from '../Componets/DestinationCard'
import discover from '/discover.png'
import KeyFeature from '/KeyFeature.png'
import Location from '/location.png'
import Calender from '/calender.png'
import Coupon from '/coupon.png'
import Footer from '../Componets/Footer'


const HomePage = () => {
  return (
    <>
      <Navbar />

      {/* Banner section start */}

      <div className=' flex flex-col-reverse md:flex-col-reverse lg:flex-row lg:justify-center'>
        <div className='  w-[55vh] h-[45vh] mx-2 m-4 md:w-[60vh] md:h-[30vh] lg:w-80  md:m-6 lg:m-8 md:mx-20'>
          <div className='shadow-md rounded-2xl w-48 flex justify-center py-1 text-pink-500 mx-auto '>
            <span className='md:block md:text-center'>Explore the world!</span>
            <img className='w-5 h-4 m-1' src={bag} alt="" />
          </div>
          <h1 className=' text-center text-3xl my-2 md:text-5xl lg:text-5xl font-bold  md:my-4 lg:my-5 tracking-wide text-balance md:text-center lg:text-wrap '>
            Travel <span className='text-pink-500 tracking-wide'>top destination</span> of the world
          </h1>
          <p className=' text-center  mb-6 text-balance text-sm md:text-lg md:text-center lg:my-16'>We always make our customer happy by providing as many choices as possible</p>
          <div className='flex flex-col md:flex-row lg:flex-row justify-evenly mt-3 items-center md:justify-center mx-2 md:mx-0 lg:ml12'>
            <button className='bg-blue-700 rounded-3xl mb-4 md:mb-0 text-white p-2 w-full md:px-4 lg:px-4 text-sm shadow-xl md:mr-4'>Get Started</button>
            <button className='border rounded-3xl p-2 w-full md:px-3 lg:px-3 text-sm  shadow-md'>Watch Demo</button>
          </div>
        </div>

        <div className="carousel w-[55vh] h-[50vh] mx-1 md:w-[60vh] md:mx-20 md:h-[50vh] lg:w-[90vh] lg:h-[80vh] rounded-xl overflow-hidden">
          <div id="slide1" className="carousel-item relative w-full h-full transition-transform duration-700 ease-in-out transform">
            <img src={banner1} className="object-fill w-full h-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full h-full transition-transform duration-700 ease-in-out transform">
            <img src={banner2} className="object-fill w-full h-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>

      </div>

      {/* Banner section end */}

      {/* available site section start */}
      <div className='  md:mt-3 lg:mt-12 mx-6'>
        <div className='grid  grid-cols-3 lg:grid-cols-5 md:grid-cols-3 gap-12 w-full'>
          <img className='lg:w-36 lgh-12' src={booking} alt="Booking" />
          <img className='w-32 h-8 lg:w-36 lg:h-12' src={tripadvisor} alt="Tripadvisor" />
          <img className='w-32 h-8 lg:w-36 lg:h-12' src={expedia} alt="Expedia" />
          <img className='w-32 h-6 lg:w-36 lg:h-12' src={airbnb} alt="Airbnb" />
          <img className='w-32 h-5 lg:w-36 lg:h-12' src={Orbitz} alt="Orbitz" />
        </div>
      </div>

      {/* available site section end */}


      {/* services section start */}
      <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-around my-12 '>
        <div className='w-72 h-52 flex flex-col justify-center items-center md:w-full'>
          <h1 className='font-semibold text-pink-500 md:text-center text-lg tracking-wide'>
            SERVICES
          </h1>
          <h1 className='font-bold text-center text-2xl md:text-center'>
            Our top value categories for you
          </h1>
        </div>

        {/* service card */}
        <div className='flex flex-col md:flex-row lg:flex-row'>
          <div className='w-64 h-80 md:w-56 lg:w-64 border-2 border-gray-200 shadow-xl rounded-xl py-12 flex flex-col justify-center items-center m-4'>
            <div className='flex justify-center mb-4'>
              <img className="md:w-32 lg:w-40 h-32" src={worldIcon} alt="worldIcon" />
            </div>
            <h1 className='font-bold text-lg text-center py-5'>
              Best Tour Guide
            </h1>
            <p className='text-center px-4'>
              What looked like a small patch of purple grass, above five feet.
            </p>
          </div>
          <div className='w-64 h-80 md:w-56 lg:w-64 border-2 border-gray-200 shadow-xl rounded-xl py-12 flex flex-col justify-center items-center m-4'>
            <div className='flex justify-center mb-4'>
              <img className="md:w-32 lg:w-40 h-32" src={bookingIcon} alt="bookingIcon" />
            </div>
            <h1 className='font-bold text-lg text-center py-5'>
              Easy Booking
            </h1>
            <p className='text-center px-4'>
              Square, was moving across the sand in their direction.
            </p>
          </div>
          <div className='w-64 h-80 md:w-56 lg:w-64 border-2 border-gray-200 shadow-xl rounded-xl py-12 flex flex-col justify-center items-center m-4'>
            <div className='flex justify-center mb-4'>
              <img className="md:w-32 lg:w-40 h-32" src={weatherIcon} alt="weatherIcon" />
            </div>
            <h1 className='font-bold text-lg text-center py-5'>
              Weather Forecast
            </h1>
            <p className='text-center px-4'>
              What looked like a small patch of purple grass, above five feet.
            </p>
          </div>
        </div>
        {/*  service card */}

      </div>
      {/* services section end */}

      {/* top destination section begning */}


      <div className='flex flex-col justify-center items-center lg:flex-row lg:justify-around my-12 md:ml-2 lg:ml-12'>
        <div className='flex flex-col justify-center md:items-center lg:items-start mb-9'>
          <h1 className='text-pink-500 my-2'>TOP DESTINATION</h1>
          <h1 className='font-bold text-xl'>Explore top destination</h1>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center'>
          <DestinationCard />
          <DestinationCard />
          <DestinationCard />
        </div>
      </div>
      {/* top destination section end */}

      {/* travel point section start */}
      <div className='flex flex-col lg:flex-row justify-around items-center p-4'>
        <div className='mb-8 lg:mb-0'>
          <img className='w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover' src={discover} alt="Discover" />
        </div>
        <div className='flex flex-col items-center lg:items-start lg:w-1/2 p-4'>
          <div className='text-pink-500 text-center lg:text-left'>
            TRAVEL POINT
          </div>
          <h2 className='font-bold text-center lg:text-left text-lg mt-4 lg:mt-0'>
            We helping you find your dream location
          </h2>
          <p className='font-thin text-sm mt-4 lg:mt-6 text-center lg:text-left'>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
          </p>
          <div className='grid grid-cols-1 w-80  md:grid-cols-2 gap-4 mt-6 '>
            <div className='w-full md:w-40 h-20 border shadow-md flex flex-col justify-center items-center rounded-xl'>
              <h1 className='font-bold text-orange-500'>500+</h1>
              <h1 className='font-bold text-orange-500'>Holiday Packages</h1>
            </div>
            <div className='w-full md:w-40 h-20 border shadow-md flex flex-col justify-center items-center rounded-xl'>
              <h1 className='font-bold text-orange-500'>500+</h1>
              <h1 className='font-bold text-orange-500'>Holiday Packages</h1>
            </div>
            <div className='w-full md:w-40 h-20 border shadow-md flex flex-col justify-center items-center rounded-xl'>
              <h1 className='font-bold text-orange-500'>500+</h1>
              <h1 className='font-bold text-orange-500'>Holiday Packages</h1>
            </div>
            <div className='w-full md:w-40 h-20 border shadow-md flex flex-col justify-center items-center rounded-xl'>
              <h1 className='font-bold text-orange-500'>500+</h1>
              <h1 className='font-bold text-orange-500'>Holiday Packages</h1>
            </div>
          </div>
        </div>
      </div>


      {/* travel point section end */}


      {/* key Feature start */}

      <div className='flex flex-col-reverse lg:flex-row justify-around items-center p-4 mt-6'>
  <div className='flex flex-col items-center lg:items-start lg:w-1/2 p-4'>
    <div className='text-pink-500 text-center lg:text-left'>
      KEY FEATURES
    </div>
    <h2 className='font-bold text-center lg:text-left text-lg mt-4 lg:mt-0'>
      We offer best services
    </h2>
    <p className='font-thin text-sm mt-4 lg:mt-6 text-center lg:text-left'>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature
      from 45 BC.
    </p>
    <div className='grid grid-cols-1 md:grid-cols-1 gap-5 my-7'>
      <div className='flex border shadow-md p-4 rounded-lg'>
        <div>
          <img className='w-16 h-14' src={Location} alt="Location" />
        </div>
        <div className='ml-4'>
          <h1 className='font-bold'>We offer best services</h1>
          <h1 className='text-sm'>Lorem Ipsum is not simply random text</h1>
        </div>
      </div>
      <div className='flex border shadow-md p-4 rounded-lg'>
        <div>
          <img className='w-16 h-16 mx-2' src={Calender} alt="Calendar" />
        </div>
        <div className='ml-4'>
          <h1 className='font-bold'>Schedule your trip</h1>
          <h1 className='text-sm'>It has roots in a piece of classical</h1>
        </div>
      </div>
      <div className='flex border shadow-md p-4 rounded-lg'>
        <div>
          <img className='w-16 h-14' src={Coupon} alt="Coupon" />
        </div>
        <div className='ml-4'>
          <h1 className='font-bold'>Get discounted coupons</h1>
          <h1 className='text-sm'>Lorem Ipsum is not simply random text</h1>
        </div>
      </div>
    </div>
  </div>
  <div className='mb-8 lg:mb-0'>
    <img className='w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover' src={KeyFeature} alt="Key Feature" />
  </div>
</div>

      {/* key Feature end */}

      {/* footer Section */}
      <Footer/>
      {/* footer Section */}


    </>
  )
}

export default HomePage
