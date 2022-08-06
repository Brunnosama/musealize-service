import { Address } from "../entities/Address"

type CalculateDistanceInput = {
    origin: Address
    destination: Address
}

export const calculateDistance = async ({origin, destination}: CalculateDistanceInput) => {
const directionsService = new google.maps.DirectionsService()
const {routes} = await directionsService.route({
    origin: new google.maps.LatLng(origin.lat, origin.lng),
    destination: new google.maps.LatLng(destination.lat, destination.lng),
    travelMode: google.maps.TravelMode.WALKING
})
if(!routes[0]?.legs[0]?.duration) {
    throw new Error("Falha ao estabelecer percurso. Tente novamente.");
}
return {
    distanceDuration: routes[0].legs[0].duration.value
}
}