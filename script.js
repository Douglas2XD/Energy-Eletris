
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }




function Mudartema_Claro(){
  var body = document.getElementById('body')
  var color_buttons = document.getElementById('Buttons')
  var color_paragrafh = document.getElementById('paragrafh')
  body.style.backgroundColor = "white"
  color_buttons.style.color = "black"
  color_paragrafh.style.color = "black"
  body.style.color = "black"
  
}

function Mudartema_Escuro(){
  var body = document.getElementById('body')
  body.style.backgroundColor = "white"
  body.style.color = "black"
   
}


function tema(){
  Mudartema_Claro()
}

const imageList = ["Imagens/img1.jpeg", "Imagens/img2.jpeg", "Imagens/img3.jpeg"];
        let currentImageIndex = 0;
            function changeImage() {
          const imageElement = document.getElementById("displayedImage");
          currentImageIndex = (currentImageIndex + 1) % imageList.length;
          const nextImage = imageList[currentImageIndex];
          
          imageElement.style.opacity = 0;
          
          setTimeout(() => {
            imageElement.src = nextImage;
            imageElement.alt = `Image ${currentImageIndex + 1}`;
            imageElement.style.opacity = 1;
          }, 500); // Tempo em milissegundos da transição (deve corresponder à transição CSS)
        }
      
        // Chamar a função para trocar a imagem a cada 3 segundos (3000 milissegundos)
        setInterval(changeImage, 3000);