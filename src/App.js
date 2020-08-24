import React, {useState} from 'react';
import './App.css';
import {Map, TileLayer} from "react-leaflet";

function App() {

    /*
    Settup for map in Leaflet
    https://blog.logrocket.com/how-to-use-react-leaflet/
     */

    //Coordonadas de Leaflet
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);
    const [zoom, setZoom] = useState(13);

    let position = [lat, lng];

    // Marcadores
    const [activePark, setActivePark] = useState(null);

    /*
    useEffect(() => {
        // create map
        L.map('map', {
            center: position,
            zoom: zoom,
            layers: [
                L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
                    attribution:
                        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }),
            ]
        });
    }, []);

     */


    return (
        <Map center={[45.4, -75.7]} zoom={12}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        </Map>

        /*
         <div id="map"></div>
        <div className="App">
            <header className="App-header">


                    Map from leaflet
                     <Map center={position} zoom={zoom}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={position}>
                        <Popup>A pretty CSS3 popup.<br/>Easily customizable.</Popup>
                    </Marker>
                </Map>






                    <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>


            </header>


        </div>

         */
    );
}

export default App;
