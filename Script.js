// ================================
// ظهور الكتابة بعد 3 ثواني
// ================================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.querySelector(".hero").classList.add("show");

    },3000);

});


// ================================
// ظهور الكروت عند النزول
// ================================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

cards.forEach(card=>{

    observer.observe(card);

});


// ================================
// عداد العماد
// ================================

const countdown = document.createElement("div");

countdown.className="countdown";

document.body.appendChild(countdown);

const targetDate = new Date("2026-07-11T19:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate-now;

    if(distance<=0){

        countdown.innerHTML="🎉 اليوم الكبير وصل!";

        return;

    }

    const days=Math.floor(distance/(1000*60*60*24));

    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    countdown.innerHTML=
    "⏳ "+days+" يوم • "+hours+" ساعة • "+minutes+" دقيقة";

}

updateCountdown();

setInterval(updateCountdown,60000);


// ================================
// تشغيل الموسيقى
// ================================

const music=document.getElementById("bgmusic");

document.addEventListener("click",()=>{

    music.play().catch(()=>{});

},{once:true});
