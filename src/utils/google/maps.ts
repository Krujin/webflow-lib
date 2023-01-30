/**
 * Get a location coordinates
 * @param xxx ...
*/

export const geoLocate = (
  apiKey: string
) => {
  const elements = document.querySelectorAll("[geoLocate='true']");

  if (elements.length === 0) {
    console.log("geoLocate: no elements found.");
  } else {
    elements.forEach((element: HTMLInputElement) => {
      new google.maps.places.Autocomplete(element);
      element.addEventListener('change', () => {
        const place = element.value;
        if (!place) {
          console.log("geoLocate: element needs to be an input.");
        } else {
          let endpoint = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + apiKey + '&address=' + encodeURI(place);
          fetch(endpoint, { method: 'GET' })
            .then((response) => response.json())
            .then((data) => {
              if (data.status === "OK")
                console.log(data.results[0].geometry.location);
            else
              console.log("geoLocate: place not found.")
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
      })
    });
  }
  // let map: google.maps.Map;
  // const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};

  // function initMap(): void {
  //   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
  //     center,
  //     zoom: 8
  //   });
  // }
};