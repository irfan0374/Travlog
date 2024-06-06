import React from 'react'
import Logo from '/Logo.png'

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 md:px-8 lg:px-16 border">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
    <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/4">
        <div className='flex justify-center items-center'>

      <img src={Logo}  alt="Travlog Logo" className="mb-4 w-12 h-12"/><span className='font-extrabold'>Travlog</span>
        </div>
    
    </div>
    <div className="flex flex-col items-center md:items-start md:w-1/4 text-center md:text-left">
      <h3 className="font-semibold text-lg mb-4">Company</h3>
      <ul className="space-y-2 text-gray-600">
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#career" className="hover:underline">Career</a></li>
        <li><a href="#mobile" className="hover:underline">Mobile</a></li>
      </ul>
    </div>


    <div className="flex flex-col items-center md:items-start md:w-1/4 text-center md:text-left">
      <h3 className="font-semibold text-lg mb-4">Contact</h3>
      <ul className="space-y-2 text-gray-600">
        <li><a href="#why-travlog" className="hover:underline">Why Travlog?</a></li>
        <li><a href="#partner" className="hover:underline">Partner with us</a></li>
        <li><a href="#faqs" className="hover:underline">FAQs</a></li>
        <li><a href="#blog" className="hover:underline">Blog</a></li>
      </ul>
    </div>

 
    <div className="flex flex-col items-center md:items-start md:w-1/4 text-center md:text-left">
      <h3 className="font-semibold text-lg mb-4">Meet Us</h3>
      <ul className="space-y-2 text-gray-600">
        <li>+00 92 1234 56789</li>
        <li><a href="mailto:info@travlog.com" className="hover:underline">info@travlog.com</a></li>
        <li>205. R Street, New York</li>
        <li>BD23200</li>
      </ul>
    </div>
  </div>
</footer>

  )
}

export default Footer
