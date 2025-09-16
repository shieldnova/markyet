import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-16'>
        <div className='max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10'>
           <div>
                <h2 className='text-2xl font-bold text-white'>MARK<span className='text-markyetcolor'>YET</span></h2>
                <p className='text-gray-400 mt-4 text-sm leading-relaxed'> Helping brands win the digital market with data-driven strategies, 
                creativity, and innovation.</p>
           </div> 
            <div>
                <h3 class="text-white font-semibold text-lg">Quick Links</h3>
                <ul class="mt-4 space-y-2 text-sm">
                    <li><a href="#" class="hover:text-markyetcolor">Home</a></li>
                    <li><a href="#" class="hover:text-markyetcolor">About Us</a></li>
                    <li><a href="#" class="hover:text-markyetcolor">Services</a></li>
                    <li><a href="#" class="hover:text-markyetcolor">Projects</a></li>
                    <li><a href="#" class="hover:text-markyetcolor">Blog</a></li>
                </ul>
            </div>
            <div>
                <h3 class="text-white font-semibold text-lg">Services</h3>
                <ul class="mt-4 space-y-2 text-sm">
                    <li><a href="#" class="hover:text-markyetcolor">Social Media</a></li>
                    <li><a href="#" class="hover:text-markyetcolor">SEO & Content</a></li>
                    <li><a href="#" class="hover:text-markyetcolor">Web Design</a></li>
                    <li><a href="#" class="hover:text-markyetcolor">Ads & Campaigns</a></li>
                    <li><a href="#" class="hover:text-markyetcolor">Analytics</a></li>
                </ul>
            </div>



            <div>
                <h3 class="text-white font-semibold text-lg">Contact Us</h3>
                <p class="text-gray-400 mt-4 text-sm">📍 New York, USA</p>
                <p class="text-gray-400 text-sm">📞 +1 (234) 567-890</p>
                <p class="text-gray-400 text-sm">✉️ hello@markyet.com</p>
                <div class="flex space-x-4 mt-4">
                    <a href="#" class="text-gray-400 hover:text-markyetcolor">🌐</a>
                    <a href="#" class="text-gray-400 hover:text-markyetcolor">🐦</a>
                    <a href="#" class="text-gray-400 hover:text-markyetcolor">📸</a>
                    <a href="#" class="text-gray-400 hover:text-markyetcolor">💼</a>
                </div>
            </div>
        </div>
        <div class="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © 2025 Markyet. All Rights Reserved.
        </div>

    </footer>
  )
}

export default Footer