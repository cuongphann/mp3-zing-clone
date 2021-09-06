
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const PLAYER_STORAGE_KEY = 'MP3_ZING';
const playList = $('.playlist__songs-list');
const nameSong = $('.thumbs__title');
const nameSinger = $('.thumbs__name');
const cdThumb = $('#cd-thumb'); 
const audio = $('#audio');
const playBtn = $('#play-songs');
const imgCurrent = $('.playlist__img-item');
const player = $('.control__between-top');
const pauseBtn = $('#pause-songs');
const progress = $('#time-change');
const rangeProgress = $('.range__progress')
const cdThumbOverlay = $('.thumbs__overlay');
const nextBtn = $('#next-songs');
const prevBtn = $('#prev-songs');
const randomBtn = $('#ramdom-songs');
const repeatBtn = $('#repeat-songs');
const volume = $('#volume');
const volumeControl = $('#control-volume');
const thumbIcon = $$('.thumbs-icon')
const timeStart = $('#time-start');
const timeEnd = $('#time-end');
const playlistSong = $('.song__page-lists');
const playAll = $('#play-all');
const tagTitle = $('title');
const playListMusic = $('.play-list__music');


const app = {
    currentIndex: 0,
    isPlaying: false,
    config: JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY)) || {},
    setConfig: function(key, value) {
        this.config[key] = value;
        localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
    },
    isRandom: false,
    isRepeat: false,
    isMute: true,
    songs: [
        {
            name: 'Tát nước đầu đình',
            singer: ' Lynk Lee - Binz',
            path: './assets/songs/audio/tatnuocdaudinh.mp3',
            image: './assets/songs/imgsongs/tatnuocdaudinh.jpg',
            time: '04:03',
        },
        {
            name: 'Dạ vũ',
            singer: 'Tăng Duy Tân',
            path: './assets/songs/audio/davu.mp3',
            image: './assets/songs/imgsongs/davu.jpg',
            time: '03:22',
        },
        {
            name: 'Cô đơn giành cho ai remix',
            singer: 'Orinn; Lee Ken; Nal',
            path: './assets/songs/audio/codongianhchoairemix.mp3',
            image: './assets/songs/imgsongs/codongianhchoai.jpg',
            time: '05:06',
        },
        {
            name: 'Hóa tương tư',
            singer: 'Anh Rồng',
            path: './assets/songs/audio/hoatuongtu.mp3',
            image: './assets/songs/imgsongs/hoatuongtu.jpg',
            time: '03:46',
        },
        {
            name: 'Rồi tới luôn remix',
            singer: 'Nal',
            path: './assets/songs/audio/roitoiluonremix.mp3',
            image: './assets/songs/imgsongs/roitoiluon.jpg' ,
            time: '05:38',
        },
        {
            name: 'Than thân',
            singer: 'Anh Rồng',
            path: './assets/songs/audio/thanthan.mp3',
            image: './assets/songs/imgsongs/thanthan.jpg' ,
            time: '04:04',
        },
        {
            name: 'Thê Lương (Shin Remix)',
            singer: 'Phúc Chinh',
            path: './assets/songs/audio/theluongremix.mp3',
            image: './assets/songs/imgsongs/theluong.jpg' ,
            time: '04:51',
        },
        {
            name: 'Tình phủ',
            singer: 'Duy Khiêm x Diệu Kiên',
            path: './assets/songs/audio/tinhphu.mp3',
            image: './assets/songs/imgsongs/tinhphu.png',
            time: '04:55',
        },
        {
            name: 'Vách ngọc ngà',
            singer: 'Anh rồng',
            path: './assets/songs/audio/vachngocngaremix.mp3',
            image: './assets/songs/imgsongs/vachngocnga.jpg',
            time: '03:44',
        },  
        {
            name: 'Rồi tới luôn',
            singer: 'Nal',
            path: './assets/songs/audio/roitoiluon.mp3',
            image: './assets/songs/imgsongs/roitoiluon.jpg',
            time: '04:06',
        },
        {
            name: 'Người lạ thoáng qua',
            singer: 'Đinh Tùng Huy - ACV',
            path: './assets/songs/audio/nguoilathoangqua.mp3',
            image: './assets/songs/imgsongs/nguoilathoangqua.jpg',
            time: '04:45',
        },
        {
            name: 'Anh từng cố gắng',
            singer: 'Nhật Phong',
            path: './assets/songs/audio/anhtungcogang.mp3',
            image: './assets/songs/imgsongs/anhtungcogang.jpg',
            time: '04:19',
        },
        {
            name: 'Yêu 5 (remix) ',
            singer: 'Rhymastic',
            path: './assets/songs/audio/yeu5.mp3',
            image: './assets/songs/imgsongs/yeu5.jpg',
            time: '03:28',
        },
        {
            name: 'Túy âm',
            singer: 'Xesi - Masew - Nhật Nguyễn',
            path: './assets/songs/audio/tuyam.mp3',
            image: './assets/songs/imgsongs/tuyam.jpg',
            time: '03:21',
        },
        {
            name: 'Từng yêu remix',
            singer: 'Phan Duy Anh',
            path: './assets/songs/audio/tungyeuremix.mp3',
            image: './assets/songs/imgsongs/tungyeu.jpg',
            time: '05:01',
        },
        {
            name: 'Đường Tôi Chở Em Về (Cukak Remix)',
            singer: 'buitruonglinh - Cukak',
            path: './assets/songs/audio/duongtoichoemve.mp3',
            image: './assets/songs/imgsongs/duongtoichoemve.jpg',
            time: '04:08',
        },
        {
            name: 'Người Lạ Ơi (Masew Remix)',
            singer: 'Masew - Karik - Orange',
            path: './assets/songs/audio/nguoilaoi.mp3',
            image: './assets/songs/imgsongs/nguoilaoi.jpg',
            time: '05:07',
        },
        {
            name: 'Anh Chưa Đủ Tư Cách',
            singer: 'Lý Tuấn Kiệt',
            path: './assets/songs/audio/anhchuadutucach.mp3',
            image: './assets/songs/imgsongs/anhchuadutucach.jpg',
            time: '05:11',
        },
        {
            name: 'Bất Nhiễm (不染)',
            singer: 'Mao Bất Dịch',
            path: './assets/songs/audio/batnhiem.mp3',
            image: './assets/songs/imgsongs/batnhiem.jpg',
            time: '05:25',
        },
    ],
    defineProperties: function(){
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        });
    },
    renderSong: function() {
        const htmls = this.songs.map(function(song, index) {
            return `
            <div class="song__page-item ${index === app.currentIndex }" data-index="${index}">
                <div class="item__left">
                    <i class="ri-music-2-line item__left-icon"></i>
                    <img src="${song.image}" alt="" class="item__left-img">
                    <div class="item__left-content">
                        <div class="item__left-song">${song.name}</div>
                        <div class="item__left-singer">
                            <a href="#" class="left__singer-link">${song.singer}</a>
                        </div>
                    </div>
                </div>
                <div class="item__mid">
                    <div class="item__mid-content">${song.time}</div>
                </div>
                <div class="item__right">
                    <i class="ri-mv-fill item__right-icon"></i>
                    <i class="ri-music-fill item__right-icon"></i>
                    <i class="ri-heart-fill item__right-icon item-chosee"></i>
                    <i class="ri-more-fill item__right-icon"></i>
                </div>
            </div>
            `
        })
        playlistSong.innerHTML = htmls.join('');
    },
    renderPlayList: function() {
        const htmls = this.songs.map(function(song, index) {
            return `
            <div class="play-list__item ${index === app.currentIndex ? '' : ''}" data-index="${index}">
                <img src="${song.image}" alt="" class="play-list__img">
                <div class="play-list__grp">
                    <div class="play-list__song">${song.name}</div>
                    <div class="play-list__name">${song.singer}</div>
                </div>
                <div class="play-list__item-option">
                    <i class="ri-heart-fill play-list__item-icon"></i>
                    <i class="ri-more-fill play-list__item-icon"></i>
                </div>
            </div>
            `
        })
        playListMusic.innerHTML = htmls.join('');
    },
    render: function() {
        const htmls = this.songs.map(function(song, index) {
            return `
            <div class="playlist__songs-item ${index === app.currentIndex  ? 'playlist__songs-item-active' : ''}" data-index="${index}">
                <div class="overlay-play">
                    <img src="${song.image}" alt="" class="songs__item-img" id="songs-img">
                    <div class="overlay-play-img">
                        <i class="ri-play-fill overlay-play-img-icon"></i>
                    </div>
                </div>
                <div class="songs__item-title">
                    <p class="songs__item-name" id="songs-name">${song.name}</p>
                    <span class="songs__item-singer" id="songs-singer">${song.singer}</span>
                </div>
                <div class="songs_grp" style="display: flex;">
                    <span class="songs__item-time" id="songs-time">${song.time}</span>
                    <div class="songs__item-option">
                        <div class="song__item-mic">
                            <i class="ri-music-fill song__item-icon"></i>
                        </div>
                        <div class="song__item-heart" id="icon-heart">
                            <i class="ri-heart-line song__item-icon ${index === app.currentIndex ? 'control__active' : ''}" id="heart "></i>
                        </div>
                        <div class="song__item-more">
                            <i class="ri-more-fill song__item-icon"></i>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
        playList.innerHTML = htmls.join('')
        
    },
    handleEvents: function() { 
        const _this = this
        // xử lý cd quay / dừng 
        const cdThumbAnimate = cdThumbOverlay.animate([
            {transform: 'rotate(360deg)'}
        ],{
            duration: 9000,
            iterations: Infinity
        })
        cdThumbAnimate.pause();
        // xử lý khi click play 
        playBtn.onclick = function() {
            _this.isPlaying = true;
            audio.play();
            player.classList.add('playing');
            cdThumbAnimate.play();
            
        }
        pauseBtn.onclick = function() {
            _this.isPlaying = false;
            audio.pause();
            player.classList.remove('playing');
            cdThumbAnimate.pause();
        }
        audio.onplay = function() {
            _this.isPlaying = true;
            player.classList.add('playing');
                thumbIcon.forEach(function(item) {
                    item.classList.add('thumbs-icon-show')
                })
            cdThumbAnimate.play();
        }
    
        // khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
            const currentTime = audio.currentTime;
            if(audio.duration) {
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
                rangeProgress.style.width = progressPercent + '%';
            }
             // update thoi gian cua bai hat 
            audio.addEventListener('loadeddata', function() {
                
                const audioDuration = audio.duration;
                // lay ra so phut
                const totalMin = Math.floor(audioDuration / 60);
                // lay ra so giay
                const totalSec = Math.floor(audioDuration % 60);
                // update time cua bai hat
                timeEnd.innerText = `${totalMin < 10 ? `0${totalMin}` : `${totalMin}`}:${totalSec < 10 ? `0${totalSec}` : `${totalSec}`}`;
            })
            const currentMin = Math.floor(currentTime / 60);
            const currentSec = Math.floor(currentTime % 60);
            timeStart.innerText = `${currentMin < 10 ? `0${currentMin}` : `${currentMin}`}:${currentSec < 10 ? `0${currentSec}` : `${currentSec}`}`;
        }
        // xử lý khi tua bài hát
        progress.onchange = function(e) {
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        }

        // xử lý khi click next 
        nextBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandom();
            } else {
                _this.nextSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSongs();
        }
        // xử lý lùi bài hát
        prevBtn.onclick = function() {
            if(_this.isRandom) {
                _this.playRandom();
            } else {
                _this.prevSong();
            }
            audio.play();
            _this.render();
            _this.scrollToActiveSongs();
        }

        // xử lý random bài hát
        randomBtn.onclick = function() {
            _this.isRandom = !_this.isRandom
            _this.setConfig('isRandom', _this.isRandom);
            randomBtn.classList.toggle('control__active',_this.isRandom);

        }
        // xử lý phát lại 1 bài hát
        repeatBtn.onclick = function() {
            _this.isRepeat = !_this.isRepeat;
            _this.setConfig('isRepeat', _this.isRandom);
            repeatBtn.classList.toggle('control__active',_this.isRepeat)
        }
        // xử lý phát tiếp bài hát khi kết thúc
        audio.onended = function() {
            if(_this.isRepeat) {
                audio.play();
            } else {
                nextBtn.click();
            }
        }
        audio.onpause = function() {
            _this.isPlaying = false;
            tagTitle.innerText = 'Mp3 Của Cường';
            thumbIcon.forEach(function(item) {
                item.classList.remove('thumbs-icon-show')
            })
        }
        // lắng nghe hành vi click vào danh sách bài hát
        playList.onclick = function(e) {
            const songNode =  e.target.closest('.playlist__songs-item:not(.playlist__songs-item-active)');
            if(songNode || e.target.closest('.song__item-icon')) {
                    // click vào bài hát
                if(songNode) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong();
                    _this.render();
                    const websiteTitle = $$('.songs__item-name');
                    tagTitle.innerText = websiteTitle[songNode.dataset.index].textContent;
                    audio.play();
                }
                if(e.target.closest('.song__item-icon')) {

                }
            }
        }
        playlistSong.onclick = function(e) {
            const songNode2 =  e.target.closest('.song__page-item:not(.song__page-item-active)');
            if(songNode2 || e.target.closest('.item__right-icon')) {
                // click vào bài hát
                if(songNode2) {
                    _this.currentIndex = Number(songNode2.dataset.index)
                    _this.loadCurrentSong();
                    _this.render();
                    const websiteTitle = $$('.songs__item-name');
                    tagTitle.innerText = websiteTitle[songNode2.dataset.index].textContent;
                    audio.play();
                }
                if(e.target.closest('.song__item-icon')) {

                }
            }
        }
        
        playListMusic.onclick = function(e) {
            const songNode3 =  e.target.closest('.play-list__item:not(.play-list__item-active)');
            if(songNode3 || e.target.closest('.play-list__item-option')) {
                // click vào bài hát
                if(songNode3) {
                    app.currentIndex = Number(songNode3.dataset.index)
                    _this.loadCurrentSong();
                    _this.render();
                    const websiteTitle = $$('.songs__item-name');
                    const allItem = $$('.play-list__item');
                    tagTitle.innerText = websiteTitle[songNode3.dataset.index].textContent;
                    audio.play();
                }
                if(e.target.closest('.play-list__item-option')) {

                }
            }
            
        }
        // xu ly volume 
        volumeControl.addEventListener('mousemove', this.setVolume);
        // xu ly khi click vao cai loa
        volume.onclick = function() {
            const progressVolume = document.querySelector('.range__progress-volume')
            _this.isMute = !_this.isMute;
            if(_this.isMute) {
                volumeControl.value = 0;
                audio.volume = 0;
                progressVolume.style.width = volumeControl.value + '%';
                volume.classList.remove('ri-volume-up-line')
                volume.classList.add('ri-volume-mute-line')
            }
            else {
                volumeControl.value = 80;
                audio.volume = volumeControl.value / 100;
                progressVolume.style.width = volumeControl.value + '%';
                volume.classList.add('ri-volume-up-line')
                volume.classList.remove('ri-volume-mute-line')
            }
        }
        playAll.onclick = function() {
            _this.currentIndex = 0;
            _this.loadCurrentSong();
            _this.render();
            audio.play();
        }
        // Keyboard Event 
        window.onkeydown = function(e) {
            if(e.which === 32 && _this.isPlaying == false) {
                audio.play();
            }
            else if(e.which === 32 && _this.isPlaying == true) {
                player.classList.remove('playing');
                audio.pause();
                cdThumbAnimate.pause();
            } 
            else if(e.which === 109 || e.which === 77 && _this.isMute == false) {
                volumeControl.value = 80;
                audio.volume = volumeControl.value / 100;
                progressVolume.style.width = volumeControl.value + '%';
                volume.classList.add('ri-volume-up-line')
                volume.classList.remove('ri-volume-mute-line')
                _this.isMute = true;
            }
            else if(e.which === 109 || e.which === 77 && _this.isMute == true) {
                volumeControl.value = 0;
                audio.volume = 0;
                progressVolume.style.width = volumeControl.value + '%';
                volume.classList.remove('ri-volume-up-line')
                volume.classList.add('ri-volume-mute-line')
                _this.isMute = false;
            }
            else if(e.which === 38) {
                volumeControl.value++;
                progressVolume.style.width = volumeControl.value + '%';
                audio.volume = volumeControl.value / 100;
            }
            else if(e.which === 40) {
                volumeControl.value--;
                progressVolume.style.width = volumeControl.value + '%';
                audio.volume = volumeControl.value / 100;
            }
            else if(e.which === 39) {
                if(_this.isRandom) {
                    _this.playRandom();
                } else {
                    _this.nextSong();
                }
                audio.play();
            }
            else if(e.which === 37) {
                if(_this.isRandom) {
                    _this.playRandom();
                } else {
                    _this.prevSong();
                }
                audio.play();
            }
            else {

            }
        }
        // window.onkeydown = function(e) {
        //     
        // }
        
    },
    setVolume: function() {
        audio.volume = volumeControl.value / 100;
    },
    scrollToActiveSongs: function() {
        setTimeout(function() {
            $('.playlist__songs-item-active').scrollIntoView({
                behavior:'smooth',
                block: 'nearest'
            });

        },500)
    },
    loadCurrentSong: function() {
        nameSong.textContent = this.currentSong.name;
        nameSinger.textContent = this.currentSong.singer;
        cdThumb.src = this.currentSong.image;
        imgCurrent.src = this.currentSong.image;
        audio.src = this.currentSong.path;
    },
    loadConfig: function() {
        app.isRandom = app.config.isRandom;
        app.isRepeat = app.config.isRepeat;
    },
    nextSong: function() {
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        const itemName = $$('.songs__item-name')
        tagTitle.innerText = itemName[this.currentIndex].textContent;
        this.loadCurrentSong();
    },
    prevSong: function() {
        this.currentIndex--;
        if(this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        const itemName = $$('.songs__item-name')
        tagTitle.innerText = itemName[this.currentIndex].textContent;
        this.loadCurrentSong();
    },
    playRandom: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length);
        }while(newIndex === this.currentIndex);
        this.currentIndex = newIndex;
        const itemName = $$('.songs__item-name')
        tagTitle.innerText = itemName[this.currentIndex].textContent;
        this.loadCurrentSong();
    },
    start: function() {
        // gán cấu hình từ config vào web
        this.loadConfig();
        // định nghĩa các thuộc tính cho opject
        this.defineProperties();
        // lắng nghe và xử lý các sự kiện (DOM events)
        this.handleEvents();
        // tải bài hát đầu tiên 
        this.loadCurrentSong();
        // render danh sách bài hát
        app.renderPlayList();
        this.render();

        // hiện thị trạng thái ban đầu 
        randomBtn.classList.toggle('control__active',this.isRandom);
        repeatBtn.classList.toggle('control__active',this.isRepeat);
        
    }
}
app.start();
