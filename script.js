let form = document.querySelector(".reservation-form");

if (form) {

    form.onsubmit = function (event) {

        event.preventDefault();

        let name = form.name.value;
        let email = form.email.value;
        let phone = form.phone.value;
        let date = form.date.value;
        let time = form.time.value;
        let guests = form.guests.value;
        let requests = form.requests.value;

        if (
            name == "" ||
            email == "" ||
            phone == "" ||
            date == "" ||
            time == "" ||
            guests == ""
        ) {

            document.getElementById("message").innerHTML =
            "<h2>Reservation Failed</h2>" +
            "<p>Please fill in all the required fields.</p>";

            return;

        }

        let answer = confirm("Do you want to confirm this reservation?");

        if (answer) {

            document.getElementById("message").innerHTML =

            "<h2>Reservation Received!</h2>" +

            "<p>Thank you <strong>" + name + "</strong>.</p>" +

            "<p>Your reservation request has been received successfully.</p>" +

            "<p><strong>Date:</strong> " + date + "</p>" +

            "<p><strong>Time:</strong> " + time + "</p>" +

            "<p><strong>Guests:</strong> " + guests + "</p>" +

            "<p><strong>Phone:</strong> " + phone + "</p>" +

            "<p><strong>Email:</strong> " + email + "</p>" +

            "<p><strong>Special Requests:</strong> " + requests + "</p>" +

            "<p>Our staff will contact you shortly to confirm your reservation.</p>";

            form.reset();

        }

        else {

            document.getElementById("message").innerHTML =

            "<h2>Reservation Cancelled</h2>" +

            "<p>Your reservation was not submitted.</p>";

        }

    };

}


    let topButton = document.querySelector(".topbutton");

if (topButton) {

    topButton.onclick = function () {

        window.scrollTo({

            top: 0,
            behavior: "smooth"

        });

    };

}
