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
    <ul className="id1">
     <li><hr /><h1 className="mt-30 mb-20 font-extrabold">I am Dynamic Country Page</h1></li> 
     <hr /><br />
      <li><hr /><h2 className=" bg-rose-500 items-center text-center font-bold">Name : {params.country_name}🚩</h2></li> 
      <li><hr /><h2  className="bg-rose-500 items-center text-center font-bold">Populations : {data.canada.Populations}</h2></li> 
      <li><hr /><h2  className="bg-rose-500 items-center text-center font-bold">Capital : {data.canada.Captial}</h2></li> 
      <hr /></ul>
      </>
  )
}
else if (params.country_name == "germany") {
    return (
      <>
      <ul className="id2"><hr />
       <h1 className="mt-30 mb-20 font-extrabold">I am Dynamic Country Page</h1><hr /><br />
      <li><h2 className="bg-purple-700 items-center text-center font-bold">Name : {params.country_name} 🏳‍🌈</h2></li>
      <hr /> <li><h2  className="bg-purple-700 items-center text-center font-bold">Populations : {data.germany.Populations}</h2></li>
      <hr /> <li><h2  className="bg-purple-700 items-center text-center font-bold">Capital : {data.germany.Captial}</h2></li>
      <hr /> </ul>
        </>
    )
  }
 else if (params.country_name == "japan") {
    return (
      <>
     <hr /> <ul  className="id3"><hr />
     <hr /> <li> <h1 className="mt-30 mb-20 font-extrabold">I am Dynamic Country Page</h1></li>
     <hr /><br />
     <hr /><li><h2  className="bg-purple-600 items-center text-center font-bold">Name : {params.country_name}🏳</h2></li>
     <hr /><li><h2  className="bg-purple-600 items-center text-center font-bold">Populations : {data.japan.Populations}</h2></li>
     <hr /><li><h2  className="bg-purple-600 items-center text-center font-bold">Capital : {data.japan.Captial}</h2></li>
     <hr /> </ul>
        </>
    )
  }
  else if (params.country_name == "pakistan") {
    return (
      <>
      <hr /><ul className="id4">
      <hr /><li><h1 className="mt-30 mb-20 font-extrabold">I am Dynamic Country Page</h1></li>
      <hr /> <br />
      <hr /><li><h2  className=" bg-yellow-500 items-center text-center font-bold">Name : {params.country_name}🏳</h2></li>
      <hr /><li><h2  className="bg-yellow-500 items-center text-center font-bold">Populations : {data.pakistan.Populations}</h2></li>
      <hr /><li><h2  className=" bg-yellow-500 items-center text-center font-bold">Capital : {data.pakistan.Captial}</h2></li>
      <hr /></ul>
        </>
    )
  }
  else if (params.country_name == "turkey") {
    return (
      <>
      <hr /><ul className="id5">
      <hr /><li><h1 className="mt-30 mb-20 font-extrabold">I am Dynamic Country Page</h1></li>
      <hr /><br />
      <hr /> <li><h2 className="bg-gray-800 items-center text-center font-bold">Name : {params.country_name}🚩</h2></li>
      <hr /><li><h2 className="bg-gray-800 items-center text-center font-bold">Populations : {data.turkey.Populations}</h2></li>
      <hr /><li><h2 className="bg-gray-800 items-center text-center font-bold">Capital : {data.turkey.Captial}</h2></li>
      <hr /></ul>
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
