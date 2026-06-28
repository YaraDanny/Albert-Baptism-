// ظهور العناصر عند النزول

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(80px)";

card.style.transition="1s";

observer.observe(card);

});

// عداد تنازلي

const targetDate = new Date("July 11, 2026 19:00:00").getTime();

const countdown = document.createElement("div");

countdown.style.position="fixed";
countdown.style.top="20px";
countdown.style.left="20px";
countdown.style.background="rgba(255,255,255,.9)";
countdown.style.color="#b8860b";
countdown.style.padding="12px 20px";
countdown.style.borderRadius="15px";
countdown.style.fontWeight="bold";
countdown.style.boxShadow="0 10px 30px rgba(0,0,0,.2)";

document.body.appendChild(countdown);

setInterval(()=>{

const now = new Date().getTime();

const distance = targetDate-now;

const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

countdown.innerHTML =
"⏳ "+days+" يوم و "+hours+" ساعة";

},1000);
