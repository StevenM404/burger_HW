$(function() {
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id");

    var newConsume = {
      devoured: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newConsume
    }).then(
      function() {
        console.log(newDevour);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
      devoured: 0
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("Ordered new burger.");
        location.reload();
      }
    );
  });
});
