$(document).ready(function () {
    $(".eat").on("click", function () {
        var id = $(this).data("id");
        var burgerState = {
            devoured: true
        };

        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: burgerState
        }).then(function () {
            console.log("burger updated");
            location.reload();
        });
    });

    $("#done").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            name: $("#add-burger").val().trim()
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("burger created");
            location.reload();
        });
    });
});


