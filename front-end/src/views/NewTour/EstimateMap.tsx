import { GoogleMap, MarkerF } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { LoadGoogleScript } from "../../components/LoadGoogleScript";
import { selectCurrentEstimate } from "../../store/slices/estimateSlice";
import pinA from '../../assets/img/pin-a.svg';
import pinB from '../../assets/img/pin-b.svg';
import styled from "styled-components";


export function EstimateMap() {
    const currentEstimate = useSelector(selectCurrentEstimate)
    const handleLoadMap = (map: google.maps.Map) => {
        if (!currentEstimate) {
            return
        }
        const bounds = new google.maps.LatLngBounds()
        bounds.extend({
            lat: currentEstimate.startAddress.lat,
            lng: currentEstimate.startAddress.lng
        })
        bounds.extend({
            lat: currentEstimate.endAddress.lat,
            lng: currentEstimate.endAddress.lng
        })
        map.setCenter(bounds.getCenter())
        map.fitBounds(bounds)
    }
    if (!currentEstimate) {
        return null
    }
    return (
        <LoadGoogleScript>
            <WrapStyled>
                <GoogleMap
                    mapContainerStyle={{
                        minHeight: 226
                    }}
                    center={{ lat: 0, lng: 0 }}
                    zoom={1}
                    onLoad={handleLoadMap}
                    options={{
                        disableDefaultUI: true,
                        disableDoubleClickZoom: true,
                        gestureHandling: 'none'
                    }}
                >
                    <MarkerF
                        position={{
                            lat: currentEstimate.startAddress.lat,
                            lng: currentEstimate.startAddress.lng
                        }}
                        icon={pinA}
                    />
                    <MarkerF
                        position={{
                            lat: currentEstimate.endAddress.lat,
                            lng: currentEstimate.endAddress.lng
                        }}
                        icon={pinB}
                    />
                </GoogleMap>
            </WrapStyled>

        </LoadGoogleScript>
    );
}

const WrapStyled = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    & > div {
        flex: 1;
    }
    a[href^='http://maps.google.com/maps']{
        display: none !important
    }
    a[href^='https://maps.google.com/maps']{
        display: none !important
    }
    .gmnoprint a, .gmnoprint span, .gm-style-cc {
        display: none;
    }
    .gmnoprint div {
        background:none !important;
    }
`