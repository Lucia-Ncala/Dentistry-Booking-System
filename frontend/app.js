const form = document.getElementById("bookingForm");
const message = document.getElementById("message");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const bookingData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    service: document.getElementById("service").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    notes: document.getElementById("notes").value,
  };

  console.log(bookingData);

  message.innerText = "Booking submitted!";
});