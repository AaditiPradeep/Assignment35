class Form {
    constructor() {
      
    }
  
    display(){
      var question1 = createElement('h3')
      question1.html("Do you prefer online school claases?");
      question1.position(700,100);
      
      var input = createInput("Email Id");
      var yesButton = createButton('YES');
      var noButton = createButton('NO');
      
      input.position(720, 180);
      yesButton.position(720,250);
      noButton.position(720,300);
  
       yesButton.mousePressed(function(){
        input.hide();
        yesButton.hide();
        noButton.hide();        
  
        var email = input.value();
        
        votersCount+=1;
        voter.update(email)
        voter.updateCount(votersCount);
        voter.updateAnswer('yes');

        var greeting = createElement('h3');
        greeting.html("Thank you" );
        greeting.position(780,250)
       })
       
         noButton.mousePressed(function(){
          input.hide();
          yesButton.hide();
          noButton.hide();
          
          var email = input.value();
          
          votersCount+=1;
          voter.update(email)
          voter.updateCount(votersCount);
          voter.updateAnswer('no');
           
          var greeting = createElement('h3');
          greeting.html("Thank you" );
          greeting.position(780,250)
       })
      
        
        
     
  
    
  }
}
    
  
