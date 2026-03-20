
(function () {

  const END_HOUR = 24; //  (24-hour format)
  const END_MINUTE = 0;

  function showMaintenance() {

    // Clear page instantly
    document.body.innerHTML = "";

    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "#111";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "999999";
    overlay.style.fontFamily = "Arial, sans-serif";

    const box = document.createElement("div");
    box.style.background = "#ffffff";
    box.style.padding = "50px";
    box.style.borderRadius = "12px";
    box.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";
    box.style.textAlign = "center";
    box.style.maxWidth = "450px";
    box.style.width = "90%";

    const title = document.createElement("h1");
    title.innerText = "⚙️ Security Maintenance in Progress";
    title.style.fontSize = "26px";
    title.style.marginBottom = "15px";

    const message = document.createElement("p");
    message.innerText = "Our website is temporarily under maintenance.\nService will resume in some time.";
    message.style.whiteSpace = "pre-line";
    message.style.color = "#555";
    message.style.fontSize = "16px";

    const timer = document.createElement("div");
    timer.style.marginTop = "20px";
    timer.style.color = "#888";

    box.appendChild(title);
    box.appendChild(message);
    box.appendChild(timer);
    overlay.appendChild(box);
    document.body.appendChild(overlay);

    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date();
      end.setHours(END_HOUR, END_MINUTE, 0, 0);

      const diff = end - now;

      if (diff <= 0) {
        clearInterval(interval);
        location.reload(); // Site becomes normal automatically at 7 PM
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        timer.innerText = `Resuming in ${hours}h ${minutes}m ${seconds}s`;
      }

    }, 1000);
  }

  showMaintenance();

})();
console.log("Clear");












