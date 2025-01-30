// Initialize the Leaflet map
var map = L.map('map').setView([59.3293, 18.0686], 6); // Centered on Sweden

// Add a tile layer (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example: Add a marker (You can add project locations later)
L.marker([59.3293, 18.0686]).addTo(map)
    .bindPopup('Stockholm, Sweden - Example GIS Project');
