# Improvements
1) Make the URL Shortener website so that it's not hosted on a local port, but an actual website.
2) Add authentication for the URL so that only valid URLs that begin with https and http can be accepted.
3) Create an informative README file.


## A Quick Note
I completed this URL Shortener while working 24/7 at a summer camp in Vermont, so I didn't have as much time as I wanted to make it as I wanted. 
I do have a break coming up in the next couple of days after the application deadline, and I plan to revisit the coding challenge to better understand and improve it.

# Everything

This is the C4C monorepo containing all of our active projects.

Deployable units exist in `/apps`, inside each folder there is a README explaining how that unit is tested and deployed.

Business logic and supporting library for those deployable units exist in `/libs`. These are composable units of software that are not coupled to a specific deployment framework or strategy, and are meant to be easily reused in future projects.

The purpose of `README.md`s in this repository are to explain the usage of the application. The bare minimum you need to get it running. More detailed developer and public documentation exists on the wiki. `README.md`s will often link to relevant wiki pages.


Links to Project `README.md`

- [Monarch](./apps/monarch/README.md)
- [c4cneu.com](./apps/dotcom/README.md)


## 🔨 Development
1. Install Node v16.x
2. Clone this repo
3. `yarn install`

When adding new dependencies, use `yarn add` or its dev dependency equivalent. Thanks to Nx, each package will only be installed once, and each app knows how to bundle itself correctly based on its dependencies.
