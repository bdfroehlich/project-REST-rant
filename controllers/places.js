const router = require('express').Router()
const places = require('../models/places')

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', {places})
})

// POST /places
router.post('/', (req, res) => {
  //check that post is making it to backend server
  // console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// GET /places/new
router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router;