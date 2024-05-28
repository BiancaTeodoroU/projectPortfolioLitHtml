//- Carrousel
document.addEventListener('DOMContentLoaded', () => {
    const previousEl = document.getElementById('previous');
    const nextEl = document.getElementById('next');
    const sliderEl = document.getElementById('slider');

    if (previousEl && nextEl) {
        previousEl.addEventListener('click', onPreviousClick);
        nextEl.addEventListener('click', onNextClick);
    }

    function onPreviousClick() {
        if (sliderEl) {
            const sliderWidth = sliderEl.offsetWidth;
            sliderEl.scrollLeft -= sliderWidth + 40;
        }
    }

    function onNextClick() {
        if (sliderEl) {
            const sliderWidth = sliderEl.offsetWidth;
            sliderEl.scrollLeft += sliderWidth + 40;
        }
    }

    class Carrousel {
        constructor() {
            this.onPreviousClick = this.onPreviousClick.bind(this);
            this.onNextClick = this.onNextClick.bind(this);
        }

        mount() {
            const previousEl = document.querySelector('.c-carrousel--previous');
            const nextEl = document.querySelector('.c-carrousel--next');

            if (previousEl && nextEl) {
                previousEl.addEventListener('click', this.onPreviousClick);
                nextEl.addEventListener('click', this.onNextClick);
            }
        }

        onPreviousClick() {
            const sliderEl = document.querySelector('.c-carrousel--slider');
            if (sliderEl) {
                const sliderWidth = sliderEl.offsetWidth;
                sliderEl.scrollLeft -= sliderWidth;
            }
        }

        onNextClick() {
            const sliderEl = document.querySelector('.c-carrousel--slider');
            if (sliderEl) {
                const sliderWidth = sliderEl.offsetWidth;
                sliderEl.scrollLeft += sliderWidth;
            }
        }
    }

    const carrousel = new Carrousel();
    carrousel.mount();
});


// class Cards {
//     constructor() {
//         this.init()
//     }

//     init() {
//         document.addEventListener('DOMContentLoaded', () => {
//         setTimeout(() => {
//             this.setupCards()
//             this.activateCard(1) // Activates the second card by default
//         }, 1)
//         })
//     }

//     setupCards() {
//         const cardsContainer = document.querySelector(".c-carousel")
//         if (!cardsContainer) return

//         cardsContainer.addEventListener('click', (event) => {
//         const clickedCard = event.target
//         if (clickedCard.dataset.card) {
//             const cardIndex = parseInt(clickedCard.dataset.card)
//             this.activateCard(cardIndex)
//         }
//         });
//     }

//     activateCard(index) {
//         const cards = document.querySelectorAll(".c-carousel .c-carousel__card")
//         if (cards.length === 0) return

//         cards.forEach((card, i) => {
//         card.classList.remove("c-carousel__card--left", "c-carousel__card--center", "c-carousel__card--right")
//         if (i === index) {
//             card.classList.add("c-carousel__card--center")
//         } else if (i === this.getLeftIndex(index)) {
//             card.classList.add("c-carousel__card--left")
//         } else if (i === this.getRightIndex(index)) {
//             card.classList.add("c-carousel__card--right")
//         }
//         });
//     }

//     getLeftIndex(index) {
//         return (index - 1 + 3) % 3 // 3 is the total number of cards
//     }

//     getRightIndex(index) {
//         return (index + 1) % 3
//     }
// }

// // Instanciar a classe Cards
// const cardsInstance = new Cards()

// document.addEventListener('DOMContentLoaded', function() {
//     const carousel = document.querySelector('.carousel');
//     const items = document.querySelectorAll('.item');
//     const leftButton = document.querySelector('.button--left');
//     const rightButton = document.querySelector('.button--right');

//     console.log(carousel, items, leftButton, rightButton); // Adicione esta linha para verificar se os elementos são encontrados

//     if (carousel && items.length > 0 && leftButton && rightButton) {
//         leftButton.addEventListener('click', function() {
//             roll('left');
//         });
//         rightButton.addEventListener('click', function() {
//             roll('right');
//         });
    
//         function roll(direction) {
//             carousel.classList.add(`moving-${direction}`);
    
//             for (var item of items) {
//             const startPosition = item.dataset.position;
//             let endPosition;
    
//             if (direction === 'right') {
//                 endPosition = parseInt(startPosition) + 1;
//             }
//             if (direction === 'left') {
//                 endPosition = parseInt(startPosition) - 1;
//             }
//             if (endPosition > 5) {
//                 endPosition = 1;
//                 item.style.zIndex = '-1';
//             } else if (endPosition < 1) {
//                 endPosition = 5;
//                 item.style.zIndex = '-1';
//             } else {
//                 item.style.zIndex = '';
//             }
//             item.dataset.position = endPosition;
//             item.addEventListener("transitionend", function() {
//                 carousel.classList.remove(`moving-${direction}`);
//             }, false);
//             }
    
//             const activeItem = document.querySelector('[data-position="3"]');
//             console.log(activeItem);
//         }
//         } else {
//         console.error('Elementos não encontrados no DOM.');
//         }
// });


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
