import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders booking form", () => {
  render(<BookingForm onSubmit={() => {}} />);
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
});

test("submits form data", () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "John Doe" } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "john@example.com" } });
  fireEvent.click(screen.getByText(/book now/i));

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
