// Filtro de categorias
document.querySelectorAll('.filtro').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.filtro.ativo')?.classList.remove('ativo');
    btn.classList.add('ativo');

    const cat = btn.getAttribute('data-cat');
    document.querySelectorAll('.card').forEach(card => {
      if (cat === 'todos') card.style.display = 'block';
      else card.style.display = card.getAttribute('data-cat') === cat ? 'block' : 'none';
    });
  });
});

// Formulário vai pro WhatsApp
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = this[0].value;
  const tel = this[1].value;
  const msg = this[2].value;
  const texto = `Oi Mariana! Meu nome é ${nome}. ${msg} Meu WhatsApp: ${tel}`;
  window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(texto)}`);
  this.reset();
});