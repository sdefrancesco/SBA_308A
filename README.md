SBA 308 A by sebastian defrancesco

Countries of the World
This web application showcases a list of all the official countries of the world. It allows users to explore information about each country, including its name, flag, capital, population, area, and more. The app also includes search and sort functionalities, with an animated fake lazy-loading feature that triggers the animations when the countries come into view.

Features
Search: Users can search for countries by name.

Sort: Users can sort countries alphabetically.

Country Details: Clicking on any country card opens a modal with detailed information about the country.

Lazy Loading Animation: Country cards animate into view when they enter the viewport, providing a nice ux/ui.

Responsive: The application uses Bootstrap for responsive layouts.

Technologies Used

HTML/CSS: Custom styles for the page layout and design.

Bootstrap: For responsive design and UI components.

JavaScript (ES6): For dynamic interactions, sorting, searching, and animations.

Anime.js: For creating the animations on country cards.

Axios: For fetching the data about the countries from an external API.


How It Works
1. Fetching Country Data
The application fetches country data from an external API, which includes details like name, flag, population, capital, region, and area. This data is then displayed on the page in country cards.

2. Search Functionality
The search bar allows users to search for countries by name. As users type, the list of countries is filtered and updated in real-time.

3. Sort Functionality
The "Sort Countries Alphabetically" button allows users to sort the countries in alphabetical order A-Z.

4. Lazy-Loading Animations
Country cards are initially hidden and only animate into view when they are within the viewport. The animation is triggered using the Intersection Observer API.

5. Country Modal
When users click on a country card, a modal window appears displaying detailed information about the country, including its capital, region, population, and a link to view the country on Google Maps.
