import React from 'react';
import SearchBar from '../components/search-bar/SearchBar.jsx';
import { BookedVenues, Rooms, Activity } from '../dummyData.js';
import HomeBooking from '../components/Home-Booking/HomeBooking.jsx';
import HomeRooms from '../components/Home-Rooms/HomeRooms.jsx';
import './CSS/Home.css';
import HomeActivity from '../components/Home-Activity/HomeActivity.jsx';

export default function Home() {
  return (
    <div>
      <SearchBar />
      <div className="BRContainer">
        <h2>Booking & Rooms</h2>
        <div className="Booked_Rooms">
          <div className="Booked">
            <h3>Bookings</h3>
            {BookedVenues.map((b) => (
              <HomeBooking key={b.id} BookedVenues={b} />
            ))}
          </div>
          <div className="Rooms">
            <h3>Rooms</h3>
            {Rooms.map((R) => (
              <HomeRooms key={R.id} Rooms={R} />
            ))}
          </div>
        </div>
      </div>
      <div className="ActivityContainer">
        <h2>Activities Nearby</h2>
        <div className="ActivityField">
            {Activity.map((A) => (
              <HomeActivity key={A.id} Activity={A} />
            ))}
        </div>
      </div>
        
    </div>
  )
}

