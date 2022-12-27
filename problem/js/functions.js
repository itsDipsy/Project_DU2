// G!

// CODE According to specification ---- KLAR

function click_filter_element(event) {

  /*

    ARGUMENTS

      event: event-object created when user clicks on one of the filter elements.

 

    SIDE-EFFECTS

      Marks the clicked filter element as selected / unselected.

      Since a filter element will have changed after the click, the list of

      programmes must be updated.

      Attention VG

        Careful with the propagation of the click-event

 

    NO RETURN VALUE

 

  */

  event.currentTarget.classList.toggle("selected"); // togglar selected på alla de som li som clickas
  // antalet programms, blir mer eller mindre beronde på klick av li och upptadering av programms per klick
  // Tar bort alla ul som fanns tidagare så att det inte appends på de gamala

  let all_programs_appended_before = document.querySelector("#programmes > ul");
  all_programs_appended_before.innerHTML = ""; /*
                                                  JÄTTE VIKTIGT!
                                                  Detta tar bort all tidagre element inuti programmes ul
                                                  så att när uppdate_programs sker så kan den igen appenda
                                                  allt så att det inte blir fler av samma programmes
                                                */
  if (event.currentTarget.classList.contains("selected") === true) {
    console.log("selected");
    update_programmes();
  }
  if (event.currentTarget.classList.contains("selected") === false) {
    console.log("unselected");
    update_programmes();

  }
}



// G

// CODE according to specification  ---- KLAR

function create_filter_element(data) {

  /*

  ARGUMENTS

  data: object that contains the following keys:

  class (string): a class-name given to the created element

  textContent (string): the text that the element contains

  parent (reference to HTML-element): the HTML-element that is the parent of the created element

 

  No control of arguments.

 

  SIDE-EFFECTS

  Creates a new dom-element with the tag "li".

  Gives the new dom-element the class contained in data.class

  Appends the new dom-element to the element referenced in data.parent

  Sets the text content of the new dom-element to data.textContent

  Sets the function click_filter_element as a listener to "click" for the new dom-element

 

  RETURN VALUE

  Returns a reference to the new dom-element

  */



  const filer_dom = document.createElement("li");


  filer_dom.classList.add(data.class);





  filer_dom.textContent = data.textContent;



  data.parent.append(filer_dom);

  filer_dom.addEventListener("click", click_filter_element);

  return filer_dom;

}



// VG

// CODE according to specification

function add_group_toggling(filter_container_dom) {

  /*

    ARGUMENT

      filter_container_dom: reference to a HTML-element that contains a set of fliter_elements

            Exempel: the <ul> that contains the filters for Language.

 

    SIDE EFFECTS

      The function makes sure that when the user clicks on filter_container_dom, all the

      filter_elements that it contains are selected / unselected.

      Since some filter elements will have changed after the click, the list of

      programmes must be updated.

 

    NO RETURN VALUE

 

  */

}



// VG

// CODE according to specifications

function toggle_cities() {

  /*

 

    ARGUMENTS

      This function does not take any arguments

 
    
    SIDE EFFECTS

      This function checks the state of the first city-filter-element (Madrid).

      If it is selected then it de-selects ALL city-filter-elements

      If it is de-selected then it selects ALL city-filter-elements

 

    NO RETURN VALUE
*/
  let the_button = document.querySelector("#country_filter > button");
  the_button.addEventListener("click", () => {
    let all_selected = document.querySelectorAll("li");
    if (all_selected[0].classList.contains("selected")) {
      for (let i = 0; i < all_selected.length; i++) {
        if (all_selected[i].classList.contains("selected") === true) {
          all_selected[i].classList.remove("selected");
          update_programmes();
        }
      }
    }
    else {
      for (let i = 0; i < all_selected.length; i++) {
        if (all_selected[i].classList.contains("selected") === false) {
          all_selected[i].classList.add("selected");
          update_programmes();
        }
      }
    }
  })
}



// WRITE SPECIFICATION

// ATTENTION: You need to write the specification of all three functions:

//            create_countries_cities_filters, create_country and create_city

function create_countries_cities_filters() {

  function create_country(country) {

    const dom = document.createElement("div");

    dom.classList.add("country");

    dom.classList.add("filter_container");

    dom.id = "country_" + country.id;

    document.querySelector("#country_filter > ul").append(dom);



    dom.innerHTML = `

      <h1>${country.name}</h1>

      <ul class="filter_list"></ul>

    `;



    const cities = array_filter(CITIES, test_function);

    function test_function(city) {

      return city.countryID === country.id;

    }



    array_each(cities, create_city);

  }

  function create_city(city) {

    const dom = create_filter_element({

      parent: document.querySelector(`#country_${city.countryID} > ul`),

      class: "selected", // ska va selected, igentligen men då selecteras alla lite jobbigt att jobba med det så ändrade det

      textContent: city.name,

    });

    dom.dataset.id = city.id;

  }



  array_each(COUNTRIES, create_country);

}



// G

// ABSTRACT AND WRITE SPECIFICATION

//    As you can see, all three functions below do basically the same thing.

//    Abstract them to one function, and write the specification of that function.

function create_filters() {

  let the_counter = 0;

  function create_filter(data) {

    let names = ["level", "subject", "language"];

    const dom = create_filter_element({

      parent: document.querySelector(`#${names[the_counter]}_filter > ul`), // här måste man kunna passa in alla det

      class: "selected",// ska va selected, igentligen men då selecteras alla lite jobbigt att jobba med det så ändrade det

      textContent: data.name,

    });

    dom.dataset.id = data.id;

  }

  if (array_each(LEVELS, create_filter)) {

    the_counter++;

  }

  if (array_each(SUBJECTS, create_filter)) {

    the_counter++;

  }

  if (array_each(LANGUAGES, create_filter)) {

    the_counter++;

  }

}



// G / VG (see details in specification)

// CODE according to specifications
function create_programme(programme) {
  /*
 
 
 
    ARGUMENT
 
      programme (object): One of the objects from PROGRAMMES
 
 
 
    SIDE-EFFECTS
 
      This function creates the HTML-element that contains all the information
 
      about one programme, as seen in the video / image.
 
     
 
      VG: The background image is a random image from among the images of the city
 
          in which the programme is (via the university)
 
      G:  No background image required.
 
 
 
      VG: The "see more" interaction must be included.
 
      G:  The "see more" element is not required. And that information needs not be in place.
 
 
 
    NO RETURN VALUE                        
 
 
 
  */


  /*
  THE KEY TO THIS ALGORITHM IS TOO SAVE THINGS IN VARABLES
  BECAUSE THE DATABASE WORKS AS A STAIR AND VARIABLE LEEDS TO
  THE EXACT VARIABLE I NEEDED WHICH WAS THE CITY ID
  */


  if (programme !== undefined) {
    let programme_parent = document.querySelector("#programmes ul");
    let programme_dom = document.createElement("li");

    let the_selected = document.querySelectorAll("select");
    programme_dom.classList.add("programme");


    // THIS IS THE ALGOTRITHM TO CHECK AND APPLY A LOCATION TO A PICTURE CORRECTLY
    let random_num = Math.floor(Math.random() * 2);
    let random_num_for_procenter_function = Math.floor(Math.random() * 10);
    for (let j = 0; j < PROGRAMMES.length - 1; j++) {
      if (programme.universityID === PROGRAMMES[j].universityID) {
        let the_univeristy_id = programme.universityID;
        if (the_univeristy_id === UNIVERSITIES[the_univeristy_id].id) {

          let city_id = UNIVERSITIES[the_univeristy_id].cityID;
          let uni_id = UNIVERSITIES[the_univeristy_id].id;
          let country_id = CITIES[city_id].countryID;

          programme_dom.style.backgroundImage = `url(./media/geo_images/${CITIES[city_id].imagesNormal[random_num]})`;
          programme_dom.innerHTML = `
            <div class="first_part_of_program_info">
              <div class="programme_name">${programme.name}</div>
              <div class="programme_univeristy">${UNIVERSITIES[uni_id].name}</div> 
              <div class="programme_country_and_city"> ${COUNTRIES[country_id].name}, ${CITIES[city_id].name}</div> 
              <div class="level_laung_subject">${LEVELS[programme.levelID - 1].name}, ${SUBJECTS[programme.subjectID].name}, ${LANGUAGES[programme.languageID].name} </div>
            </div>
            <div class="more_info">
              <div class="show_more_text"></div>
            </div>
            <div class="bottom_programme">
              <div class="the_text_bottom_prog">${CITIES[city_id].name}, sun-index:  ${get_random_number(400)} (${percenter(random_num_for_procenter_function, 10)})% </div>
            </div>
          `
        }
      }

    }
    programme_parent.append(programme_dom);
  }
}





// G

// CODE according to the specification

function update_programmes() {

  /*

      NO ARGUMENTS

 

      SIDE EFFECTS

        This function updates the programmes shown on the page according to

        the current filter status (which filter elements are selected / unselected).

        It uses the function read_filters to know which programmes need to be included.

 

        VG: The top images (header) need to be updated here

 

      NO RETURN VALUE

 

  */

  let number_of_programmes = read_filters();
  let the_top_images = document.querySelectorAll("#top_images div");
  let all_programs_appended_before = document.querySelector("#programmes > ul");
  all_programs_appended_before.innerHTML = "";
  for (let j = 0; j <= the_top_images.length - 1; j++) {
    let random_num_for_images = Math.floor(Math.random() * 1);
    let random_num_for_cities = Math.floor(Math.random() * 32);
    the_top_images[j].style.backgroundImage = `url(./media/geo_images/${CITIES[random_num_for_cities].imagesNormal[random_num_for_images]})`;
  }
  for (let i = 0; i <= number_of_programmes.length; i++) {
    create_programme(number_of_programmes[i]);
  }
  show_more_click_event(number_of_programmes);
}



// G

// WRITE SPECIFICATION



// Denna funktionen skapar fyra arrays som skickar in data från vår js fil (database.js) Med hjälp av array_each så skickar vi in det vi vill ha till en ny array som har namnet programme. I programme så sparar vi alla namn som vi har skickat in med hjälp av array_each.



// You must understand how this function works. There will be questions about it

// in the code review (kodredovisning)



// Optional VG: Which parts of the function's code could be abstracted?

//              Implement it
function read_filters() {

  const city_selected_dom = document.querySelectorAll("#country_filter li.selected");

  const city_id_selected = [];
  function callback_add_cityID(dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    city_id_selected.push(id_as_integer);
  }
  array_each(city_selected_dom, callback_add_cityID);

  const universities = [];
  for (let i = 0; i < city_id_selected.length; i++) {
    const city_id = city_id_selected[i];
    for (let ii = 0; ii < UNIVERSITIES.length; ii++) {
      const university = UNIVERSITIES[ii];
      if (university.cityID === city_id) {
        universities.push(university);
      }
    }
  }

  let programmes = [];
  function callback_add_programmes(university) {
    const university_id = university.id;
    for (let i = 0; i < PROGRAMMES.length; i++) {
      const programme = PROGRAMMES[i];
      if (programme.universityID === university_id) {
        programmes.push(programme);
      }
    }
  }
  array_each(universities, callback_add_programmes);



  const level_selected_dom = document.querySelectorAll("#level_filter li.selected");
  const level_id_selected = [];
  function callback_add_levelID(dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    level_id_selected.push(id_as_integer);
  }
  array_each(level_selected_dom, callback_add_levelID);

  function test_function_level(programme) {
    return level_id_selected.includes(programme.levelID);
  }
  programmes = array_filter(programmes, test_function_level);



  const language_selected_dom = document.querySelectorAll("#language_filter li.selected");
  const language_id_selected = [];
  function callback_add_languageID(dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    language_id_selected.push(id_as_integer);
  }
  array_each(language_selected_dom, callback_add_languageID);



  function test_function_language(programme) {
    return language_id_selected.includes(programme.languageID);
  }
  programmes = array_filter(programmes, test_function_language);



  const subject_selected_dom = document.querySelectorAll("#subject_filter li.selected");
  const subject_id_selected = [];
  function callback_add_subjectID(dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    subject_id_selected.push(id_as_integer);
  }
  array_each(subject_selected_dom, callback_add_subjectID);



  function test_function_subject(programme) {
    return subject_id_selected.includes(programme.subjectID);
  }
  programmes = array_filter(programmes, test_function_subject);



  const search_string = document.querySelector("#search_field input").value;
  if (search_string !== "") {
    function test_function(programme) {
      return programme.name.includes(search_string);
    }
    programmes = array_filter(programmes, test_function);
  }

  return programmes;
}


function show_more_click_event(programes) {

  let the_show_more_button = document.querySelectorAll(".more_info");
  for (let j = 0; j <= the_show_more_button.length - 1; j++) {
    the_show_more_button[j].addEventListener("click", (event) => {
      let the_program = programes[j];
      if (event.currentTarget.classList.toggle("toggled_more_info")) {

        let the_inner_text_dom = document.createElement("div");
        let the_average_sum = 0;
        let success_rate_sum = 0;

        for (let o = 0; o <= the_program.entryGrades.length - 1; o++) {
          the_average_sum = the_average_sum + the_program.entryGrades[o];
        }

        for (let w = 0; w < the_program.successRate.length; w++) {
          success_rate_sum = success_rate_sum + the_program.successRate[w];
        }

        let average_entry_grades_result = the_average_sum / the_program.entryGrades.length;
        let success_rate_result = success_rate_sum / the_program.successRate.length;
        the_inner_text_dom.innerHTML = `
          <div> 
            Average entry grade: ${average_entry_grades_result.toFixed(1)}
          </div>
          <div>
              Success rate: ${success_rate_result.toFixed(2)} %
          </div>
          <div>
              Exchange ratio: ${the_program.exchangeStudents} / ${the_program.localStudents}
          </div>
          `;
        the_show_more_button[j].appendChild(the_inner_text_dom);
      }
      else {
        the_show_more_button[j].innerHTML = "";
      }
    })
  }

}