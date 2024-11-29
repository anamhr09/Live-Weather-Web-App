const btn =document.getElementById("submit-btn") ;

btn.addEventListener('click', function(){

    const getInput = document.getElementById("get-city").value ;

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+getInput+'&appid=2680d128fa10b47d3c88f4c1bde5c9ae') 
    .then(response => response.json())
    .then(data => {

        const cityName = data.name ;
        const tem = data.main.temp ;
        const temp = tem-273.15 ;
        const des = data.weather[0].description;


           const City = document.getElementById("city") ;
           City.innerText=cityName ;
           const Temp = document.getElementById("temp") ;
           Temp.innerText=temp.toFixed() ;
           const Des = document.getElementById("des") ;
           Des.innerText=des ;


    })

    .catch(res =>  alert("Please Enter Right City Name")) ;

})




