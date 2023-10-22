
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 0) {
          $(".black").css("background-color" , "rgba(0, 182, 18, 0);");
        }
  
        else{
            $(".black").css("background-color" , "red");  	
        }
    })
  })

 // script.js
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

showSlide(currentIndex);

carousel.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        window.open(event.target.getAttribute('href'), '_blank');
    }
});

// Para adicionar controles de próximo e anterior, você pode usar botões e
// incrementar/decrementar o valor de currentIndex e chamar showSlide.

// Adicione este código no seu arquivo JavaScript (script.js)

// Seleciona os elementos do portfólio e os botões de navegação
const slides = document.querySelectorAll('.portfolio-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Função para mostrar o slide atual
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

// Função para avançar para o próximo slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Função para voltar ao slide anterior
function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Adiciona eventos aos botões de navegação
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Mostra o primeiro slide ao carregar a página
showSlide(currentIndex);

//IMPRENSA
// Seleciona os elementos necessários
const readMoreButtons = document.querySelectorAll('.btn-primary');
const overlay = document.querySelector('.overlay');
const newsBox = document.querySelector('.news-box');

// Função para mostrar a notícia
function showNews(newsContent) {
  overlay.style.display = 'flex';
  newsBox.innerHTML = newsContent;
  setTimeout(() => {
    overlay.style.opacity = 1;
    newsBox.style.opacity = 1;
    newsBox.style.transform = 'translateY(0)';
  }, 10);
}

// Evento de clique nos botões "Leia Mais"
readMoreButtons.forEach((button, index) => {
  const newsContent = `<h2>Título da Notícia ${index + 1}</h2>
  <p>Data da notícia</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Notícia ${index + 1}.</p>
  <a href="#" class="close-news">Fechar</a>`;

  button.addEventListener('click', (e) => {
    e.preventDefault();
    showNews(newsContent);
  });
});

// Evento de clique para fechar a notícia
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close-news')) {
    overlay.style.opacity = 0;
    newsBox.style.opacity = 0;
    newsBox.style.transform = 'translateY(-50px)';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 300);
  }
});
