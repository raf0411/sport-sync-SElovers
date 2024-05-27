import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './VenueDetail.css';
import VenueImage from '../../assets/venue-image.jpg';
import { Venues } from '../../dummyData';

export default function VenueDetail() {
  const params = useParams();
  const venueId = Number(params.venueId);
  const venue = Venues.find(v => v.id === venueId);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedTimes, setSelectedTimes] = useState([]);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTimes([]);
  };

  const handleMonthChange = (date) => {
    setCurrentMonth(date);
    setSelectedDate(date);
    setSelectedTimes([]);
  };

  const getDayName = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };

  const getAvailability = (date) => {
    if (!date) return null;
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (date < today) return 'Closed';
    
    const dayName = getDayName(date);
    return venue.open_time[dayName] || 'Closed';
  };

  const availability = getAvailability(selectedDate);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  const generateTimeBlocks = (availability) => {
    if (availability === 'Closed') return [];
    const [openHour, openMinute] = availability.split(' - ')[0].split(':').map(time => parseInt(time, 10));
    const [closeHour, closeMinute] = availability.split(' - ')[1].split(':').map(time => parseInt(time, 10));
  
    const times = [];
  
    let currentHour = openHour;
    let currentMinute = openMinute;
  
    while (currentHour < closeHour || (currentHour === closeHour && currentMinute <= closeMinute)) {
      times.push(
        `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')} - ${(currentHour + 1).toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`
      );
      if (currentHour === closeHour - 1 && currentMinute === closeMinute){
        break;
      }
      currentHour += 1;
    }
  
    return times;
  };

  const timeBlocks = generateTimeBlocks(availability);

  const toggleTimeSelection = (time) => {
    setSelectedTimes((prevSelectedTimes) => {
      if (prevSelectedTimes.includes(time)) {
        return prevSelectedTimes.filter(t => t !== time);
      } else {
        return [...prevSelectedTimes, time];
      }
    });
  };

  useEffect(() => {
    setSelectedDate(new Date());
    setSelectedTimes([]);
  }, [modalIsOpen]);

  return (
    <div className='venue-detail'>
      <div className="venue-detail-container">
        <iframe src={venue.map} className='venue-map'></iframe>
        <div className="container">
          <div className="venue-info">
            <div className="venue-details">
              <p className="venue-name">
                {venue.name}
              </p>
              <button className="book-now-button" onClick={openModal}>Book Now</button>
            </div>
          </div>

          <div className="venue-detail-info">
            <hr />
            <div className="venue-open-time">
              <b><p>Open Time</p></b>
              <table className="open-time-table">
                <tbody>
                  {Object.entries(venue.open_time).map(([day, time]) => (
                    <tr key={day}>
                      <td>{day}</td>
                      <td>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <hr />
            <div className="venue-location">
              <b><p>Location</p></b>
              <p className="location">
                {venue.location}
              </p>
            </div>
            <hr />
            <div className="venue-contact">
              <b><p>Contact</p></b>
              <p className="contact">
                {venue.contact}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Book Now"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <button className="close-modal-button" onClick={closeModal}>×</button>
        <h2>Book Now</h2>
        <div className="modal-content">
          <div className="calendar-container">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              onMonthChange={handleMonthChange}
              inline
            />
          </div>
          <div className="availability-info">
            {selectedDate && (
              <div className="selected-date">
                <p className="day-name">{getDayName(selectedDate)}</p>
                <p className="full-date">{formatDate(selectedDate)}</p>
              </div>
            )}
            {availability === 'Closed' ? (
              <p className="closed">Closed</p>
            ) : (
              <div className="available">
                <p className='open'>Open</p>
                <div className="time-blocks">
                  {timeBlocks.map(time => (
                    <div
                      key={time}
                      className={`time-block ${selectedTimes.includes(time) ? 'selected' : ''}`}
                      onClick={() => toggleTimeSelection(time)}
                    >
                      {time}
                    </div>
                  ))}
                </div>
                <button className="modal-book-button" onClick={() => console.log('Booked times:', selectedTimes)}>Book</button>
              </div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
}

function getOpenStatus(openTime) {
  const days = Object.keys(openTime);
  return days.map(day => [day, openTime[day]]);
}