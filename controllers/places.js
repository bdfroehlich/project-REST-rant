const router = require('express').Router()
const places = require('../models/places')

// GET /places
router.get('/', (req, res) => {
  // let places = [{
  //   name: 'H-Thai-ML',
  //   city: 'Seattle',
  //   state: 'WA',
  //   cuisines: 'Thai, Pan-Asian',
  //   pic: 'http://placekitten.com/250/250'
  // }, {
  //   name: 'Coding Cat Cafe',
  //   city: 'Phoenix',
  //   state: 'AZ',
  //   cuisines: 'Coffee, Bakery',
  //   pic: 'http://placekitten.com/250/250'
  // }]
  // pass places array into render method to use the array inside of our view
    res.render('places/index', {places})
  })


module.exports = router;