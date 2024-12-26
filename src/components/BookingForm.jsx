import React from "react";
import { useForm } from "react-hook-form";

function BookingForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log("Form Data:", data);
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      <div>
        <label htmlFor="date">Booking Date</label>
        <input
          type="date"
          id="date"
          {...register("date", { required: "Date is required" })}
        />
        {errors.date && <span>{errors.date.message}</span>}
      </div>

      <div>
        <label htmlFor="time">Time</label>
        <select id="time" {...register("time", { required: "Time is required" })}>
          <option value="">Select a time</option>
          <option value="6:00 PM">6:00 PM</option>
          <option value="7:00 PM">7:00 PM</option>
          <option value="8:00 PM">8:00 PM</option>
        </select>
        {errors.time && <span>{errors.time.message}</span>}
      </div>

      <div>
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          {...register("guests", {
            required: "Number of guests is required",
            min: 1,
            max: 10,
          })}
        />
        {errors.guests && <span>{errors.guests.message}</span>}
      </div>

      <button type="submit">Book Now</button>
    </form>
  );
}

export default BookingForm;
