import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonLess,
    minutesDisplay,
    secondsDisplay,
    buttonSoundTree,
    buttonSoundRain,
    buttonSoundFire,
    buttonSoundCoffe,
    sliderRain,
    sliderCoffe,
    sliderFire,
    sliderTree,
    buttonLua,
    buttonSol
}
from './elements.js'

import { soundTree,
    soundRain,
    soundFire,
    soundCoffe,
    kitchenTimer} from './sound.js'

// ativar botões de musica    
function onButtonTree () {
    buttonSoundRain.classList.remove('on')
    buttonSoundFire.classList.remove('on')
    buttonSoundCoffe.classList.remove('on')
    buttonSoundTree.classList.add('on')
}

function onButtonRain () {
    buttonSoundTree.classList.remove('on')
    buttonSoundFire.classList.remove('on')
    buttonSoundCoffe.classList.remove('on')
    buttonSoundRain.classList.add('on')
}

function onButtonFire () {
    buttonSoundTree.classList.remove('on')
    buttonSoundRain.classList.remove('on')
    buttonSoundCoffe.classList.remove('on')
    buttonSoundFire.classList.add('on')
}

function onButtonCoffe () {
    buttonSoundTree.classList.remove('on')
    buttonSoundRain.classList.remove('on')
    buttonSoundFire.classList.remove('on')
    buttonSoundCoffe.classList.add('on')
}

// ativar botões sliders
function onSliderTree () {
    sliderRain.classList.remove('on')
    sliderFire.classList.remove('on')
    sliderCoffe.classList.remove('on')
    sliderTree.classList.add('on')
}

function onSliderRain () {
    sliderRain.classList.add('on')
    sliderFire.classList.remove('on')
    sliderTree.classList.remove('on')
    sliderCoffe.classList.remove('on')
}

function onSliderFire () {
    sliderRain.classList.remove('on')
    sliderTree.classList.remove('on')
    sliderCoffe.classList.remove('on')
    sliderFire.classList.add('on')
}

function onSliderCoffe () {
    sliderRain.classList.remove('on')
    sliderTree.classList.remove('on')
    sliderFire.classList.remove('on')
    sliderCoffe.classList.add('on')
}

// ativar musica dos botões
function playSoundTree () {
    soundTree.play()
    soundCoffe.pause()
    soundFire.pause()
    soundRain.pause()
}

function playSoundRain () {
    soundRain.play()
    soundTree.pause()
    soundCoffe.pause()
    soundFire.pause()
}

function playSoundFire () {
    soundTree.pause()
    soundCoffe.pause()
    soundFire.play()
    soundRain.pause()
}

function playSoundCoffe () {
    soundTree.pause()
    soundCoffe.play()
    soundFire.pause()
    soundRain.pause()
}

// definir volume dos sons 
function setVolumeTree () {
    soundTree.volume = sliderTree.value / 100;
}

function setVolumeRain () {
    soundRain.volume = sliderRain.value / 100;
}

function setVolumeFire () {
    soundFire.volume = sliderFire.value / 100;
}

function setVolumeCoffe () {
    soundCoffe.volume = sliderCoffe.value / 100;
}

//ativar darkmode
function darkMode () {
    document.documentElement.style.setProperty('--bg-corlor', '#121214');
    document.documentElement.style.setProperty('--tt-color:', '#FFFFFF');
    document.documentElement.style.setProperty('--bg-button-base', '#29292E');
    document.documentElement.style.setProperty('--tt-button-base', '#C4C4CC');
    document.documentElement.style.setProperty('--bg-button-select', '#0A3442');
    document.documentElement.style.setProperty('--tt-button-select', '#FFFFFF');
    document.documentElement.style.setProperty('--text-timer', '#FFFFFF');

    buttonLua.classList.remove('hide')
    buttonSol.classList.add('hide')
}

//ativar lightmode
function lightMode () {
    document.documentElement.style.setProperty('--bg-corlor', '#FFFFFF');
    document.documentElement.style.setProperty('--tt-color:', '#323238');

    document.documentElement.style.setProperty('--bg-button-base', '#E1E1E6');
    document.documentElement.style.setProperty('--tt-button-base', '#323238');

    document.documentElement.style.setProperty('--bg-button-select', '#02799D');
    document.documentElement.style.setProperty('--tt-button-select', '#FFFFFF');

    document.documentElement.style.setProperty('--text-timer', '#323238');

    buttonSol.classList.remove('hide')
    buttonLua.classList.add('hide')
}

let timerTimeOut
let minutes = Number(minutesDisplay.textContent)

function updateTimerDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countDown() {
    timerTimeOut = setTimeout(function () {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)
        let isFinished = minutes <= 0 && seconds <= 0

        updateTimerDisplay(minutes, 0)

        if (isFinished) {
            // resetControls()
            updateTimerDisplay()
            kitchenTimer.play()
            // Sounds().timeEnd()
            return
        }

        if (seconds <= 0) {
            seconds = 60
            --minutes
        }

        updateTimerDisplay(minutes, String(seconds - 1))

        countDown()
    }, 1000)



}

function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}

// adicionar 5 mim ao timer
function plusTimer() {
    minutes = minutes + 5
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

// remover 5 mim ao timer
function lessTimer() {
    if (minutes > 0) {
        minutes = minutes - 5
    }

    minutesDisplay.textContent = String(minutes).padStart(2, "0")
}

export {
    onButtonTree,
    onButtonRain,
    onButtonFire,
    onButtonCoffe,
    onSliderTree,
    onSliderRain,
    onSliderFire,
    onSliderCoffe,
    playSoundTree,
    playSoundRain,
    playSoundFire,
    playSoundCoffe,
    setVolumeTree,
    setVolumeRain,
    setVolumeFire,
    setVolumeCoffe,
    darkMode,
    lightMode,
    countDown,
    plusTimer,
    resetTimer,
    lessTimer,
    timerTimeOut
}
