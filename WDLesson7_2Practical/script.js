// Data Source:
// https://data.cityofnewyork.us/Public-Safety/Motor-Vehicle-Collisions-Crashes/h9gi-nx95

let data, info, mapObj;

// Initialize page
async function init(){

  let link = "mvc.json";

  // Fetch data
  info = await fetch(link);
  data = await info.json();

  let leftPanel = get("leftPanel");
  let build = "";

  // Build cards
  for(let i = 0; i < data.length; i++){

    let crash = data[i];

    build += card(crash);
  }

  // Display cards
  leftPanel.innerHTML = build;
}

// Filter by borough
function filterByBoro(){

  let borough = get("car").value.toUpperCase();

  let build = "";

  for(let i = 0; i < data.length; i++){

    let crash = data[i];

    if(crash.borough &&
       crash.borough.toUpperCase() === borough){

      build += card(crash);
    }
  }

  get("leftPanel").innerHTML = build;
}