const React = require('react')
const Default = require('../default')

function New (data) {
    let message = ''               
    if (data.message) {
      message = (
        <h4 className="alert-danger">
          {data.message}
        </h4>
      )
    }
    return (
        <Default>
            <main>
                <h1>
                    Add a New Place
                </h1>
                {message}
                <form method="POST" action="/places">
                    <div className="form-row">
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" required />
                    </div>
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" required />
                    </div>
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" required />
                    </div>
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" required />
                    </div>
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" required />
                    </div>
                    <div className="form-group mx-auto col-sm-6 col-md-4 col-lg-3">
                        <label for="founded">Founded Year</label>
                        <input className="form-control" type="number" id="founded" name="founded" value={new Date().getFullYear()} required />
                    </div>
                    </div>
                <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Default>
    )
}
module.exports = New