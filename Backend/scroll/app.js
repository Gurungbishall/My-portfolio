let scriptAppended = null;

function loadScript() {
  const currentWidth = window.innerWidth;
  const src =
    currentWidth <= 991 ? "Backend/scroll/mobile.js" : "Backend/scroll/pc.js";

  if (scriptAppended !== src) {
    document.querySelector(`script[src="${scriptAppended}"]`)?.remove();
    const dynamic_script = document.createElement("script");
    dynamic_script.src = src;
    document.body.append(dynamic_script);
    scriptAppended = src;
  }
}
loadScript();
window.addEventListener("resize", loadScript);
