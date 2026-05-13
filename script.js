function showModal(title, desc, imgSrc) {
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-desc').textContent = desc;
    
    const modalImg = document.getElementById('modal-img');
    
    if (imgSrc) {
        modalImg.src = imgSrc;
        modalImg.style.display = 'block';
    } else {
        modalImg.style.display = 'none';
    }
    
    document.getElementById('modal').style.display = 'flex';
}
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
document.getElementById('modal').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
});
document.getElementById('contact-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Спасибо за обращение! Мы скоро свяжемся с вами.');
  this.reset();
});
