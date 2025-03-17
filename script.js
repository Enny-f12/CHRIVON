const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click" , () =>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click"
, () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}
))




const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }

    });
});
const hiddenElements = document.querySelectorAll('.hidden, .overflow, .icon');
hiddenElements.forEach((el) => observer.observe(el));



//document.addEventListener("DOMContentLoaded" , () => {
   // const textElement = document.querySelector(".moving-text");

   // setTimeout(() => {
   //     textElement.textContent = "Impact,";
   // }, 1000 );
//});

const words = [ "impact" , "scale,"];
        let index = 0;
        const wordElement = document.querySelector(".moving-text");

        function changeWord() {
            setTimeout(() => {
                wordElement.textContent = words[index];
                index = (index + 1) % words.length;
            }, 1000); // Change word after it moves up
        }

        setInterval(changeWord, 2000); // Change every 2 seconds