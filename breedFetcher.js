const request = require('request');

const breedFinder = (userInput) => {
  userInput.toLowerCase();
  request(`https://api.thecatapi.com/v1/breeds/search?q=${userInput}`, (error, response, body) => {
    if (error) {
      console.error('error:', error);
    }   
    const data = JSON.parse(body);
    console.log(data[0].description);
   }); 
};

breedFinder(process.argv[2]);


