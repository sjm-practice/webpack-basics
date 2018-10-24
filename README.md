# webpack-basics

A simple project to learn webpack basics. Following along with LinkedIn Learning Webpack 1 tutorial.

## Resources
* https://www.linkedin.com/learning/learning-webpack-1

## Notes
* using webpack to inline images reduces http calls
  - uses url-loader, file-loader
* NOTE, ran in to some trouble trying to get the background image to display. the path wasn't getting set correctly for some reason
  - I did add file loader options of path and name, which did work, still doesn't seem optimally configured

### Status
* stopping the tutorial at Section 4, Code Splitting
  - was somewhat helpful to get an idea of how to begin to set up code splitting with webpack, but the tutorial didn't completely show how to take advantage of code splitting (how separate bundles are called -I'm assuming by URL)
    + I'd recommend finding another tutoral more specific to code splitting (this was very cursory)
* not interested in completing the final section on webpack-dev-server at this time

