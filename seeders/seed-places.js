const db = require('../models')

//we have access to Place because we exported it in models/index.js
db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/thai.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/codingcat.jpg',
    founded: 2020
}])
.then(()=>{
    console.log("Success!")
    // NodeJS Process
    process.exit()
})
.catch(err => {
    console.log("Failure!", err)
    process.exit()
})