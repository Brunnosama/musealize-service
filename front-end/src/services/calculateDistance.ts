import { Address } from "../entities/Address"

type calculateDistanceInput = {
    origin: Address
    destination: Address
}

export const calculateDistance = async ({origin, destination}: calculateDistanceInput) => {
const directionsService = new google.maps.DirectionsService()
const result = await directionsService.route({
    origin: new google.maps.LatLng(origin.lat, origin.lng),
    destination: new google.maps.LatLng(destination.lat, destination.lng),
    travelMode: google.maps.TravelMode.DRIVING
})
console.log('result', result)
}