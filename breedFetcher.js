const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName.toLowerCase()}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
     callback(error,null);
      return;
    } 
    
    if (data.length === 0) {
      callback('Invalid breed', null);
      return;
    }
    
    callback(null,data[0].description);
    return;
  });
};



module.exports = { fetchBreedDescription };

 