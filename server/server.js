const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

axios = require('axios'); 

const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5025;

// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');



// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Routes

app.post('/api/search', (req, res) => {
   axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.body.value}&limit=10`)
   .then(response => {
     res.send(response.data);
   }).catch((error) => {
     console.log(`Error in GET /search: ${error}`);
     res.sendStatus(500);
   })
 });

app.use('/api/favorite', favoriteRouter);
app.use('/api/category', categoryRouter);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
