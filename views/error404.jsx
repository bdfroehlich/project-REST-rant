const React = require('react');
const Default = require('./default');

function error404(){
    return(
        <Default>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p className="text-center">Oops, sorry, this page does not exist!</p>
                <div className="col">
                    <div>
                    <img className="rounded mx-auto d-block" src="http://placekitten.com/400/400" alt="Cat Picture"/>
                    <p className="text-center">Photo by <a href="https://placekitten.com/">Place Kitten</a></p>
                    </div>
                </div>
            </main>
        </Default>
    )
}

module.exports = error404;