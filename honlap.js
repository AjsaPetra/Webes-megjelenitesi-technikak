const images = document.querySelectorAll(".borito");

let i = 0;

setInterval(function(){ 

    if(i == 0) { images[i].style.display = 'block'; }
    else if(i == images.length ) {
      images[i - 1].style.display = 'none';
      images[0].style.display = 'block';
      i = 0; }
    else {
      images[i - 1].style.display = 'none';
      images[i].style.display = 'block';}
    
   i++;
   
  }, 3000);

