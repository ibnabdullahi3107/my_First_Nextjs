import Link from 'next/link'
import React from 'react'

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-7xl font-extrabold text-center text-blue-800 m-5">
        About Page
      </h1>
      <Link
        href="/"
        className="text-2xl p-3 hover:text-red-600 bg-purple-700 mx-5"
      >
        Home Page
      </Link>
    </div>
  );
}

export default AboutPage