(function () {
  const MAINTENANCE_START_HOUR = 13;
  const MAINTENANCE_START_MINUTE = 0;
  const MAINTENANCE_END_HOUR = 14;
  const MAINTENANCE_END_MINUTE = 30;

  function isMaintenanceTime() {
    const now = new Date();

    const start = new Date();
    start.setHours(MAINTENANCE_START_HOUR, MAINTENANCE_START_MINUTE, 0, 0);

    const end = new Date();
    end.setHours(MAINTENANCE_END_HOUR, MAINTENANCE_END_MINUTE, 0, 0);

    return now >= start && now <= end;
  }

  function createMaintenancePopup() {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "linear-gradient(135deg, #141e30, #243b55)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "999999";
    overlay.style.fontFamily = "Arial, sans-serif";

    const box = document.createElement("div");
    box.style.background = "#ffffff";
    box.style.padding = "50px";
    box.style.borderRadius = "14px";
    box.style.boxShadow = "0 25px 70px rgba(0,0,0,0.45)";
    box.style.textAlign = "center";
    box.style.maxWidth = "420px";
    box.style.width = "90%";

    const title = document.createElement("h1");
    title.innerText = "🚧 Scheduled Maintenance";
    title.style.marginBottom = "15px";
    title.style.fontSize = "26px";
    title.style.color = "#222";

    const message = document.createElement("p");
    message.innerText =
      "We’re upgrading our systems.\nService will resume at 1:30 PM.";
    message.style.fontSize = "16px";
    message.style.color = "#555";
    message.style.whiteSpace = "pre-line";
    message.style.lineHeight = "1.6";

    const timer = document.createElement("div");
    timer.style.marginTop = "20px";
    timer.style.fontSize = "14px";
    timer.style.color = "#777";

    box.appendChild(title);
    box.appendChild(message);
    box.appendChild(timer);
    overlay.appendChild(box);
    document.body.appendChild(overlay);

    const interval = setInterval(() => {
      const now = new Date();
      const end = new Date();
      end.setHours(MAINTENANCE_END_HOUR, MAINTENANCE_END_MINUTE, 0, 0);

      const diff = end - now;

      if (diff <= 0) {
        clearInterval(interval);
        location.reload();
      } else {
        const minutes = Math.floor(diff / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        timer.innerText = `Resuming in ${minutes}m ${seconds}s`;
      }
    }, 1000);
  }

  function init() {
    if (isMaintenanceTime()) {
      document.documentElement.style.overflow = "hidden";
      createMaintenancePopup();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

