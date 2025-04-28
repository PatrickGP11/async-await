let body = document.querySelector("body")
async function apresentaPersonagem() {
    for(let page = 1; page <= 42; page++) {
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
        const data = await response.json()
        data.results.forEach((personagem) => {
            let imagem = document.createElement("img")
            imagem.setAttribute("src", `${personagem.image}`)

            body.appendChild(imagem)
        })
    }
}

apresentaPersonagem()