import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const Map = ({ center, onMarkerDragEnd }) => {
    const [markers, setMarkers] = useState([])

    useEffect(() => {
        const storedMarkers = localStorage.getItem('medicates')
        if (storedMarkers) {
            const parsedMarkers = JSON.parse(storedMarkers)

            if (Array.isArray(parsedMarkers) && parsedMarkers.length > 0) {
                const listMarkers = parsedMarkers.map((mark) => mark.location)
                setMarkers(listMarkers)
            }
        }
    }, [])

    useEffect(() => {
        const initMap = async () => {
            try {
                const { Map } = await window.google.maps.importLibrary('maps')

                const { AdvancedMarkerElement } =
                    await window.google.maps.importLibrary('marker')

                const map = new Map(document.getElementById('map'), {
                    zoom: 12,
                    center: center,
                    mapId: 'DEMO_MAP_ID'
                })

                markers.forEach((markerInfo) => {
                    const marker = new AdvancedMarkerElement({
                        map,
                        position: markerInfo.position,
                        title: markerInfo.title
                    })

                    marker.addListener('dragend', () => {
                        const newPosition = marker.getPosition()
                        onMarkerDragEnd({
                            lat: newPosition.lat(),
                            lng: newPosition.lng()
                        })
                    })
                })
            } catch (error) {
                console.log('Marker is not set')
            }
        }

        initMap()
    }, [center, markers, onMarkerDragEnd])

    return (
        <div style={{ width: '100%', height: '250px' }}>
            <div id="map" style={{ width: '100%', height: '100%' }}></div>
        </div>
    )
}

Map.propTypes = {
    center: PropTypes.object.isRequired,
    onMarkerDragEnd: PropTypes.func
}
