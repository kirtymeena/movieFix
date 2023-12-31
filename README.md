# moviefix

Movie List App - movie information app that displays a list of movies from The Movie Database (TMDb) API.

![Screen Shot 2023-12-17 at 13 46 57](https://github.com/kirtymeena/movieFix/assets/40634061/435c2e40-9ac9-42ef-a359-7ac7c229450b)


# Setup Steps
<p>Below are the steps to run the application in local env:</p>
<ul>
  <li>Clone the repository</li>
  <li>Open the terminal in the code editor or cmd in the application folder and run `npm install`. This will install all the dependencies for the application to run.</li>
  <li>Once the Packages are installed run the following command  - `npm run dev`. This will start the application in local development mode.</li>
</ul>

# Requriments 
Below are the requirements that were covered in the project

## Requirements Implemented
### Layout and UI
<ul>
  <li>Implemented reusable and responsive UI using reactJs and CSS </li>
  <li>Displayed a list of movies sorted in descending order of popularity.</li>
  <li>Displayed the movie title, image, genre, and a short description(visible only when hovered on the card) related
to the movie in each information card.</li>
  <li> Smooth scrolling even when more and more movies are loaded in the
DOM.</li>
</ul>

### Default page load state
<ul>
  <li>Initially, 20 movies for each year loads.</li>
  <li>By default, when a user lands on the page, movies of year 2012 are displayed.</li>
  <li>Implement smooth scrolling behavior to load more movies as the user scrolls in
any direction using setTimeout</li>
</ul>

### Filter
<ul>
  <li>Movies in each year can be filtered by geners</li>
  <li>User can select multiple genre filters and UI gets updated based on the filter</li>
</ul>

# Tech Stack used
ReactJS - v18 

CSS

Javascript
