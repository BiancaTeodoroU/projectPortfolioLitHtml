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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 100, // 100 é o deslocamento para compensar a navbar
            behavior: 'smooth'
        });
    });
});
