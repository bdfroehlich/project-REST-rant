const React = require('react');
const Default = require('./default');

function home () {
    return (
      <Default>
        //will be placed inside of the body tag within the Default tag found in default.jsx
          <main>
              <h1>HOME</h1>
          </main>
      </Default>
    )
  }

module.exports = home;
