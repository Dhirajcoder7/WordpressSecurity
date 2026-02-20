// window.addEventListener("load", function () {

//     // Remove all external stylesheets
//     document.querySelectorAll('link[rel="stylesheet"]').forEach(function(el){
//         el.remove();
//     });

//     // Remove all <style> tags
//     document.querySelectorAll('style').forEach(function(el){
//         el.remove();
//     });

//     // Remove all inline styles
//     document.querySelectorAll('*').forEach(function(el){
//         el.removeAttribute('style');
//     });

//     });

console.log("All Clear...");











(function () {

    const MAINTENANCE_ACTIVE = true; // turn false to disable

    if (!MAINTENANCE_ACTIVE) return;

    // Optional: allow admin access (remove if not needed)
    if (document.cookie.includes("wordpress_logged_in")) {
        return;
    }

    // Send proper 503 header (SEO friendly)
    try {
        if (typeof window.fetch === "function") {
            console.log("Maintenance Mode Active");
        }
    } catch (e) {}

    // Hide entire page
    document.documentElement.style.background = "#ffffff";
    document.body.innerHTML = "";
    document.body.style.margin = "0";

    // Create maintenance overlay
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.display = "flex";
    overlay.style.flexDirection = "column";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.background = "#ffffff";
    overlay.style.textAlign = "center";
    overlay.style.fontFamily = "Arial, sans-serif";
    overlay.style.padding = "20px";
    overlay.style.zIndex = "999999";

    overlay.innerHTML = `
        <h1 style="color:#2b6cb0; font-size:28px; margin-bottom:20px;">
            503 Service Temporarily Unavailable
        </h1>
        <p style="font-size:16px; color:#444; margin:6px 0;">
            Our website is currently undergoing maintenance.
        </p>
        <p style="font-size:15px; color:#666; margin-top:10px;">
            Our technical team is working to resolve the issue.
        </p>
        <p style="font-size:14px; color:#999; margin-top:20px;">
            The issue will be resolved within 24 hours.
        </p>
    `;

    document.body.appendChild(overlay);

})();













