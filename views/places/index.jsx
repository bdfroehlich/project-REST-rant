const React = require('react');
const Default = require('../default');

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div key={place.name} className="col-md-4">
          <h2>{place.name}</h2>
          <p className="text-left">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} />
          <p className="text-left">
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Default>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className="row">
                {placesFormatted}
              </div>
          </main>
      </Default>
    )
}
  

module.exports = index;
