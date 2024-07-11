import { mapOptions } from "./constants/map-options.js";

let map;

async function onInit() {
    document.querySelector('#map').setAttribute('data-load', true);
    onInitMapsAPI();
}


function onInitMapsAPI() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoibm92YWthbmQiLCJhIjoiY2p3OXFlYnYwMDF3eTQxcW5qenZ2eGNoNCJ9.PTZDfrwxfMd-hAwzZjwPTg';

    map = new mapboxgl.Map(mapOptions);
    map.on('load', () => {

        const width = 22;
        const height = 30;
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = `url(./assets/images/icon-marker.svg)`;
        el.style.width = `${width}px`;
        el.style.height = `${height}px`;
        el.style.backgroundSize = '100%';
        new mapboxgl.Marker(el)
            .setLngLat([82.913108, 55.038114])
            .addTo(map);

    });
}

document.addEventListener('DOMContentLoaded', onInit);