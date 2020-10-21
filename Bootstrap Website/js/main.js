
// CLOSE NAV ICON

   window.addEventListener("scroll",function(){
       var x = document.querySelector(".start-icon");
       x.classList.toggle("close-icon", window.scrollY > 50);
   });
 
   window.addEventListener("scroll",function(){
       var x = document.querySelector(".start2-icon");
       x.classList.toggle("close2-icon", window.scrollY > 50);
   });
 
 
   window.addEventListener("scroll",function(){
       var x = document.querySelector(".start3-icon");
       x.classList.toggle("close3-icon", window.scrollY > 50);
   });
   
// CLOSE NAV BORDER

   window.addEventListener("scroll",function(){
       var x = document.querySelector(".navbar");
       x.classList.toggle("my-nav-border", window.scrollY > 50);
   });

// CLOSE SUBMENE WHEN SCROLL DOWN
   window.addEventListener("scroll",function(){
       var x = document.querySelector(".subMenu");
       x.classList.toggle("closeMenu", window.scrollY > 50);
   });
 
   window.addEventListener("scroll",function(){
       var x = document.querySelector(".mysubMenu");
       x.classList.toggle("closeMenu2", window.scrollY > 50);
   });
 