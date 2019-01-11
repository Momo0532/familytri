$(document).ready(function() {
  // page is now ready, initialize the calendar...

  $.get('api/calendar').then(function(response){
    console.log(response);
    $('#calendar').fullCalendar({
      events: [
        {
          title: response[0].name,
          start: response[0].date_time
        
        }
      ]
    });
  });
  
 
});
