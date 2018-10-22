const express = require('express');
const server = express();
const exphbs = require('express-handlebars');
const http = require('http');
const giphy = require('giphy-api')();




server.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

server.set('view engine', 'handlebars');
server.use(express.static('public'));


server.get('/', function(req, res) {
    giphy.search(req.query.term, function (err, response) {
    res.render('home', {gifs: response.data})
  });
})



server.listen(3000, function() {
    console.log('Gif Search listening on port localhost:3000!');
});


// HELLO-GIF
// server.get('/hello-gif', function(req, res) {
//     var gifUrl = 'http://media2.giphy.com/media/gYBVM1igrlzH2/giphy.gif'
//     res.render('hello-gif', {
//         gifUrl: gifUrl
//     })
// })


// GREETINGS
// server.get('/greetings/:name', function(req, res) {
//     var name = req.params.name;
//     res.render('greetings', {
//         name: name
//     });
// })
