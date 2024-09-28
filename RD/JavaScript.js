<script>
    let slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 5000); // تغيير كل 5 ثوانٍ

    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
</script>
