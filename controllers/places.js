const router = require('express').Router()
const places = require('../models/places')

// GET /places
router.get('/', (req, res) => {
    res.render('places/index', {places})
  })

// GET /places/new
router.get('/new', (req, res) => {
    res.render('places/new')
})

module.exports = router;