# Flight-Radar-Redux

This project is a web application that displays flight conditions on a map and allows users to view flight details. The application is used using React and Redux libraries.

<h3>Data Acquisition and Management:</h3>

Redux was used to manage flight data. FlightSlice was created to store flight data, loading and error status. An async thunk called GetFlights fetches data using Axios by making an API request and saves the results to the Redux store.

<h3>Map and List Views:</h3>

The app offers both a map view and a list view, allowing users to switch between them. The map view is created using the react-leaflet library. Flight data is displayed as aircraft icons on the map using customized aircraft images. List view presents flights in tabular format. Each flight is accompanied by a detail button.

<h3>Flight details:</h3>

Flight details can be viewed by clicking on the flight icons or the detail button in the list view. Details are displayed using the SideDetails component. The data is fetched using an API request and presented as a detail page.

<h3>Pagination:</h3>

Pagination is used in list view to display a limited number of flight items per page. The React-paginate library generates page numbers and makes it easier to navigate between pages.

<h3>Style and Visual Design:</h3>

CSS styling is applied to the app for visual improvements. Data is displayed properly in detailed pop-ups and other widgets.

<h3>Additional features:</h3>

Links in flight details (such as airport websites) are designed to be clickable. Flight status icons are displayed with background colors corresponding to the status. 

<h3>Storage and Optimization:</h3>

Flight data is managed in the Redux store for sharing between different components. Preloading and storing data increases page switching speed.

<h1>API: https://rapidapi.com/apidojo/api/flight-radar1 </h1>

<h3> SCREEN GIF </h3>
![radar](https://github.com/goknurgurz/Flight-Radar-Redux/assets/142411104/847aa4d9-da62-4537-831b-93fa766c0976)
