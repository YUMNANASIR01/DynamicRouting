import React from "react"

function DynamicCountryPage({params}:any) {
    let data = {
        canada: {
            Name : "Canada",
            Populations : "41 million",
            Captial : "Ottawa",
        },
        germany: {
            Name : "Germany",
            Populations : "82 million",
            Captial : "Berlin",
        },
        japan: {
            Name : "Japan",
            Populations : "124 million",
            Captial : "Tokyo",
        },
        pakistan: {
            Name : "Pakistan",
            Populations : "241.5 million",
            Captial : "Islamabad",
        },
        turkey: {
            Name : "Turkey",
            Populations : "15.84 million",
            Captial : "Istanbul",
        },
    }
    if (params.country_name == "canada") {
  return (
    <>
    <ul>
     <li><h1 className="mt-30 mb-20 font-extrabold">I am Dynamic Country Page</h1></li> 
      <br />
      <li><h2  className="  items-center text-center font-bold">Name : {params.country_name}🚩</h2></li> 
      <li><h2  className=" items-center text-center font-bold">Populations : {data.canada.Populations}</h2></li> 
      <li><h2  className=" items-center text-center font-bold">Capital : {data.canada.Captial}</h2></li> 
      </ul>
      </>
  )
}
else if (params.country_name == "germany") {
    return (
      <>
      <ul>
        <h1 className="mt-30 mb-20 font-extrabold">I am Dynamic Country Page</h1><br /> 
       <li><h2 className=" items-center text-center font-bold">Name : {params.country_name} 🏳‍🌈</h2></li>
       <li><h2  className=" items-center text-center font-bold">Populations : {data.germany.Populations}</h2></li>
       <li><h2  className=" items-center text-center font-bold">Capital : {data.germany.Captial}</h2></li>
       </ul>
        </>
    )
  }
 else if (params.country_name == "japan") {
    return (
      <>
      <ul>
      <li> <h1 className="mt-30 mb-20 font-extrabold">I am Dynamic Country Page</h1></li>
      <br />
      <li><h2  className=" items-center text-center font-bold">Name : {params.country_name}🏳</h2></li>
      <li><h2  className="items-center text-center font-bold">Populations : {data.japan.Populations}</h2></li>
      <li><h2  className=" items-center text-center font-bold">Capital : {data.japan.Captial}</h2></li>
        </ul>
        </>
    )
  }
  else if (params.country_name == "pakistan") {
    return (
      <>
      <ul>
      <li><h1 className="mt-30 mb-20 font-extrabold">I am Dynamic Country Page</h1></li>
        <br />
        <li><h2  className=" items-center text-center font-bold">Name : {params.country_name}🏳</h2></li>
        <li><h2  className=" items-center text-center font-bold">Populations : {data.pakistan.Populations}</h2></li>
        <li><h2  className=" items-center text-center font-bold">Capital : {data.pakistan.Captial}</h2></li>
        </ul>
        </>
    )
  }
  else if (params.country_name == "turkey") {
    return (
      <>
      <ul>
      <li><h1 className="mt-30 mb-20 font-extrabold">I am Dynamic Country Page</h1></li>
        <br />
        <li><h2 className="items-center text-center font-bold">Name : {params.country_name}🚩</h2></li>
        <li><h2 className=" items-center text-center font-bold">Populations : {data.turkey.Populations}</h2></li>
        <li><h2 className=" items-center text-center font-bold">Capital : {data.turkey.Captial}</h2></li>
        </ul>
        </>
    )
  }
else {
    return(
        <h1>Error❌ Country is not found.🌐</h1>
    )
}
}

export default  DynamicCountryPage
