// executes as soon as its loaded
document.addEventListener('DOMContentLoaded', () => {
    const gearRentalForm = document.getElementById('gear-rental-form');
  
    gearRentalForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const gearType = document.getElementById('gear-type').value;
      const rentalDuration = document.getElementById('duration').value;
  
      if (!rentalDuration || rentalDuration <= 0) {
        alert('Please provide a valid rental duration!');
        return;
      }
  
      alert(`You have successfully rented the ${gearType} for ${rentalDuration} day(s).`);
  
      gearRentalForm.reset();
    });
  
    const rentButtons = document.querySelectorAll('.rent-btn');
    rentButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const gear = e.target.closest('.gear-item');
        const gearName = gear.querySelector('h3').textContent;
        alert(`You have selected the ${gearName} for rental. Please confirm your rental details below.`);
      });
    });
  });
  
