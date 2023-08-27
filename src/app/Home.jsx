import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-around"}}>
        <Link href={"/about"}>about</Link>
        <Link href={"/contacts"}>contacts</Link>
        <Link href={"/info"}>Info</Link>
    </div>
  )
}

export default Home
