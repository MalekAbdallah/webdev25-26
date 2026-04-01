function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://imagescdn.homes.com/i2/DR3rh3ZAFGmxdce_vrcZB-VfI1qR7cPIq11ixKmzhCY/117/bayside-high-school-bayside-ny-2-schoolphoto.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
let build = ``
  build += `<div class=card>
  <h3>${school.name}</h3>
  <p>${school.address}</p>
  <img src="${school.image}"
  </div>`;
  output.innerHTML = build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":"Bruno Mars",
    "image":"https://www.hollywoodreporter.com/wp-content/uploads/2023/07/Bruno-Mars-H-PUBLICITY-MAIN-2023.jpg?crop=0px%2C0px%2C1000px%2C560px&resize=2000%2C1126",
    "album":"24kmagic",
    "url":"https://www.brunomars.com/"
  };
  let output = document.getElementById("output");

  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
let build1 = ``
  build += `<div class="card">
  <h3>${artist.name}</h3>
  <p>${artist.album}</p>
  <p>${artist.image}</p>
  <a href="${artist.url}" target"_blank">
  </a>
  </div>`;
  output.innerHTML = build1;
}



