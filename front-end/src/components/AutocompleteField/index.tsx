import { Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import { Address } from "../../entities/Address";
import { FormField, FormFieldProps } from "../FormField";
import { LoadGoogleScript } from "../LoadGoogleScript";

type AutocompleteProps = {
    value: null | Address
    onChange: (address: null | Address) => void
} & Omit<FormFieldProps, 'value' | 'onChange'>

export function AutocompleteField ({value, onChange, ...fieldProps}: AutocompleteProps) {
    const autocompleteRef = useRef<null | google.maps.places.Autocomplete >(null)
    const handleLoad = (autocomplete: google.maps.places.Autocomplete) => {
        autocompleteRef.current = autocomplete
        autocomplete.setBounds(new google.maps.LatLngBounds(
            new google.maps.LatLng(-8.083952, -34.977703),
            new google.maps.LatLng(-8.027608, -34.859853)
        ))
    }
    const handleChange = () => {
        const place = autocompleteRef.current?.getPlace()
        if(place && place.formatted_address && place.geometry?.location) {
            const address: Address = {
                address: place.formatted_address,
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng()
            }
            onChange(address)
        }

    }
    return (
        <LoadGoogleScript>
            <Autocomplete
            onLoad={handleLoad}
            onPlaceChanged={handleChange}
            restrictions={{
                country:'br'
            }}
            options ={{
                strictBounds: true
            }}
            >
                <FormField
                {...fieldProps}
                onChange={() => onChange(null)} 
                defaultValue={value?.address ||''}
                />
            </Autocomplete>
        </LoadGoogleScript>
    )
}