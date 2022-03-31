const fs = require('fs');

fs.readFile("pokemon-data.txt"), (err, data) => {
    if (err) throw err;

    console.log(data.toString());
}