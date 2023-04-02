
//shifting

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

 //location
document.getElementById("location-btn").addEventListener("click", getLocation);

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    alert("Latitude: " + position.coords.latitude +
      "\nLongitude: " + position.coords.longitude);
  }
  

