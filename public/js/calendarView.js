$(document).ready(function() {
  $.get("/api/calendarview").then(function(data) {
    $(".dateinfo").text(data.activity_name);
  });
});
