  let button=document.getElementById("search button")

  let city=document.getElementById("city-input")
  let cityname=document.getElementById("city-name")
  let citytime=document.getElementById("city-time")
  let citytemp=document.getElementById("city-temperature")


  async function getdata( cityName){
   let promise =await fetch(`http://api.weatherapi.com/v1/current.json?key=046f674c12184529981161326242510 &q=${cityName}&aqi=yes`);
     
   return promise.json()

  }
  


  


  button.addEventListener("click", async()=>{
    let value=city.value;
   let result=  await getdata(value);
   cityname.innerText=`${result.location.name},${result.location.region},${result.location.country}`
    let singh=citytime.innerText=result.location.localtime;
    console.log("time",singh)
   
   citytemp.innerText= result.current.temp_c;
  });

    
  //`http://api.weatherapi.com/v1/current.json?key=68f0e1c11ace4c64b92171115241009 &q=${cityName}&aqi=yes`
 