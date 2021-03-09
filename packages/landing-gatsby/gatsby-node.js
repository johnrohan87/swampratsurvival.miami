/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      },
    });
 
};

// ./gatsby-node.js
// Implement the Gatsby API “onCreatePage”. This is
// called after every page is created.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/store/)) {
    page.matchPath = "/store/*"

    // Update the page.
    createPage(page)
  }
  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"

    // Update the page.
    createPage(page)
  }
  if (page.path.match(/^\/posts/)) {
    page.matchPath = "/posts/*"

    // Update the page.
    createPage(page)
  }
}