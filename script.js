const d = document.getElementById("days"),
      h = document.getElementById("hours"),
      m = document.getElementById("minutes"),
      s = document.getElementById("seconds");

const bg = document.getElementById("background"),
      c = document.getElementById("countdownContainer"),
      t = document.querySelector(".countdown-text"),
      st = document.getElementById("status");

function eoy() {
    const n = new Date();
    return new Date(n.getFullYear(), 11, 31, 23, 59, 59);
}

function onNewYear() {
    bg.classList.add("new-year-bg");
    c.classList.add("new-year-container");
    t.classList.add("new-year-text");
    st.textContent = "Year complete.";
    createConfetti();
    createFireworks();
    /*
    setTimeout(() => {
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
        iframe.width = '1104';
        iframe.height = '621';
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;
        iframe.style.position = 'fixed';
        iframe.style.top = '50%';
        iframe.style.left = '50%';
        iframe.style.transform = 'translate(-50%, -50%)';
        iframe.style.zIndex = '1000';
        document.body.appendChild(iframe);
    }, 5000);
    */
    setTimeout(() => {
        window.location.href = '/r/rick.mp4';
    }, 5000);
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.body.appendChild(confetti);
        setTimeout(() => confetti.remove(), 5000);
    }
}

function createFireworks() {
    for (let i = 0; i < 5; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + 'vw';
        firework.style.top = Math.random() * 50 + 'vh';
        firework.style.animationDelay = Math.random() * 2 + 's';
        document.body.appendChild(firework);
        setTimeout(() => firework.remove(), 3000);
    }
}

function u() {
    const n = new Date(),
          diff = eoy() - n;

    if (diff <= 0) {
        d.textContent = h.textContent = m.textContent = s.textContent = "00";
        if (n.getFullYear() >= 2026) onNewYear();
        running = false;
        return;
    }

    d.textContent = String(Math.floor(diff / 864e5)).padStart(2, "0");
    h.textContent = String(Math.floor(diff / 36e5) % 24).padStart(2, "0");
    m.textContent = String(Math.floor(diff / 6e4) % 60).padStart(2, "0");
    s.textContent = String(Math.floor(diff / 1e3) % 60).padStart(2, "0");
}

let running = true;
let lastTime = 0;

function loop(currentTime) {
    if (!running) return;
    if (currentTime - lastTime >= 1000) {
        u();
        lastTime = currentTime;
    }
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
