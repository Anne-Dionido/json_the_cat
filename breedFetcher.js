const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const page = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(page, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }

    const data = JSON.parse(body);
    if (!data.length) {
      
      return callback('no data found', null);
    }

    const description = data[0]['description'];
    return callback(null, description);

  });
};

module.exports = { fetchBreedDescription };