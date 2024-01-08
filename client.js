const soap = require('soap');

//create soap client

const url = 'http://localhost:8080/weather?wsdl';
const args = { location: "New York"};

soap.createClient(url, {}, function(err, client){
    if (err){
        console.error("Error creating SOAP client", err);
        return ;
    }

    //make a soap request
client.GetWeather(args, function(err, result){
    if (err){
        console.error("Error making SOAP request", err);
        return ;
    }

    //handle the soap response
    console.log("location:", result.location);
    console.log("temperature:", result.temperature);
    console.log("description:", result.description);
});

});
