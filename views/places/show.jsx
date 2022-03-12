const React = require('react')
const Default = require('../default')

function show ({place, id}) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (place.comments.length) {
    comments = place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
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
              <a href={`/places/${place.id}/edit`} className="btn btn-warning"> 
                  Edit
              </a>      
              <form method="POST" action={`/places/${place.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form> 
            </div>
            <div>
              <form method="POST" action={`/places/${place.id}/comment`}> 
                    <div className="form-row">
                            <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                                <label htmlFor="content">Content</label>
                                <input className="form-control" id="content" name="content" required />
                            </div>
                            <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                                <label htmlFor="author">Author</label>
                                <input className="form-control" id="author" name="author" required />
                            </div>
                            <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                                <label htmlFor="stars">Star Rating</label>
                                <input type="range" min="0" max="5" step="0.5" className="form-range" id="stars" name="stars"/>
                            </div>
                            <div className="form-check-inline">
                                <label className="form-check-label" htmlFor="rant">Rant?</label>
                                <input className="form-check-input" type="checkbox" id="rant" name="rant" />
                            </div>
                    </div>
                  <input className="btn btn-primary" type="submit" value="Add Comment" />
              </form> 
            </div>
            <div>
              <h1>Comments</h1>
              <div className="d-flex flex-row justify-content-center">
              <p className="text-center">
                {comments}
              </p>
              </div>
            </div>
          </div>     
        </main>
      </Default>
    )
}

module.exports = show