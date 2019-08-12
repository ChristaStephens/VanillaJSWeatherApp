//after page "loads" we can get the location
//after our page loads then this function runs
//then everything inside of here{} runs

/*
this is my data contract. it will define
how my data will be displayed to my users
It's a model of the API that I am using.
*/
window.addEventListener('load', () => {
    let long;
    let lat;
    //if this exist in the broswer
    //we can find the exact location
    // location of the user
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition
            (position => {
                long = position.coords.longitude;
                lat = position.coords.latitude;
                //using interpolation "`` & {}" to insert lat and long
                const api = `https://api.darksky.net/forecast/8428b105f7d1f93347ffb78b2ef9761e/${lat},${long}`;
            });

            //to get information
            //a get request of the api url
            //after it gets the information it carries out the "then" statement.
            //to do something with the "(data)"
            fetch(api)
            .then(data)
    }

});
