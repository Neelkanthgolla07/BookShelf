import React from 'react'
import { Menu, X, Instagram, Twitter, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <>
      <footer className="p-4 text-center text-gray-500">
        <div className="flex justify-center space-x-6 mb-2">
          <Instagram className="h-5 w-5 text-gray-600 hover:text-pink-500" />
          <Twitter className="h-5 w-5 text-gray-600 hover:text-blue-400" />
          <Youtube className="h-5 w-5 text-gray-600 hover:text-red-500" />
        </div>
        <p>Contact Us</p>
      </footer>
    </>
  )
}

export default Footer
