const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

    var typed = new Typed("#word", {
      strings: ["Manager", "Specialist", "Strategist", "Creator"],
      typeSpeed: 80,          // سرعة الكتابة
      backSpeed: 80,          // سرعة المسح (نفس سرعة الكتابة)
      backDelay: 1500,        // انتظار قبل المسح
      startDelay: 500,        // انتظار قبل أول كتابة
      smartBackspace: false,  // مسح الكلمة بالكامل حرف حرف
      loop: true             
    });


