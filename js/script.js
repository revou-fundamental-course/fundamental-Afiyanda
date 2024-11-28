document.querySelector(".message-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman

  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // Menampilkan pesan di dalam kotak hasil
  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `
    <p><strong>Name:</strong> ${firstname} ${lastname}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Subject:</strong> ${subject}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  // Reset form setelah submit
  document.querySelector(".message-form").reset();
});
