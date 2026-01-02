function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let service = document.getElementById("service").value;

  let message = `Hello, I am ${name}. I want to book ${service}. My number is ${phone}.`;

  let url = "https://wa.me/91XXXXXXXXXX?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}