var msg  = document.title;
      var speed = 150;
      var pos = 0;
      
      function moveTitle()
      {
       	var ml = msg.length;
      		
      	title = msg.substr(pos,ml) + " " + msg.substr(0,pos);
    	document.title = title;
      	
        pos++;
    	if (pos > ml) pos=0;
        window.setTimeout("moveTitle()",speed);
      }
  
      moveTitle();
