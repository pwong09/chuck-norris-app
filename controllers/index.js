const request = require('request');
const rootURL = `https://api.chucknorris.io/jokes/random`;
const response = require('express');
const axios = require('axios').default;

module.exports = {
    index
}

/*---using request---*/
function index(req, res) {
    request(`https://api.chucknorris.io/jokes/categories`,
    function(err, response, body) {
        const categories = JSON.parse(body)
        console.log(categories)
        if (req.query.category) {
            const jokeURL = request(`https://api.chucknorris.io/jokes/random?category=${req.query.category}`, 
            function(err, response, body) {
                const jokeInfo = JSON.parse(body);
                const joke = jokeInfo.value;
                res.render('index', {
                    title: 'PW',
                    categories,
                    joke
                });
            })
        } else {
            res.render('index', {
                title: 'PW',
                categories,
                joke: null
            })
        }
    })
}

/*---original axios---*/
// async function index (req, res, next) {
    //const info = await axios.get(`${rootURL}`);
    //const joke = info.value;
    //res.render('index', {
        //title: 'PW > Chuck Norris',
        //joke
    //})

//}
/*---original request---*/
// function index (req, res, next) {
//     request(
//         `${rootURL}`,
//         function(err, response, body) {
//             const joke = JSON.parse(body);
//             res.render('index', { 
//                 title: 'PW > Chuck Norris',
//                 joke
//             });
//         }
//     )
// }