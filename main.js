document.addEventListener('DOMContentLoaded', () => {
    
    // Элементы слайдера
    const track = document.getElementById('sliderTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Слайды
    let slides = document.querySelectorAll('.slide');
    let index = 0;
    const totalSlides = slides.length;

    // Функция переключения слайдов
    function updateSlide() {
        // Сдвигаем трек на ширину слайда * индекс
        track.style.transform = `translateX(-${index * 100}%)`;
    }

    // Кнопка Вперед
    nextBtn.addEventListener('click', () => {
        index++;
        if (index >= totalSlides) {
            index = 0;
        }
        updateSlide();
        resetTimer(); // Сброс таймера автолистания при клике
    });

    // Кнопка Назад
    prevBtn.addEventListener('click', () => {
        index--;
        if (index < 0) {
            index = totalSlides - 1;
        }
        updateSlide();
        resetTimer();
    });

    // Автоматическое листание (каждые 5 секунд)
    let autoSlideInterval = setInterval(() => {
        index++;
        if (index >= totalSlides) {
            index = 0;
        }
        updateSlide();
    }, 5000);

    // Функция сброса таймера, чтобы слайдер не дергался, если человек кликает сам
    function resetTimer() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            index++;
            if (index >= totalSlides) {
                index = 0;
            }
            updateSlide();
        }, 5000);
    }
});