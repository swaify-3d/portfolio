function showPortfolio() {
  alert("Redirecting to portfolio... (Not implemented yet)");
}

function displayTerminalInfo() {
  const output = document.getElementById("output");
  const btn = document.getElementById("enterBtn");

  const lines = [
    "Initializing...",
    "Connecting to terminal...",
    `IP Address: 192.168.1.${Math.floor(Math.random() * 255)}`,
    `Browser: ${navigator.userAgent}`,
    `OS: ${navigator.platform}`,
    `Language: ${navigator.language}`,
    "Scan complete. All clear ✅"
  ];

  let i = 0;
  output.textContent = "";

  function typeLine() {
    if (i < lines.length) {
      output.textContent += lines[i] + "\n";
      i++;
      setTimeout(typeLine, 500);
    } else {
      btn.classList.add("show");
    }
  }

  typeLine();
}

window.onload = () => {
  typeTitle();
  displayTerminalInfo();
};
