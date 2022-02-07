(function task() {
    console.log(`Вёрстка +10
вёрстка видеоплеера: есть само видео, в панели управления есть кнопка Play/Pause, прогресс-бар, кнопка Volume/Mute, регулятор громкости звука +5
в футере приложения есть ссылка на гитхаб автора приложения, год создания приложения, логотип курса со ссылкой на курс +5
Кнопка Play/Pause на панели управления +10
при клике по кнопке Play/Pause запускается или останавливается проигрывание видео +5
внешний вид и функционал кнопки изменяется в зависимости от того, проигрывается ли видео в данный момент +5
Прогресс-бар отображает прогресс проигрывания видео. При перемещении ползунка прогресс-бара вручную меняется текущее время проигрывания видео. Разный цвет прогресс-бара до и после ползунка +10
При перемещении ползунка регулятора громкости звука можно сделать звук громче или тише. Разный цвет регулятора громкости звука до и после ползунка +10
При клике по кнопке Volume/Mute можно включить или отключить звук. Одновременно с включением/выключением звука меняется внешний вид кнопки. Также внешний вид кнопки меняется, если звук включают или выключают перетягиванием регулятора громкости звука от нуля или до нуля +10
Кнопка Play/Pause в центре видео +10
есть кнопка Play/Pause в центре видео при клике по которой запускается видео и отображается панель управления +5
когда видео проигрывается, кнопка Play/Pause в центре видео скрывается, когда видео останавливается, кнопка снова отображается +5
Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения +10
высокое качество оформления приложения предполагает собственное оригинальное оформление равное или отличающееся в лучшую сторону по сравнению с демо`)
}())




const videoPlayer = document.querySelector('.video-player')
const video = videoPlayer.querySelector('.video')
const playButton = videoPlayer.querySelector('.play-button')
const buttonVideo = videoPlayer.querySelector('.button-play')
const poster = document.querySelector('.poster')
const volume = document.querySelector('.volume')
const volumeBtn = document.querySelector('.volume-icon')
const progress = document.querySelector('.progress')


//play button

const handleClick = () => {
    if (video.paused) {
        video.play()
        playButton.classList.remove('pause')
        playButton.classList.add('play')
        buttonVideo.classList.add('button-play-none')
        poster.classList.add('poster-off')
    } else {
        video.pause()
        playButton.classList.add('pause')
        playButton.classList.remove('play')
        buttonVideo.classList.remove('button-play-none')

    }
}

playButton.addEventListener('click', handleClick)

video.addEventListener('click', handleClick)

buttonVideo.addEventListener('click', handleClick)

poster.addEventListener('click', handleClick)


//volume


volume.addEventListener('input', (e) => {
    video.volume = e.target.value / 100;
    let v = e.target.value
    console.log(v)
})
volume.addEventListener('input', (e) => {
    const value = e.target.value;
    video.volume = e.target.value / 100;
    e.target.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #c8c8c8 ${value}%, #c8c8c8 100%)`
    if (value == 0) {
        volumeBtn.classList.remove('volume-icon')
        volumeBtn.classList.add('mute-icon')
    } else {
        volumeBtn.classList.add('volume-icon')
        volumeBtn.classList.remove('mute-icon')
    }
})

volumeBtn.addEventListener('click', () => {
    if (video.muted = !video.muted && video.volume != 0) {
        volumeBtn.classList.toggle('mute-icon')
        volumeBtn.classList.remove('volume-icon')
    }
    else {
        volumeBtn.classList.remove('mute-icon')
        volumeBtn.classList.add('volume-icon')
    }
})

//progress bar

video.addEventListener('timeupdate', () => {
    const value = (video.currentTime / video.duration) * 100
    progress.value = value
    progress.style.background = `linear-gradient(to right, #bdae82 0%, #bdae82 ${value}%, #c8c8c8 ${value}%, #c8c8c8 100%)`
})

progress.addEventListener('click', (el) => {
    const progressTime = (el.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = progressTime
})

video.addEventListener('timeupdate', () => {
    if (video.currentTime == video.duration) {
        buttonVideo.classList.remove('button-play-none')
    }
})


