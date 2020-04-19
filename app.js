// to get the timezone from whereever the user is at.
window.addEventListener('load', ()=>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (currentPosition =>{
            long = currentPosition.coords.longitude;
            lat = currentPosition.coords.altitude;
            console.log(currentPosition);

            const api = `http://api.openweathermap.org/data/2.5/weather?lat=$(lat)&lon=$(log)&appid= ab40af0f0f91a3975145fd300671a768`;

            fetch (api)
            .then(response => {
                return response.json();
            })
            .then (data => {
                console.log(data);

            });

        });
       
    }
    else{
        h1.textContent = "Please Enable Your Location"
    }

    }

);