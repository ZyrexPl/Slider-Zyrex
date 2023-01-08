const carousel = document.getElementById('carousel'); // pobierz element kontenera karuzele
const slides = carousel.querySelectorAll('.slide'); // pobierz wszystkie slajdy
const slideTexts = carousel.querySelectorAll('.slide-text'); // pobierz wszystkie elementy z tekstem slajdu
let currentSlide = 0; // zmienna przechowująca indeks bieżącego slajdu

// Funkcja ustawiająca tekst slajdu odpowiednio do bieżącego slajdu
function showSlideText() {
  slideTexts.forEach((slideText, index) => {
    // Jeśli indeks slajdu odpowiada indeksowi bieżącego slajdu, dodaj klasę "active"
    if (index === currentSlide) {
      slideText.classList.add('active');
    } else {
      slideText.classList.remove('active');
    }
  });
}

// Funkcja wyświetlająca slajd o podanym indeksie
function showSlide(n) {
  slides[currentSlide].classList.remove('active'); // usuń klasę "active" z bieżącego slajdu
  slides[n].classList.add('active'); // dodaj klasę "active" do slajdu o podanym indeksie
  currentSlide = n; // ustaw bieżący slajd na ten o podanym indeksie
  showSlideText(); // ustaw tekst slajdu odpowiednio do bieżącego slajdu
}

// Funkcja przewijająca slajdy w prawo (do następnego)
function nextSlide() {
  showSlide((currentSlide + 1) % slides.length); // wyświetl następny slajd (lub pierwszy, jeśli to ostatni)
}

// Funkcja przewijająca slajdy w lewo (do poprzedniego)
function prevSlide() {
  showSlide((currentSlide - 1 + slides.length) % slides.length); // wyświetl poprzedni slajd (lub ostatni, jeśli to pierwszy)
}

// Obsługa zdarzenia "click" na przyciskach nawigacji
document.getElementById('prev').addEventListener('click', prevSlide);
document.getElementById('next').addEventListener('click', nextSlide);

// Automatyczne przewijanie slajdów co 5 sekund
setInterval(nextSlide, 7000);
