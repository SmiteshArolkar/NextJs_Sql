import 'leaflet/dist/leaflet.css'


import { MapContainer,TileLayer ,Marker, Popup} from 'react-leaflet'


function Map() {


  return ( 
    <MapContainer className='w-full h-96' center={[lat,long]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={lat}>
        <Popup>
          <div>
            <h1>Location</h1>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
   );
}

export default Map;