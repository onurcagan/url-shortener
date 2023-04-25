'use client'

import { useState } from 'react'

export default function Form() {
  const [url, setUrl] = useState('' as string)
  function handleClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault()
    return console.log(url)
  }
  return (
    <form className="flex flex-col gap-8">
      <p className="text-center text-xl">Enter your url:</p>
      <input className="text-gray-700" onChange={(e) => setUrl(e.target.value)}></input>
      <button className="border-double border-white" onClick={handleClick}>
        Shorten!
      </button>
    </form>
  )
}
