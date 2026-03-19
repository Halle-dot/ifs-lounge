
const form = document.getElementById("bookingForm");
const scriptURL = "https://script.google.com/macros/s/AKhttps://script.google.com/macros/s/AKfycbx9_p1pw-jDIPtzio_8FqgVQq7S6i8sCW_hMuove2xW-ilSkU9exM5WslxvwsOwFJvGRA/execfycbzbUPT-dWsSNhttps://script.google.com/macros/s/AKfycbzX1ALpqcoPnckuc8i-DF50k_FR-MLJfWEK3D0ZW8cCOTqdSkRh-mzFLu3pYWRosvvRUg/execwNkCsR-3fKJIYpy0pMOviJxCGnh7qvyEY4Ox-QtM26uPhedpNb3rRtBWw/exec";
const businessNumber = "26878729132"; 

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const bookingData = {
    name: document.getElementById("name").value.trim(),
    phone: document.getElementById("phone").value.trim(),
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
    guests: document.getElementById("guests").value,
    notes: document.getElementById("notes").value.trim()
  }});

fetch(scriptURL, {
  method: "POST",
  body: JSON.stringify(bookingData)
})
.then(res => res.text()) // 👈 CHANGE THIS
.then(response => {

  // Always open WhatsApp after submission attempt
  const message =
`🍾 IF's Lounge Reservation

Name: ${bookingData.name}
Phone: ${bookingData.phone}
Date: ${bookingData.date}
Time: ${bookingData.time}
Guests: ${bookingData.guests}
Notes: ${bookingData.notes || "None"}`;

  const whatsappURL =
`https://wa.me/${businessNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");

  alert("Reservation submitted! ✨");
  form.reset();

})
.catch(error => {
  console.error("Fetch Error:", error);
  alert("Connection error. Check deployment settings.");
});
