// ===== Canvas Background =====
const canvas = document.getElementById("bg");
if (canvas) {
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = [];
    const count = 120;

    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2 + 0.5,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3
        });
    }

    let t = 0;

    function animate() {
        t += 0.002;

        // background gradient
        const g = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        g.addColorStop(0, "#0b0d12");
        g.addColorStop(1, "#141824");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // particles
        ctx.fillStyle = "rgba(255,255,255,0.6)";
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();
        });

        // soft glow waves
        ctx.fillStyle = "rgba(120,160,255,0.08)";
        ctx.beginPath();
        ctx.arc(
            canvas.width * 0.5 + Math.sin(t) * 200,
            canvas.height * 0.5 + Math.cos(t) * 150,
            500,
            0,
            Math.PI * 2
        );
        ctx.fill();

        requestAnimationFrame(animate);
    }

    animate();
}


const words = [
    "Web Developer",
    "Front-End Developer",
    "Back-End Developer",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const speed = 100;
const delayBetweenWords = 1200;

const typingElement = document.getElementById("typing");

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent = currentWord.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, delayBetweenWords);
        }
    }
    else {
        typingElement.textContent = currentWord.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, isDeleting ? speed / 3 : speed);
}

typeEffect();














// gsap.registerPlugin(ScrollTrigger);

// حركة أول ما تحمل الصفحة - Header
// gsap.from("#Home .contant h1", {
//   y: -80,
//   opacity: 0,
//   scale: 0.8,
//   duration: 1,
//   ease: "power4.out"
// });

// gsap.from("#Home .contant p, #Home .Words", {
//   y: 40,
//   opacity: 0,
//   scale: 0.9,
//   duration: 1,
//   delay: 0.5,
//   stagger: 0.3,
//   ease: "power3.out"
// });

// gsap.from("#Home .img-box img", {
//   scale: 0,
//   rotation: -20,
//   opacity: 0,
//   duration: 1.5,
//   delay: 1,
//   ease: "back.out(1.7)"
// });

// // حركة كل العناصر اللي عندها كلاس Move عند scroll
// gsap.utils.toArray(".Move").forEach((elem, index) => {
//   gsap.from(elem, {
//     scrollTrigger: {
//       trigger: elem,
//       start: "top 85%",
//       toggleActions: "play none none none"
//     },
//     y: 80,
//     x: (index % 2 === 0 ? -100 : 100), // الحركة يمين ويسار
//     opacity: 0,
//     scale: 0.8,
//     rotation: (index % 2 === 0 ? -5 : 5), // دوران خفيف
//     duration: 1.2,
//     ease: "power4.out",
//     stagger: 0.2
//   });
// });

// // Badges effect
// gsap.utils.toArray(".about-badges .badge").forEach(badge => {
//   badge.addEventListener("mouseenter", () => {
//     gsap.to(badge, { scale: 1.2, rotation: 5, duration: 0.3, ease: "power1.out" });
//   });
//   badge.addEventListener("mouseleave", () => {
//     gsap.to(badge, { scale: 1, rotation: 0, duration: 0.3, ease: "power1.out" });
//   });
// });

// // Skills & Tools Items
// gsap.utils.toArray(".Skills .item, .tools .item").forEach(item => {
//   gsap.from(item, {
//     scrollTrigger: {
//       trigger: item,
//       start: "top 90%",
//       toggleActions: "play none none none"
//     },
//     y: 50,
//     opacity: 0,
//     scale: 0.8,
//     rotation: -5,
//     duration: 1,
//     ease: "power3.out",
//     stagger: 0.15
//   });
// });



// gsap.registerPlugin(ScrollTrigger);

// // كل عناصر Move
// const moveElems = gsap.utils.toArray(".Move");

// // initial staggered fly-in
// gsap.from(moveElems, {
//   y: 50,
//   opacity: 0,
//   scale: 0.8,
//   rotation: () => gsap.utils.random(-10,10),
//   duration: 1,
//   ease: "power4.out",
//   stagger: 0.15
// });

// // interaction with mouse movement
// document.addEventListener("mousemove", e => {
//   const centerX = window.innerWidth / 2;
//   const centerY = window.innerHeight / 2;
//   const offsetX = (e.clientX - centerX) / centerX; // -1 .. 1
//   const offsetY = (e.clientY - centerY) / centerY; // -1 .. 1

//   moveElems.forEach((el, i) => {
//     const movement = 20 + i * 2; // كل عنصر يتحرك بشكل مختلف
//     gsap.to(el, {
//       x: offsetX * movement,
//       y: offsetY * movement,
//       rotation: offsetX * 10,
//       duration: 0.8,
//       ease: "power3.out"
//     });
//   });
// });

// // Animate on scroll for other elements
// gsap.utils.toArray(".About, .Skills, .tools, .contact-header, .contact .form").forEach(section => {
//   gsap.from(section, {
//     scrollTrigger: {
//       trigger: section,
//       start: "top 80%",
//       toggleActions: "play none none none"
//     },
//     y: 50,
//     opacity: 0,
//     duration: 1,
//     ease: "power2.out",
//     stagger: 0.2
//   });
// });




  const langBtn = document.getElementById("langBtn");
  let currentLang = 'en';

  function changeLanguage(lang) {
    const interval = setInterval(() => {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = lang;
        select.dispatchEvent(new Event('change'));
        clearInterval(interval);
      }
    }, 100); // يحاول كل 100ms لحد ما يلاقي select
  }

  langBtn.addEventListener("click", () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    changeLanguage(currentLang);
  });

