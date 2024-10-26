import Link from "next/link"
import React from "react"

function Country() {
  return (
    <>
    <ul>
          <hr /><li><h1 className="bg-slate-500 font-extrabold mb-6 items-center mr-11 visit">Click Below To Visit Country 👇</h1></li><hr />
        
         <hr /> <li className="bg-lime-600"><hr />  <Link className=" font-bold  " href={"/country/canada"}><h2>🔹Canada</h2></Link></li><hr />
         <hr />  <li className="bg-lime-600"><hr /> <Link className=" font-bold " href={"/country/germany"}><h2>🔹Germany</h2></Link></li><hr />
         <hr /> <li className="bg-lime-600"><hr />  <Link className=" font-bold" href={"/country/japan"}><h2>🔹Japan</h2></Link></li><hr />
         <hr /> <li className="bg-lime-600"><hr />  <Link className=" font-bold" href={"/country/pakistan"}><h2>🔹Pakistan</h2></Link></li><hr />
         <hr /> <li className="bg-lime-600"><hr /> <Link className=" font-bold" href={"/country/turkey"}><h2>🔹Turkey</h2></Link></li><hr />
         <hr /> </ul> <hr />
    </>
   
  )
}

export default Country
