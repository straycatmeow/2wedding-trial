// OPEN INVITATION
function openInvite() {
  document.getElementById("cover").style.display = "none";
  document.getElementById("main").style.display = "block";

  document.getElementById("music").play();

  revealSections();
}

// ANIMASI
function revealSections() {
  const sections = document.querySelectorAll('.section');

  sections.forEach((sec, i) => {
    setTimeout(() => {
      sec.classList.add('show');
    }, i * 300);
  });
}

// COUNTDOWN
const eventDate = new Date("Dec 12, 2026 10:00:00").getTime();

setInterval(function() {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);

  document.getElementById("countdown").innerHTML =
    days + " Hari " + hours + " Jam Lagi";
}, 1000);

// NAMA TAMU
const params = new URLSearchParams(window.location.search);
const name = params.get("to");

if (name) {
  document.getElementById("guestName").innerText = name;
}
