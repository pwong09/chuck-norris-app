//const request = require('request');
const axios = require('axios').default;

module.exports = {
    index
}

/*---using axios---*/
async function index(req, res) {
    const categoriesURL = await axios.get(`https://api.chucknorris.io/jokes/categories`);
    const categories = await categoriesURL.data;
    try {
        res.render('index', {title: 'PW', categories, joke: null});
    } catch(err) {
        res.send(err);
    } finally {
        const response = await axios.get(`https://api.chucknorris.io/jokes/random?category=${req.query.category}`);
        console.log(req.query.category)
        console.log(response)
        const joke = await response.data.value;
        res.render('index', {title: 'PW', joke, categories});
    }
}

/*---using request---*/
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