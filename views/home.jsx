const React = require('react');
const Default = require('./default');

function home () {
    return (
      <Default>
        {/* will be placed inside of the body tag within the Default tag found in default.jsx */}
          <main>
              <h1>REST-Rant</h1>
              <div>
                <img src="/images/pancake-stack.jpg" alt="Pancake Stack"/>
                <div>
                  Photo by <a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
              {/* bootstrap button class styling is not working */}
              <a href="/places">
              <button type="button" className="btn btn-primary">Places Page</button>
              </a>
          </main>
      </Default>
    )
  }

module.exports = home;
