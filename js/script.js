import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonPlus,
    buttonLess,
    buttonSoundTree,
    buttonSoundRain,
    buttonSoundFire,
    buttonSoundCoffe,
    buttonLua,
    buttonSol,
} from "./elements.js"

import {
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
} from "./controls.js"

// buttons controls timer
buttonPlay.addEventListener('click', function () {
    buttonPause.classList.remove('hide')
    buttonPlay.classList.add('hide')
    countDown()
})

buttonPause.addEventListener('click', function () {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    clearTimeout(timerTimeOut)
})

buttonStop.addEventListener('click', function () {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    resetTimer()
})

buttonPlus.addEventListener('click', function () {
    plusTimer()
})

buttonLess.addEventListener('click', function () {
    lessTimer()
})

// buttons sounds
buttonSoundTree.addEventListener('click', function () {
    onButtonTree()
    onSliderTree()
    playSoundTree()
    setVolumeTree()
})

buttonSoundRain.addEventListener('click', function () {
    onButtonRain()
    onSliderRain()
    playSoundRain()
    setVolumeRain()
})

buttonSoundFire.addEventListener('click', function () {
    onButtonFire()
    onSliderFire()
    playSoundFire()
    setVolumeFire()
})

buttonSoundCoffe.addEventListener('click', function () {
    onButtonCoffe()
    onSliderCoffe()
    playSoundCoffe()
    setVolumeCoffe()
})

//DARKMODE ON - OFF
buttonSol.addEventListener('click', function () {
    darkMode()
})
buttonLua.addEventListener('click', function () {
    lightMode()
})


