const menuIcon = document.getElementById("icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
    
});

// Ambil tombol dan kontainer dari halaman pertama
const showPhotosButton = document.getElementById('showPhotosButton');

// Fungsi untuk menampilkan foto pada halaman kedua
function showPhotosOnNextPage() {
  // Daftar URL foto yang ingin ditampilkan (ganti dengan URL foto Anda)
  const photoUrls = [
    'foto1.jpg',
    'foto2.jpg',
    'foto3.jpg',
    // Tambahkan URL foto lain jika diperlukan
  ];

  // Buat elemen gambar untuk setiap URL foto dan tambahkan ke halaman kedua
  const photosContainer = document.getElementById('photosContainer');
  photoUrls.forEach(url => {
    const img = document.createElement('img');
    img.src = url;
    photosContainer.appendChild(img);
  });

  // Buka halaman kedua di tab/window baru saat tombol ditekan
  window.open('halaman-kedua.html', '_blank');
}

// Tambahkan event listener untuk tombol
showPhotosButton.addEventListener('click', showPhotosOnNextPage);


