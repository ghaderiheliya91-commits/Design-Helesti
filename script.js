// اسکرول نرم برای لینک‌های منو
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// دکمه بازگشت به بالا

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.left = "25px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#c89b3c";
topBtn.style.color = "white";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.2)";
topBtn.style.transition = ".3s";

window.addEventListener("scroll",()=>{

    if(window.scrollY>350){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};

// ظاهر شدن بخش‌ها هنگام اسکرول

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    section.style.opacity="0";

    section.style.transform="translateY(40px)";

    section.style.transition=".8s";

    observer.observe(section);

});

// انیمیشن کارت‌های خدمات

const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.style.animation=`fadeUp .6s ease ${index*0.15}s forwards`;

});

// افکت روی گالری

const photos = document.querySelectorAll(".photo");

photos.forEach(photo=>{

    photo.addEventListener("mouseenter",()=>{

        photo.style.transform="scale(1.05)";

    });

    photo.addEventListener("mouseleave",()=>{

        photo.style.transform="scale(1)";

    });

});

// نمایش سال جاری در فوتر

const footer = document.querySelector("footer p");

const year = new Date().getFullYear();

footer.innerHTML = `© ${year} Design Helesti`;
