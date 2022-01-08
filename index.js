const cambioApariencia = () => {
    const parrafoPrincipal = document.getElementById('principal');
    parrafoPrincipal.innerText = 'Bienvenidx';
    parrafoPrincipal.classList.toggle('principal');
  }

  const parrafoSimple = document.getElementById('parrafoSimple');
 
principal.addEventListener('mouseover', cambioApariencia);  
