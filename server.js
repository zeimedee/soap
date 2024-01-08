const soap = require('soap')
const http = require('http')

//define service 

const service = {
    WeatherService : {
        WeatherPort :{
            GetWeather: function(args, callback){
                //perform logic to get weather based on location
                const location = args.location;
                const temperature = '25°C';
                const description = 'sunny';

                //return response
                const result = {
                    location:location,
                    temperature:temperature,
                    description:description
                };
                callback(null, result)
            }
        }
    }
};

// create soap server

const wsdl = require('fs').readFileSync('./weatherService.wsdl', 'utf8');

var server = http.createServer(function(request,response) {
    response.end('404: Not Found: ' + request.url);
});
server.listen(8080)
soap.listen(server, '/weather', service, wsdl, function(){
    console.log('server initialized');
  });