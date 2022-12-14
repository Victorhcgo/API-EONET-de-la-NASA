import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";


const layer = new FeatureLayer({
  portalItem:{
    id: 'b234a118ab6b4c91908a1cf677941702', 
  },
  outFields:['NAME', 'STATE_NAME', 'VACANT', 'HSE_UNITS'],
  title: 'api map NASA',
  opacity: 0.8,
});

const view = new MapView({
  container: "root",
  map: new Map({
    basemap: "arcgis-topographic",
    layers:[layer]
  }),

  center: [-100.33, 33.69],
  zoom: 3,
  ui:{
    components: ["attribution"]
  }
});


ReactDOM.createRoot(document.getElementById('root'))
// .render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )

