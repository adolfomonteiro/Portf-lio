function Donwload() {
    alert("Currículum Vitae Indisponível")
    return
    // Verifica se o navegador suporta a funcionalidade File System Access API
    if ('showDirectoryPicker' in window) {
      // Abre a caixa de diálogo para selecionar o diretório
      window.showDirectoryPicker().then(async (directoryHandle) => {
        // Obtem o caminho do diretório selecionado
        const directoryPath = directoryHandle.name;
        // Redireciona para o diretório
        window.location.href = 'file:///' + directoryPath;
      }).catch((err) => {
        console.error('Erro ao abrir os documentos:', err);
      });
    } else {
      // Se o navegador não suporta a API, exibe uma mensagem de erro
      alert('Seu navegador não suporta esta funcionalidade.');
    }
  }
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.scroll = ()=>{
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')

        if(top >= offset && offset + height){
            navLinks.forEach.apply(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href"=' +id+']').classList.add('active')
            });
        };
    });

    let header = document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY > 100)

    menuIcon.classList.remove('fa-xmark')
    navbar.classList.remove('active')
}

ScrollReveal({
    distance:'80px',
    duration:2000,
    delay:200,
})

ScrollReveal().reveal('.home-content,heading',{origin:'top'})
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box, .contact form',{origin:'button'})
ScrollReveal().reveal('.home-contact h1, .about-img',{origin:'left'})
ScrollReveal().reveal('.home-contact,.about-content',{origin:'right'})


const typed = new typed('.multiple-text',{
    strings :['Frontend Developer','Web Design','Mobile Developer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay:1000,
    loop:true
})