Meteor.startup(function(){

  if(window.navigator.standalone) {
    // Adjusts body height so the chat input follows the keyboard. Only works when the site is saved to home screen
    let oldWindowHeight = window.innerHeight;
    window.setInterval(function(){
      if(oldWindowHeight !== window.innerHeight) {
        $('body, html').css('height', `${window.innerHeight}px`);
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
      }
      oldWindowHeight = window.innerHeight;
    }, 500);
  } else {
    // Scrolls to bottom on chat input focus
    $('body').delegate('input', 'focus', function(){
      console.log("focus");

      window.setTimeout(function(){
        window.scrollTo(0, window.innerHeight);
      }, 1000);
    });
  }

});
