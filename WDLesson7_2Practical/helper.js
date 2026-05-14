// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// Display map
function showMap(lat, lon){

  // Remove old map if it exists
  if(mapObj){
    mapObj.remove();
  }

  // Create map
  mapObj = L.map('map').setView([lat, lon], 14);

  // Add tile layer
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mapObj);

  // Add marker
  L.marker([lat, lon]).addTo(mapObj);
}

// Create collision card
function card(info){

  let html = `
    <div class="card">
      <h3>${info.borough || "Unknown Borough"}</h3>
      <p><b>Date:</b> ${info.crash_date}</p>
      <p><b>Street:</b> ${info.on_street_name || "N/A"}</p>
      <p><b>Injured:</b> ${info.number_of_persons_injured || 0}</p>
  `;

  // Only show map button if coordinates exist
  if(info.latitude && info.longitude){
    html += `
      <button onclick="showMap(${info.latitude}, ${info.longitude})">
        View Map
      </button>
    `;
  }

  html += `</div>`;

  return html;
} 