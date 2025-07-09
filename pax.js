const entries = document.querySelectorAll('.entry');
let currentPage = 0;

function showPage(index) {
  entries.forEach((entry, i) => {
    entry.classList.toggle('active', i === index);
  });
  document.getElementById('prevBtn').disabled = index === 0;
  document.getElementById('nextBtn').disabled = index === entries.length - 1;
}

function nextPage() {
  if (currentPage < entries.length - 1) {
    currentPage++;
    showPage(currentPage);
    playEffect();
  }
}

function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
    playEffect();
  }
}

function startMusic() {
  const player = document.getElementById("ytplayer");
  player.src = "https://github.com/face12345678/PAX/blob/main/aspose_audio_compress_133964643388028668.mp3";
  player.style.width = "560px";
  player.style.height = "315px";
  player.style.visibility = "visible";
}


function playEffect() {
  document.getElementById("clickSound").play();
}

showPage(currentPage);

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 2) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 400);
