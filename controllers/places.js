const router = require('express').Router()
const places = require('../models/places')

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', {places})
})

// POST /places
router.post('/', (req, res) => {
  //console.log the body of the request on the backend server to check
  console.log(req.body)
  res.send('POST /places')
})

// GET /places/new
router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router;