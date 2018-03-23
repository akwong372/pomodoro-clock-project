$(document).ready(function (){
  
    var workTimeMin = Number($('#workTimeMin').text());
    var workTimeSec = Number($('#workTimeSec').text());
    var breakTimeMin = Number($('#breakTimeMin').text());
    var breakTimeSec = Number($('#breakTimeSec').text());
    
    let savedWorkTimeMin = Number($('#workTimeMin').text());
    let savedWorkTimeSec = Number($('#workTimeSec').text());
    let savedBreakTimeMin = Number($('#breakTimeMin').text());
    let savedBreakTimeSec = Number($('#breakTimeSec').text());
    
    var doneSound = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3');
    var timer 
  
      $('#workTimeStart').click(function (){
      if ($('#workTimeStart').text() === 'Start'){
        $('#workTimeStart').text('Stop');
        timer = setInterval(function (){  
          
         //count down work time
          
      if (workTimeSec >= 0){
        workTimeSec--;
        $('#workTimeSec').text(workTimeSec);
        
         if (workTimeSec <10){
           $('#workTimeSec').text('0'+workTimeSec);
         }
        
         if (workTimeMin >0 && workTimeSec === -1){
           workTimeMin--;
           workTimeSec = 59;
           $('#workTimeSec').text(workTimeSec);
           $('#workTimeMin').text(workTimeMin);
         }
        
          if (workTimeMin === 0 && workTimeSec === -1){
           $('#workTimeSec').text('00');
            doneSound.play();
          }
        
      //count down break time
        
      } else if (workTimeSec === -1 && breakTimeSec >= 0){
        breakTimeSec--;
        $('#breakTimeSec').text(breakTimeSec);
        
        if (breakTimeSec <10){
           $('#breakTimeSec').text('0'+breakTimeSec);
         }
        
         if (breakTimeMin >0 && breakTimeSec === -1){
           breakTimeMin--;
           breakTimeSec = 59;
           $('#breakTimeSec').text(breakTimeSec);
           $('#breakTimeMin').text(breakTimeMin);
         }
        
          if (breakTimeMin === 0 && breakTimeSec === -1){
           $('#breakTimeSec').text('00');
           doneSound.play();
           alert('Time\'\s up, yo.');
          }
        
      }
    }, 1000); //end of timer function
        
        
      } else {
        $('#workTimeStart').text('Start');
        clearInterval(timer);
      }
    });
    
  
      $('#workTimeReset').click(function (){
          $('#workTimeMin').text(savedWorkTimeMin);
          $('#workTimeSec').text(savedWorkTimeSec);
          $('#breakTimeMin').text(savedBreakTimeMin);
          $('#breakTimeSec').text(savedBreakTimeSec);
          workTimeMin = savedWorkTimeMin;
          workTimeSec = savedWorkTimeSec;
          breakTimeMin = savedBreakTimeMin;
          breakTimeSec = savedBreakTimeSec; 
          clearInterval(timer);
          $('#workTimeStart').text('Start');
          if (savedWorkTimeSec === 0){
            $('#workTimeSec').text('0'+savedWorkTimeSec);
          }
           if (savedBreakTimeSec === 0){
            $('#breakTimeSec').text('0'+savedBreakTimeSec);
        }
    });
    
     $('#workTimeAdd').click(function (){
       workTimeMin++;
       savedWorkTimeMin++;
       $('#workTimeMin').text(savedWorkTimeMin);
     });
    
     $('#workTimeSub').click(function (){
       if(workTimeMin !== 0 && savedWorkTimeMin !== 0){ 
         workTimeMin--;
         savedWorkTimeMin--;
         $('#workTimeMin').text(savedWorkTimeMin);
       }
     });
    
    $('#breakTimeAdd').click(function (){
       breakTimeMin++;
       savedBreakTimeMin++;
       $('#breakTimeMin').text(savedBreakTimeMin);
     });
    
     $('#breakTimeSub').click(function (){
       if(breakTimeMin !== 0 && savedBreakTimeMin !== 0){ 
         breakTimeMin--;
         savedBreakTimeMin--;
         $('#breakTimeMin').text(savedBreakTimeMin);
       }
     });
     
  });