// initial execution upon load
document.addEventListener('DOMContentLoaded', () => {
  const roomBookingForm = document.getElementById('room-booking-form');
  
  roomBookingForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const roomType = document.getElementById('room-type').value;
    const bookingDate = document.getElementById('date').value;
    const bookingTime = document.getElementById('time').value;

    if (!bookingDate || !bookingTime) {
      alert('Please fill in all fields!');
      return;
    }

    alert(`You have successfully booked the ${roomType} for ${bookingDate} at ${bookingTime}.`);

    roomBookingForm.reset();
  });

  // Handle room selection click event
  const bookButtons = document.querySelectorAll('.book-btn');
  bookButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const room = e.target.closest('.room');
      const roomName = room.querySelector('h3').textContent;
      alert(`You have selected the ${roomName} room. Please confirm your booking details below.`);
    });
  });
});
