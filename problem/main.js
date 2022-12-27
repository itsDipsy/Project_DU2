"use strict";



/*

  Notice the images on the page header.

  G: The images can be hard-coded in the CSS (as background-image)
  VG: Every time the user selects / unselects one or more filter elements, the app
      shows three random images from all the possible country images.

*/



// Create Filter Elements

create_filters();
create_countries_cities_filters();


// Add Interaction of search field button
document.querySelector("#search_field button").addEventListener("click", update_programmes);

// Initialise programmes list by calling relevant function
update_programmes();


// VG
// Add Interaction of filter containers (select-deselect all filters in the container)
let the_filter_doms = document.querySelectorAll("#others_filter > div");
for (let i = 0; i <= the_filter_doms.length - 1; i++) {
  the_filter_doms[i].addEventListener("click", (event) => {
    add_group_toggling(the_filter_doms[i]);
  })
}

// Example: Click anywhere on the language-filter-container and all the language filters
// (spanska, svenska, engelska, franska) will toggle.


// VG
// Add Interaction of button toggle-all-cities
toggle_cities();


