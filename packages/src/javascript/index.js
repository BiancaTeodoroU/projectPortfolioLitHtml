//- Carrousel
const config = {
    type: 'carousel',
    startAt: 0,
    perView: 1,
}

new Glide('.glide', config).mount()

//- Load description about me

class Load {
    mount() {
        document.addEventListener('DOMContentLoaded', this.loadFuc)
    }

    loadFuc() {
        const elemento = document.querySelector('.s-load-title')
        if (!elemento) {
            return
        }
    
        const textoArray = elemento.innerHTML.split('')
        elemento.innerHTML = ' '
        textoArray.forEach((letra, i) => {
            setTimeout(() => {
                elemento.innerHTML += letra
            }, 54 * i)
        })
    }
}

const loader = new Load()
loader.mount()
