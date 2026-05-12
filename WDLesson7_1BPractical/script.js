//Data Source: https://data.cityofnewyork.us/City-Government/Open-Parking-and-Camera-Violations/nc67-uf89

let data, info, output; // global variables

async function init(){  
  let link = "data.js"; //let link = "https://data.cityofnewyork.us/resource/nc67-uf89.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();

  output = get("output");
  let build = "";
  let ct = 0;

  //Challenge 2
  build += card(data[0]);

  //Challenge 3
  for (let i = 0; i < data.length; i++) {
    build += card(data[i]);
    ct++;
  }

  get("result").innerHTML = `${ct} Results found`;
  output.innerHTML = build;
}

//Challenge 4
function filterByState(state){
  let result = "";

  for (let i = 0; i < data.length; i++) {
    if (data[i].state == state) {
      result += card(data[i]);
    }
  }

  output.innerHTML = result;
}