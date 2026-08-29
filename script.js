document.addEventListener('DOMContentLoaded', () => {
  // Alternar Modo Escuro / Claro
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggleBtn.textContent = isDarkMode ? 'Modo Claro' : 'Modo Escuro';
  });

  // Calculadora de Tempo Estimado de Leitura
  const postBody = document.getElementById('post-body');
  const readTimeDisplay = document.getElementById('read-time');
  
  if (postBody && readTimeDisplay) {
    const text = postBody.innerText;
    const wordCount = text.trim().split(/\s+/).length;
    const wordsPerMinute = 200;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    readTimeDisplay.textContent = `Leitura de ~${readingTime} min`;
  }

  // Validação e envio do Formulário de Newsletter
  const newsForm = document.getElementById('news-form');
  const newsEmail = document.getElementById('news-email');
  const newsMessage = document.getElementById('news-message');

  newsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailValue = newsEmail.value.trim();

    if (validateEmail(emailValue)) {
      newsMessage.style.color = 'green';
      newsMessage.textContent = 'Inscrição realizada com sucesso!';
      newsForm.reset();
    } else {
      newsMessage.style.color = 'red';
      newsMessage.textContent = 'Por favor, insira um e-mail válido.';
    }
  });

  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
