import * as React from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

function Map({ searchResults }) {
    const [selectedLocation, setSelectedLocation] = React.useState({})

    // transform the search results object into the lat long obj

    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }))

    const center = getCenter(coordinates)

    const [viewport, setViewport] = React.useState({
        width: 500,
        height: 2058,
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11
    });


    return (
        <ReactMapGL
            mapStyle="mapbox://styles/troysaved/cl4yo7z6h000614jq9d3kx9v1"
            mapboxApiAccessToken={process.env.mapbox_key}
            onViewportChange={nextViewport => setViewport(nextViewport)}
            {...viewport}
        >

            {searchResults.map(result => (
                <div key={result.long}>
                    <Marker
                        longitude={result.long}
                        latitude={result.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p
                            onClick={() => setSelectedLocation(result)}
                            className='cursor-pointer text-2xl animate-bounce'
                        >

                            📍
                        </p>
                    </Marker>
                    {selectedLocation.long === result.long ? (
                        <Popup
                            closeOnClick={true}
                            onClose={() => setSelectedLocation({})}
                            latitude={result.lat}
                            longitude={result.long}
                        >
                            {result.title}
                        </Popup>
                    ) : (
                        false
                    )}

                </div>
            ))}

        </ReactMapGL>



    );
}


export default Map;


