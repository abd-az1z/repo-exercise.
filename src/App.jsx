import React, { useState } from "react";
import BookingForm from "./components/BookingForm";

function App() {
  const [bookings, setBookings] = useState([]);

  const handleBooking = (data) => {
    setBookings((prev) => [...prev, data]);
    alert("Booking confirmed!");
  };

  return (
    <div>
      <h1>Little Lemon Table Booking</h1>
      <BookingForm onSubmit={handleBooking} />
      <h2>Current Bookings</h2>
      <ul>
        {bookings.map((booking, index) => (
          <li key={index}>
            {booking.name} - {booking.date} at {booking.time}, {booking.guests} guests
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
