'use client'
import React from 'react'
import { useState } from 'react'

const ClientPage = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
        <h1 className="m-5 text-xl font-extrabold">{count}</h1>
        <button onClick={() => setCount(count + 1)} className="btn">Increement</button>
    </div>
  )
}

export default ClientPage