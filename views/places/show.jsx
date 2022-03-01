const React = require('react')
const Default = require('../default')

function show ({place, id}) {
    return (
        <Default>
          <main>
            <h1>Show Page</h1>
            <h1>{place.name}</h1>
            <div>
              <img className="rounded mx-auto d-block" src={place.pic} alt={place.name} />
            </div>
            <div>
              <h1>Rating</h1>
              <p className="text-center">
                Not Rated
              </p>
              <h1>Description</h1>
              <p className="text-center">
                Located in {place.city}, {place.state}
              </p>
              <p className="text-center">
                Available Cuisines: {place.cuisines}
              </p>
            </div>
            <div>
              <h1>Comments</h1>
              <p className="text-center">
                No comments yet!
              </p>
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