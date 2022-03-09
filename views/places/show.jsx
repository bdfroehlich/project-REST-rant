const React = require('react')
const Default = require('../default')

function show ({place, id}) {
    return (
        <Default>
          <main>
            <div className="row">
            <h1>Show Page</h1>
            <h1>{place.name}</h1>
            <div className="col-sm-6">
              <img className="rounded mx-auto d-block" src={place.pic} alt={place.name} />
              <h3 className="text-center">
                Located in {place.city}, {place.state}
              </h3>
            </div>
            <div className="col-sm-6">
              <h1>Rating</h1>
              <p className="text-center">
                Not Rated
              </p>
              <h2>Description</h2>
              <h3>
                {place.showEstablished()}
              </h3>
              <h4 className="text-center">
                Serving {place.cuisines}
              </h4>
            </div>
            <div>
              <h1>Comments</h1>
              <p className="text-center">
                No comments yet!
              </p>
            </div>
            </div>
            <a href={`/places/${id}/edit`} className="btn btn-warning"> 
              Edit
            </a>      
            <form method="POST" action={`/places/${id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>      
          </main>
        </Default>
    )
}

module.exports = show