// ================= WEBSITE INTERACTION SCRIPT =================
document.addEventListener('DOMContentLoaded', function () {

    /* ================= ANIMASI COURSE CARD ================= */
    const cards = document.querySelectorAll('.course-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';

        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 150);
    });

    /* ================= ANIMASI LESSON ITEM ================= */
    const lessonItems = document.querySelectorAll('.lesson-item');
    lessonItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';

        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 120);
    });

    /* ================= ANIMASI SERTIFIKAT ================= */
    const certificates = document.querySelectorAll('.certificate-card');
    certificates.forEach((cert, index) => {
        cert.style.opacity = '0';
        cert.style.transform = 'scale(0.95)';

        setTimeout(() => {
            cert.style.transition = 'all 0.5s ease';
            cert.style.opacity = '1';
            cert.style.transform = 'scale(1)';
        }, index * 200);
    });

    /* ================= SMOOTH SCROLL ================= */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* ================= BUTTON EFFECT ================= */
    const buttons = document.querySelectorAll('.lesson-btn, .back-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            this.style.transition = 'all 0.3s ease';
        });
    });

    /* ================= MODAL HANDLER ================= */
    const modal = document.getElementById('certificateModal');

    // Klik background untuk nutup modal
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeCertificate();
            }
        });
    }

    // Tekan ESC untuk nutup modal
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal && modal.style.display === 'block') {
            closeCertificate();
        }
    });

    /* ================= DEBUG INFO ================= */
    console.log('✅ Website Data Science berhasil dimuat');
    console.log('📘 Total Kursus:', cards.length);
    console.log('📜 Total Sertifikat:', certificates.length);
});

/* ================= MODAL FUNCTION ================= */
function openCertificate(src) {
    const modal = document.getElementById('certificateModal');
    const modalImg = document.getElementById('certificatePreview');

    modal.style.display = 'block';
    modalImg.src = src;
}

function closeCertificate() {
    const modal = document.getElementById('certificateModal');
    modal.style.display = 'none';
}
