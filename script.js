// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
  
    if(window.scrollY > 50){
      nav.style.background = "rgba(0,0,0,0.8)";
    } else {
      nav.style.background = "rgba(0,0,0,0.4)";
    }
  });
  
  // smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener("click", e=>{
      e.preventDefault();
      document.querySelector(link.getAttribute("href"))
        .scrollIntoView({behavior:"smooth"});
    });
  });