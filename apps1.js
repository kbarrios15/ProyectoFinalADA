const init  = () => {

    fetch('https://rickandmortyapi.com/api/character?page=2')
     .then ((respuesta)=> { 
          return respuesta.json()
    })
     .then ((datos) => {
        const personajes = datos.results;
        const urlNext = datos.info;
        console.log(urlNext);
        const section = document.querySelector('section');
        let info = ' ';
        let contadorParaImagen = 21;
        /* console.log(personajes [0].name);
        console.log('Personajes', personajes); */


        for (let i = 0; i < personajes.length; i++) {
/*         console.log('Nombre personaje: ', personajes[i].name);            }*/
           contadorParaImagen + i;
           console.log(personajes[i].name); 
           info += `
           <div class="tarjeta"> 
            <img src="https://rickandmortyapi.com/api/character/avatar/${contadorParaImagen + i}.jpeg">
            <p>Name: ${personajes[i].name} </p>
            <p>Gender: ${personajes[i].gender} </p>
            <p>Origin: ${personajes[i].origin.name} </p>
            <p>Status: ${personajes[i].status} </p>
            <hr>
            </div>
           `
          /* section.innerText = personajes[i].name; */

        }
        return section.innerHTML = info;

     })
     

}

document.onload = init ();



