/**
 * Get a location coordinates
 * @param xxx ...
*/

export const geoLocate = (
  apiKey: string, location: string
) => {
  let endpoint = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + apiKey + '&address=' + encodeURI(location);
  fetch(endpoint, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === "OK") {
        console.log(data.results[0].geometry.location);
        return (data.results[0].geometry.location);
      }
      else
        throw new Error("geoLocate: place not found.")
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export const autoComplete = (
  apiKey: string
) => {
  const elements = document.querySelectorAll("[autoComplete='true']");

  if (elements.length === 0) {
    console.log("autoComplete: no elements found.");
  } else {
    elements.forEach((element: HTMLInputElement) => {
      let autocomplete = new google.maps.places.Autocomplete(element);
      google.maps.event.addListener(autocomplete, 'place_changed', function() {
        console.log("Place changed");
        const place = autocomplete.getPlace();
        if (place.vicinity) {
          console.log("Address exists")
        }
      });
    });
  };
};