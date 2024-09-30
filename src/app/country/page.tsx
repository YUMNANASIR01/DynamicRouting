import Link from "next/link"
import React from "react"

function Country() {
  return (
    <>
    <ul>
          <li><h1 className=" font-extrabold mb-7">Click Below To Visit Country 👇</h1></li>
        
          <li> <Link className=" font-bold  " href={"/country/canada"}><h2>🔹Canada</h2></Link></li>
          <li><Link className=" font-bold " href={"/country/germany"}><h2>🔹Germany</h2></Link></li>
          <li> <Link className=" font-bold" href={"/country/japan"}><h2>🔹Japan</h2></Link></li>
          <li> <Link className=" font-bold" href={"/country/pakistan"}><h2>🔹Pakistan</h2></Link></li>
          <li><Link className=" font-bold" href={"/country/turkey"}><h2>🔹Turkey</h2></Link></li>
      </ul>
    </>
   
  )
}

export default Country
