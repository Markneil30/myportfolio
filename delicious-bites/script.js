// ================= RESERVATION =================

const reservationForm = document.querySelector(".reservation form");

reservationForm.addEventListener("submit", function(event) {

    // Stop page refresh
    event.preventDefault();

    // Get form values
    const name = reservationForm.querySelector(
        'input[type="text"]'
    ).value;

    const date = reservationForm.querySelector(
        'input[type="date"]'
    ).value;

    const time = reservationForm.querySelector(
        'input[type="time"]'
    ).value;

    const guests = reservationForm.querySelector(
        'input[type="number"]'
    ).value;


    // Show confirmation
    alert(
        "✅ Reservation Confirmed!\n\n" +
        "Thank you, " + name + "!\n\n" +
        "👥 Guests: " + guests + "\n" +
        "📅 Date: " + date + "\n" +
        "🕒 Time: " + time + "\n\n" +
        "We look forward to seeing you at Delicious Bites!"
    );


    // Clear form
    reservationForm.reset();

});