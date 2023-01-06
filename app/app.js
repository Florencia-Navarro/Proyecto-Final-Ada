const $container = document.getElementById("character-cont")
const URL_API = "https://rickandmortyapi.com/api/character"

const characters = fetch(URL_API)

characters.then((res)=>{
  return res.json();
})
.then((data)=>{
    console.log(data.results);

    const character = data.results;
    character.forEach((character)=> {
        console.log(character)

         $container.innerHTML +=`
         <article class="character-card">
         <img class="character-img" src="${character.image}" alt="${character.name}" />
         <section class="character-description">
         <h2>${character.name}</h2>
        <p><span class="key-character">Especie:</span>${character.species}</p>
        <p><span class="key-character">Género:</span>${character.gender}</p>
        <p><span class="key-character">Estado:</span>${character.status}</p>
        <p><span class="key-character">Origen</span>:${character.origin.name}</p>
        <p><span class="key-character">Ubicacion:</span>${character.location.name}</p>
        </section>
         
        </article>
        `
    })
})
