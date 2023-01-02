"use strict";



/* -- R 

  Notice the images on the page header.

  G: The images can be hard-coded in the CSS (as background-image)
  VG: Every time the user selects / unselects one or more filter elements, the app
      shows three random images from all the possible country images.

*/



// Create Filter Elements

create_filters();
create_countries_cities_filters();
update_programmes();


// Add Interaction of search field button
document.querySelector("#search_field button").addEventListener("click", update_programmes);

// Initialise programmes list by calling relevant function


// VG -- R
// Add Interaction of filter containers (select-deselect all filters in the container)
// Example: Click anywhere on the language-filter-container and all the language filters
// (spanska, svenska, engelska, franska) will toggle.

let the_filter_doms = document.querySelectorAll(".filter_container");
for (let i = 0; i <= the_filter_doms.length - 1; i++) {
  the_filter_doms[i].addEventListener("click", (event) => {
    add_group_toggling(event.currentTarget)
    event.stopPropagation();
  })
}



// VG -- R
// Add Interaction of button toggle-all-cities
toggle_cities();


