$(document).ready(function() {
  // page is now ready, initialize the calendar...

  $.get('api/calendar').then(function(response){
    console.log(response);
    $('#calendar').fullCalendar({
      events: [
       // {
       //   title: response[0].name,
       //   start: response[0].date_time
        
       // }
       {	
        title  : 'event3',	
        start  : '2019-01-09T07:30:00',	
        allDay : false // will make the time show	
      },
      {	
        title  : 'event4',	
        start  : '2019-01-14T12:30:00',	
        allDay : true  // will make the time show	
      }
      ]
    });
  });
  
 
});
