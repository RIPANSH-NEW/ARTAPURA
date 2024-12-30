document.addEventListener("DOMContentLoaded", function () {
        const text = "Jadikan ceritamu seperti nyata di ARTAPURA";
        const typingElement = document.getElementById("typing-effect");
        let index = 0;

        function typeText() {
            if (index < text.length) {
                typingElement.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 100); // Kecepatan ketik (100ms per karakter)
            } else {
                setTimeout(resetText, 3000); // Tunggu 3 detik sebelum mengulang
            }
        }

        function resetText() {
            typingElement.textContent = ""; // Hapus teks
            index = 0; // Reset indeks
            typeText(); // Mulai ketik ulang
        }

        typeText(); // Mulai animasi
    });