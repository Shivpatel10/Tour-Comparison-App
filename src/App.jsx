import { useState } from 'react';
import './App.css';
import TourGallery from './gallery';

function App() {
  return (
    <div>
      <h1>Tour Gallery</h1>
      {/* Render the TourGallery component */}
      <TourGallery/>
    </div>
  );
}

export default App;
