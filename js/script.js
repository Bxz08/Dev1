function moveButton() {
  const button = document.getElementById("no");
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Generate posisi acak
  const randomX = Math.random() * (windowWidth - button.offsetWidth);
  const randomY = Math.random() * (windowHeight - button.offsetHeight);

  // Atur posisi tombol
  button.style.position = "absolute";
  button.style.left = randomX + "px";
  button.style.top = randomY + "px";
}
