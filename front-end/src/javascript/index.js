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

class Carrousel {
    constructor() {
        this.onPreviousClick = this.onPreviousClick.bind(this)
        this.onNextClick = this.onNextClick.bind(this)
    }

    mount() {
        const previousEl = document.querySelector('.c-carrousel--previous')
        const nextEl = document.querySelector('.c-carrousel--next')

        previousEl.addEventListener('click', this.onPreviousClick)
        nextEl.addEventListener('click', this.onNextClick)
    }

    onPreviousClick() {
        const sliderWidth = document.querySelector('.c-carrousel--slider').offsetWidth
        document.querySelector('.c-carrousel--slider').scrollLeft -= sliderWidth + 40
    }
    
    onNextClick() {
        const sliderWidth = document.querySelector('.c-carrousel--slider').offsetWidth
        document.querySelector('.c-carrousel--slider').scrollLeft += sliderWidth + 40
    }
}

const carrousel = new Carrousel()
carrousel.mount()

//- Load description about me

class Load {
    mount() {
        document.addEventListener('DOMContentLoaded', this.loadFuc)
    }

    loadFuc() {
        const elemento = document.querySelector('.s-load-description')
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
