const input_text=document.querySelector('.input_text');
var btn=document.querySelector('.btn');
var api_key="bd6dc412016ef3073759570c91454fe1";
var showdata=document.querySelector('.showdata');


btn.addEventListener('click',function(){
     value=input_text.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${api_key}`)
    .then(res=>res.json())
    .then(data=>{
        //  console.log(data);
        input_text.value=" ";
showdata.innerHTML=`<ul >
<li class="desc">${data.weather[0].description}</li>
<li class="city">${data.name}</li>
<li class="temp">${data.main.temp}</li>
</ul>`
    })
})
