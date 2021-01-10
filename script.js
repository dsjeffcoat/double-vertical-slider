const sliderContainer = document.querySelector('.slider-container')
const rightSlider = document.querySelector('.right-slide')
const leftSlider = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const sliderLength = rightSlider.querySelectorAll('div').length

// console.log(sliderLength)

let activeSlideIndex = 0

leftSlider.style.top = `-${(sliderLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const slideHeight = sliderContainer.clientHeight
    // console.log(slideHeight)
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > sliderLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = sliderLength - 1;
        }
    }

    rightSlider.style.transform = `translateY(-${activeSlideIndex * slideHeight}px)`
    leftSlider.style.transform = `translateY(${activeSlideIndex * slideHeight}px)`


}