// //- Carrousel

// const previousEl = document.getElementById('previous');
// const nextEl = document.getElementById('next');
// const sliderEl = document.getElementById('slider');

// previousEl.addEventListener('click', onPreviousClick)
// nextEl.addEventListener('click', onNextClick)

// function onPreviousClick() {
//     const sliderWidth = sliderEl.offsetWidth;
//     sliderEl.scrollLeft -= sliderWidth + 40;
// }

// function onNextClick() {
//     const sliderWidth = sliderEl.offsetWidth;
//     sliderEl.scrollLeft += sliderWidth + 40;
// }

// function typeWrite(elemento) {
//     if (!elemento) {
//         return
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const titulo = document.querySelector('.c-about-me__description')
//     typeWrite(titulo)
// })

//- Load description about me

class Load {
    mount() {
        document.addEventListener('DOMContentLoaded', this.loadFuc)
    }

    loadFuc() {
        const elemento = document.querySelector('.c-about-me__description')
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
