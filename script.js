function copy() {
    const buttons = document.querySelectorAll('.copyButton');
  
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const url = button.getAttribute('data-url-media');
  
        navigator.clipboard.writeText(url)
          .then(() => {
            button.innerText = 'Copiado!';
            button.classList.add('copied');
          })
          .catch(() => {
            console.error('Falha ao copiar para a área de transferência.');
          });
  
        setTimeout(() => {
          button.innerText = 'Copiar link';
          button.classList.remove('copied');
        }, 700);
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', copy);