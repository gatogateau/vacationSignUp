// Make sure we wait to attach our handlers until the DOM is fully loaded.


// $(document).ready(function() {
//   $(".eat").on("submit", function(event) {
//     var id = $(this).data("id");
//     $.ajax("burgers/update/{{this.id}}")
//   });




$(function() {
    $(".eatMe").on("click", function(event) {
      var id = $(this).data("id");
      var newSleep = $(this).data("newsleep");
  
      var newSleepState = {
        sleepy: newSleep
      };
  
      // Send the PUT request.
      $.ajax("/api/cats/" + id, {
        type: "PUT",
        data: newSleepState
      }).then(
        function() {
          console.log("changed sleep to", newSleep);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
//     $("#create-form").on("submit", function(event) {
//       // Make sure to preventDefault on a submit event.
//       event.preventDefault();
//   alert();

//       var newBurger = {
//         burgerName: $("#addABurger").val().trim(),
//         Devoured: false
//       };
  
//       // Send the POST request.
//       $.ajax("/burgers/create", {
//         type: "POST",
//         data: newBurger
//       }).then(
//         function() {
//           console.log("added new burger");
//           // Reload the page to get the updated list
//         //   location.reload();
//         }
//       );
//     });
  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/cats/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });