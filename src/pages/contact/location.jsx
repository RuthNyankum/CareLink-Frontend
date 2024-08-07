import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const defaultCenter = [5.6037, -0.187]; // Coordinates for Accra, Ghana

const Location = () => {
  return (
    <div className="flex justify-center items-center  bg-gray-900 p-6">
      <div className="bg-gray-800 bg-cover bg-center rounded-md shadow-md p-8 w-full max-w-5xl mx-auto">
        <h1 className="text-black text-3xl font-bold mb-4">Our Location</h1>
        <p className="text-black text-lg mb-4">You can find us at:</p>
        <p className="text-black mb-8">Independence Ave, Accra, Ghana</p>
        <div className="w-full h-64 mb-8">
          <MapContainer
            center={defaultCenter}
            zoom={13}
            style={{ height: '100%', width: '100%', zIndex: 1 }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={defaultCenter}>
              <Popup>Independence Ave, Accra, Ghana</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="text-black">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p>
            <strong>Phone:</strong> (233) 123-456-789
          </p>
          <p>
            <strong>Email:</strong> contact@carelink.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
