const React = require('react')
const Default = require('../default.jsx')


function edit_form ({place, id}) {
    return (
        <Default>
          <main>
            <h1>Edit Place</h1>
            <form method="POST" action={`/places/${place.id}?_method=PUT`}>
                <div className="row">
                    <div className="form-group col-sm-6">
                        <label htmlFor="name">Place Name</label>
                        <input className="form-control" id="name" name="name" defaultValue={place.name} required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="pic">Place Picture</label>
                        <input className="form-control" id="pic" name="pic" defaultValue={place.pic} required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="city">City</label>
                        <input className="form-control" id="city" name="city" defaultValue={place.city} required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="state">State</label>
                        <input className="form-control" id="state" name="state" defaultValue={place.state} required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="cuisines">Cuisines</label>
                        <input className="form-control" id="cuisines" name="cuisines" defaultValue={place.cuisines} required />
                    </div>
                    <div className="form-group col-sm-6">
                        <label htmlFor="founded">Founded</label>
                        <input className="form-control" id="founded" name="founded" defaultValue={place.founded} />
                    </div>
                    </div>
                <input className="btn btn-primary" type="submit" value="Update Place" />
                </form>
          </main>
        </Default>
    )
}

module.exports = edit_form
