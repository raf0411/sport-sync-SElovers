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

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleDateChange = (date) => setSelectedDate(date);

  const handleMonthChange = (date) => {
    setCurrentMonth(date);
    setSelectedDate(date);
  };

  const getDayName = (date) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }

  const getAvailability = (date) => {
    if (!date) return null;
    const dayName = getDayName(date);
    return venue.open_time[dayName] || 'Closed';
  }

  const availability = getAvailability(selectedDate);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  }

  useEffect(() => {
    setSelectedDate(new Date());
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
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            onMonthChange={handleMonthChange}
            inline
          />
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
                <p>Available</p>
                <p>{availability}</p>
                <button className="modal-book-button">Book Now</button>
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