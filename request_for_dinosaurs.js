var http = require('http');
// First run D:\SoftwareWebApps\Integrated FW\django-rest-4-angular2\exampleapp>python .\manage.py runserver
// Then node .\client.js
// Options to be used by request 
var options = {
   host: 'localhost',
   port: '8000',
   path: '/dinosaurs/'  // This for  D:\SoftwareWebApps\Integrated FW\django-rest-4-angular2\exampleapp>
};

// Callback function is used to deal with response
var callback = function(response){
   // Continuously update stream with data
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
      console.log(body);
   });
}
// Make a request to the server
var req = http.request(options, callback);
req.end();