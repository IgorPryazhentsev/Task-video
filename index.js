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


