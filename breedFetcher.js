const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName.toLowerCase()}`, (error, response, body) => {
    const data = JSON.parse(body);
  
    if (error) {
      return  callback(error);
    }
    return callback(null,data[0].description);
  });
};



module.exports = { fetchBreedDescription };

