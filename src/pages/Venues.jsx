import React from 'react'
import SearchBar from '../components/search-bar/SearchBar.jsx';
import VenueComponent from '../components/venue-component/VenueComponent.jsx';
import { Venues } from '../dummyData.js';

export default function Venue() {
  return (
    <div>
      <SearchBar />
      {Venues.map((v) => (
        <VenueComponent key={v.id} venue={v} />
      ))}
    </div>
  )
}
