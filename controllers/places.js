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

//Show /places/:id
router.get('/:id', (req, res) => {
  // casting the id to a number
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    //pass places[id] into view
    res.render('places/show', { place: places[id], id: id })
  }
})

//Delete places/:id
//already in the places controller do not need /places/:id just need /:id
router.delete('/:id', (req, res) => {
  console.log(req.body)
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

module.exports = router;