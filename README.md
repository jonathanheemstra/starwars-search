# Starwars Search

## About the Build
* The StarWars Search App was built using Angular in order to provide a fast searching experience.

## What would I do different?
1. Cleaner SCSS.
  * I am not the most proficient SCSS dev. I would like to take better advantage of using includes, mix-ins and variables in order to D.R.Y. out my SCSS code.
2. Build to be responsive.
  * In order to build the application I used [Zeplin](https://zeplin.io/) to grab the styles from the Sketch mockup. I focused more on the functionality in Angular than on building with a responsive layout. On other projects I have used both Bootstrap and Flexbox to provide a responsive experience and given more time would implement a responsive solution for the Starwars Search Application.
3. Better componentization of Angular code.
  * Ideally I would like to componentize the search box and the search filter into separate Angular components
4. Paginate the search results.
  * The API only provides a set of ten results at a time and if a search returns more than 10 people pagination would be required to fully list all the results.
5. Testing with Karma.
  * I would like to get testing done at least on the search service but ideally on the entire code base for the application.
6. Include a loading image
  * The spec assets included a png of a loading symbol. Thankfully the SWAPI responds quickly enough that there is a minimal wait for data to be displayed but if pulling a larger set of data a loading screen should be added when making calls to the API.

## What Bugs exist?
1. I am not currently able to capture the specific count of each gender in the gender dropdown filter.
2. The gender search filter does not reset back to empty if a user is to clear the search box. Ideally the search filter would be reset since no search is currently run.
3. The images provided as part of the spec were SVG's. I attempted to get webpack to load them but was unsuccessful so in order to make sure the images displayed correctly I converted the images to a png format.

**Time to build: ~10hrs**
