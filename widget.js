/*
 * Telegram-бот виджет для сайта.
 * Использование на Tilda/Wix/любом сайте:
 *
 * <script
 *   src="http://72.56.236.144:8080/widget.js"
 *   data-bot="YourBotUsername"
 *   data-text="Напишите нам в Telegram"
 *   data-color="#0088cc">
 * </script>
 */
(function () {
  var script = document.currentScript;
  var botUsername = script.getAttribute("data-bot") || "";
  var buttonText = script.getAttribute("data-text") || "Написать в Telegram";
  var color = script.getAttribute("data-color") || "#0088cc";

  if (!botUsername) {
    console.warn("[tg-widget] Не указан data-bot — виджет не будет работать");
    return;
  }

  var btn = document.createElement("div");
  btn.innerHTML =
    '<svg width="28" height="28" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<circle cx="120" cy="120" r="120" fill="white" fill-opacity="0.15"/>' +
    '<path d="M180 72L159 175c-1.6 7.2-5.8 9-11.8 5.6l-32.6-24-15.7 15.1c-1.7 1.7-3.2 3.2-6.5 3.2l2.3-33 60-54.2c2.6-2.3-.6-3.6-4-1.3l-74.2 46.7-32-10c-7-2.2-7.1-7 1.5-10.3l125-48.2c5.8-2.1 10.9 1.4 9 10.4z" fill="white"/>' +
    "</svg>";
  btn.setAttribute("aria-label", buttonText);
  btn.title = buttonText;

  Object.assign(btn.style, {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: color,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
    zIndex: 999999,
    transition: "transform 0.2s ease",
  });

  btn.onmouseenter = function () {
    btn.style.transform = "scale(1.08)";
  };
  btn.onmouseleave = function () {
    btn.style.transform = "scale(1)";
  };
  btn.onclick = function () {
    window.open("https://t.me/" + botUsername, "_blank");
  };

  document.body.appendChild(btn);
})();
