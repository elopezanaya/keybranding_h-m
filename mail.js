
var http = require ("http");
var sys = require("sys"),
    
    url = require("url"),
    path = require("path"),
    fs = require("fs");
var email   = require("./node_modules/emailjs/email");

var server  = email.server.connect({
   user:    "elopezanaya@gmail.com", 
   password:"r34dy pl4y3r j0", 
   host:    "smtp.gmail.com", 
   ssl:     true

});

var contenido="";
http.createServer(function (req, res) {

var nombre ;
var apellido;
var edad;
var sexo;
var localidad;
var correo;

	

  res.writeHead(200, {'Content-Type': 'text/javascript','Access-Control-Allow-Origin':'http://localhost:8080'});
      req.addListener('data', function (chunk) {
          // removed this - eval("(" + chunk + ")");
          var data = JSON.parse(chunk);    
          console.log("Data sent :"+ data[0].nombre);
		  console.log("Data sent :"+ data[0].apellido);
		  console.log("Data sent :"+ data[0].sexo);
		  console.log("Data sent :"+ data[0].edad);
		  console.log("Data sent :"+ data[0].localidad);
		  console.log("Data sent :"+ data[0].correo);
		  
		  
		  nombre= data[0].nombre;
		  apellido =data[0].apellido;
		  sexo= data[0].sexo;
		  edad= data[0].edad;
		  localidad= data[0].localidad;
		  correo = data[0].correo;
		  
		  
	contenido ="NOMBRE = "+ nombre +" ";
	contenido +="APELLIDO = "+ apellido +" ";
	contenido +="EDAD = "+ edad +" ";
	contenido +="SEXO = "+ sexo +" ";
	contenido +="LOCALIDAD = "+ localidad +" ";
	contenido +="CORREO = "+ correo +" ";
		  
		  console.log('contenido : ' + contenido);
		  
		  
server.send({

   text:   ""+ contenido, 
   from:    "you <elopezanaya@gmail.com>", 
   to:      "elopezanaya@gmail.com, franlin@franklin.com,franklinvargas@me.com",
   cc:      "",
   subject: "testing emailjs"
}, function(err, message) { console.log(err || message); });
	
	
	

      });


      req.addListener('end', function() {
          console.log('end triggered');
          res.write("Post data");
		   
          res.end();
      }); 
	  

	  
	
	
	
}).listen(8888);







// send the message and get a callback with an error or details of the message that was sent
