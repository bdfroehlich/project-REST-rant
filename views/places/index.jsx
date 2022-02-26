const React = require('react');
const Default = require('../default');

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}></img>
        </div>
      )
    })
    return (
      <Default>
          <main>
              <h1>PLACES INDEX PAGE</h1>
              {placesFormatted}
          </main>
      </Default>
  )
  }


  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
  }]

module.exports = index;