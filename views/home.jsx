const React = require('react');
const Default = require('./default');

function home () {
    return (
      <Default>
        {/* will be placed inside of the body tag within the Default tag found in default.jsx */}
          <main>
              <h1>HOME</h1>
              <a href="/places">
                <button className="btn-primary">Places Page</button>
              </a>
          </main>
      </Default>
    )
  }

module.exports = home;
