
const loading = document.getElementById('loading');
window.addEventListener('load',function() {
    loading.style.display = "none";
})



const navItem = document.querySelectorAll('.nav__bar-item')
const pages = document.querySelectorAll('.page')
const historySearch = document.querySelector('.histories-search');

// nav menu button
const primaryPageBtn = document.getElementById('primary');
const songPageBtn = document.getElementById('thesong');
const playlistPageBtn = document.getElementById('playlist');
const artistPageBtn = document.getElementById('artist');
const albumPageBtn = document.getElementById('album');
const mvPageBtn = document.getElementById('mv');
const uploadPageBtn = document.getElementById('upload');
const titleSongBtn = document.querySelector('.playlist__title--songs');
const titlePlaylist = document.querySelector('.playlist__title--playlist');
const navLibrarys = document.querySelectorAll('.nav__library-item');

// page 
const overViewPage = document.getElementById('overview');
const songPage = document.getElementById('song-page');


function loadPage(check, add) {
    // lay ra tat ca cac trang 
    pages.forEach(function(item) {
        // kiem tra xem co phai la trang da chon hay khong
        if(item.closest(check)) {
            // neu chon thi none cac trang con lai
            item.classList.add(add);
        }
        else {
            item.classList.remove(add);
        }
    })
}
navLibrarys[0].onclick = function() {
    app.renderSong();
    navItem.forEach(function(item) {
        if(item.id === 'thesong') {
            songPageBtn.classList.add('isactive');
        } else {
            item.classList.remove('isactive')
        }
    })
    loadPage('.page:not(.song__page)','hidden-page')

}
navLibrarys[1].onclick = function() {
    navItem.forEach(function(item,index) {
        if(item.id === 'playlist') {
            playlistPageBtn.classList.add('isactive');
        } else {
            item.classList.remove('isactive')
        }
    })
    loadPage('.page:not(.playlist__page)','hidden-page')
    
}
primaryPageBtn.onclick = function() {
    loadPage('.page:not(.overview)','hidden-page')
}
songPageBtn.onclick = function() {
    app.renderSong();
    loadPage('.page:not(.song__page)','hidden-page')
}
titleSongBtn.onclick = function() {
    app.renderSong();
    primaryPageBtn.classList.remove('isactive');
    songPageBtn.classList.add('isactive');
    loadPage('.page:not(.song__page)','hidden-page')
}

titlePlaylist.onclick = function() {
    songPageBtn.classList.remove('isactive');
    primaryPageBtn.classList.remove('isactive');
    playlistPageBtn.classList.add('isactive');
    loadPage('.page:not(.playlist__page)','hidden-page')
}
playlistPageBtn.onclick = function() {
    loadPage('.page:not(.playlist__page)','hidden-page')
}
artistPageBtn.onclick = function() {
    loadPage('.page:not(.artist__page)','hidden-page')
}
albumPageBtn.onclick = function() {
    loadPage('.page:not(.album__page)','hidden-page')
}
mvPageBtn.onclick = function() {
    loadPage('.page:not(.mv__page)','hidden-page')
}
uploadPageBtn.onclick = function() {
    loadPage('.page:not(.upload__page)','hidden-page')
}
/* ========================== HANDLE EVENT ON PAGE ============================ */

// modal skin
const modalClose = document.querySelector('.modal-skin__close');
const modalSkinOverlay = document.querySelector('.modal-skin__container');
const modalSkinContent = document.querySelector('.modal-skin__content');
const modalSkin = document.querySelector('.modal-skin');
const modalSkinBtn = document.getElementById('header-skin');
modalSkinBtn.onclick = function() {
    modalSkin.classList.add('show-modal-skin');
} 
modalSkinContent.onclick = function(e) {
    e.stopPropagation();
}
modalSkinOverlay.onclick = function() {
    modalSkin.classList.remove('show-modal-skin')
}
modalClose.onclick = function() {
    modalSkin.classList.remove('show-modal-skin')
}


// switch
const subTwo = document.getElementById('sub-two');
const settingItem = document.querySelector('.setting__sub-item-two');
const switchFullScreen = document.getElementById('switch-full-screen');
settingItem.onclick = function(e) {
    if(switchFullScreen.classList.contains('switch--on')) {
        switchFullScreen.classList.replace('switch--on','switch--off');
    } else {
        switchFullScreen.classList.replace('switch--off','switch--on');
    }
}

subTwo.onclick = function(e) {
    e.stopPropagation();
}
historySearch.onmousedown = function(e) {
    e.preventDefault();
}
// modal setting 

// sub modal
const subMobdalBtn = document.querySelectorAll('.setting__sub-item');
subMobdalBtn.forEach(function(item) {
    item.onclick = function(e) {
        
        var element = document.querySelector('.setting__sub-item.setting__sub-acvite');
        element.classList.remove('setting__sub-acvite')
        this.classList.add('setting__sub-acvite');
    }
})

// element modal play list
const modalPlaylist = document.querySelector('.modal-playlist')
const modalContainer = document.querySelector('.modal-playlist__container');
const modalPlaylistInput = document.querySelector('.modal-playlist__input')
const modalPlaylistBtn = document.querySelector('.modal-playlist-btn');
const addPlaylistBtn = document.querySelector('.add__playlist');
const modalContent = document.querySelector('.modal-playlist__content');
const addPlayListBtn2 = document.querySelectorAll('.playlist-bottom__new');
const switchModalPlayList = document.querySelectorAll('.modal-playlist__option-btn');

switchModalPlayList.forEach(function(item) {
    item.onclick = function(e) {
        e.stopPropagation();
        if(item.classList.contains('switch--on')) {
            item.classList.replace('switch--on','switch--off');
        } else {
            item.classList.replace('switch--off','switch--on');
        }
    }   
})

// element modal library
const modalLibrary = document.querySelector('.modal-library');
const navLibrary = document.querySelector('.nav__library-setting');
const modalLibraryContainer = document.querySelector('.modal-library__container')
const modalLibraryBtnClose = document.querySelector('.btn-close');
const modalLibraryBtnSave = document.querySelector('.btn-save');
const modalCheck = document.querySelectorAll('.modal-library__check');

// element logout 
const logOutBtn = document.querySelector('.user__btn');
const userLogOut = document.getElementById('logout');
const userIcon = document.querySelector('.user__icon')

userLogOut.addEventListener("click", function(evt) {
    evt.stopPropagation();
});


modalCheck.forEach(function(item) {
    item.onchange = function() {
        let totalCheck = 0;
        for (let index = 0; index < modalCheck.length; index++) {
            if(modalCheck[index].checked == true) {
                totalCheck += 1;
            }
        }
        if(totalCheck >= 2 ) {
            modalLibraryBtnSave.classList.remove('btn-disable')
        } else {
            modalLibraryBtnSave.classList.add('btn-disable')
        }
    }
})

modalPlaylistInput.oninput = function() {
    if(modalPlaylistInput.value != '') {
        modalPlaylistBtn.classList.remove('btn-disable')
    } else {
        modalPlaylistBtn.classList.add('btn-disable')
    }
}
addPlaylistBtn.onclick = function(e) {
    modalPlaylist.classList.add('show-modal-playlist')
}
addPlayListBtn2.forEach(function(item) {
    item.onclick = function() {
        modalPlaylist.classList.add('show-modal-playlist')
    }
})
modalLibraryBtnClose.onclick = function() {
    modalLibrary.classList.remove('show-modal-library')
}

navLibrary.onclick = function(e) {
    modalLibrary.classList.add('show-modal-library');
}
logOutBtn.onclick = function(e) {
    userLogOut.classList.toggle('show__logout');
}


const playListSong = document.querySelector('.play-list');
const controlPlayList = document.querySelector('.control__playlist');
const controlIcon = document.querySelector('.control__playlist-icon');
playListSong.onclick = function(e) {
    e.stopPropagation();
}

const modalSettingBtn = document.getElementById('js-setting');
const modalSettingIcon = modalSettingBtn.querySelector('i');
const headerModalSetting = document.querySelector('.header__modal-setting');
const playEr = document.querySelector('.player');
headerModalSetting.onclick = function(e) {
    e.stopPropagation();
}
playEr.onclick = function(e) {
    if(e.target !== controlPlayList && e.target !== controlIcon) {
        e.stopPropagation();
    }
}
const x =document.getElementById('header-skin');
window.onclick = function(e) {
    // user logout
    {
        if(e.target === modalContainer){
            modalPlaylist.classList.remove('show-modal-playlist')
        }
        else if (e.target === modalLibraryContainer) {
            modalLibrary.classList.remove('show-modal-library');
        }
        else if(e.target === logOutBtn || e.target === userIcon) {
        }
        else if(e.target !== userLogOut) {
            userLogOut.classList.remove('show__logout');
        }
    }
    // play list song
    {
        if(e.target === controlPlayList || e.target === controlIcon) {
            controlPlayList.classList.toggle('control__playlist-active')
            playListSong.classList.toggle('play-list-active');
        } else if(e.target !== playListSong && e.target !== playEr) {
            controlPlayList.classList.remove('control__playlist-active')
            playListSong.classList.remove('play-list-active');
        }
    }
    // setting modal
    if(e.target === modalSettingBtn || e.target === modalSettingIcon) {
        
        headerModalSetting.classList.toggle('show-modal-setting');
    }
    else if (e.target !== headerModalSetting) {
        headerModalSetting.classList.remove('show-modal-setting');
    }
}
window.onkeyup = function(e) {
    if(e.which === 27) {
        modalPlaylist.classList.remove('show-modal-playlist')
        modalLibrary.classList.remove('show-modal-library');
        headerModalSetting.classList.remove('show-modal-setting')
        modalSkin.classList.remove('show-modal-skin')
    }
}
headerModalSetting.onclick = function(e) {
    e.stopPropagation();
}

// theme 

const allBtnTheme = document.querySelectorAll('.theme-color');
const allText = document.querySelectorAll('.modal-skin__option-text')
allText.forEach(function(item) {
    item.onclick = function(e) {
        e.stopPropagation();
    } 
})
allBtnTheme.forEach(function(item) {
    item.onclick = function(e) {
        const btnThemeActive = document.querySelector('.modal-skin__option-overlay.theme-color.theme-active');
        btnThemeActive.classList.remove('theme-active');
        this.classList.add('theme-active');
    }
})

const bodyElement = document.getElementById('body');
const darkThemeBtn = document.getElementById('dark-theme');
const primaryThemeBtn = document.getElementById('primary-theme');
const darkBlueThemeBtn = document.getElementById('dark-blue-theme');
const lightBlueThemeBtn = document.getElementById('light-blue-theme');
const darkGreenThemeBtn = document.getElementById('dark-green-theme');
const darkBrownThemeBtn = document.getElementById('dark-brown-theme');
const darkPinkThemeBtn = document.getElementById('dark-pink-theme');
const darkRedThemeBtn = document.getElementById('dark-red-theme');

const lightThemeBtn = document.getElementById('light-theme');
const lightGreyThemeBtn = document.getElementById('light-grey-theme');
const lightCyanThemeBtn = document.getElementById('light-cyan-theme');
const lightPinkThemeBtn = document.getElementById('light-pink-theme');

const themes = ['dark-theme', 'dark-blue-theme', 'light-blue-theme', 'dark-green-theme', 'dark-brown-theme', 'dark-pink-theme', 'dark-red-theme',
                'light-theme', 'light-grey-theme', 'light-cyan-theme', 'light-pink-theme'
] 
primaryThemeBtn.onclick = function() {
    bodyElement.className = '';
}
darkThemeBtn.onclick = function() {
    bodyElement.className = themes[0];
}
darkBlueThemeBtn.onclick = function() {
    bodyElement.className = themes[1];
}
lightBlueThemeBtn.onclick = function() {
    bodyElement.className = themes[2];
}
darkGreenThemeBtn.onclick = function() {
    bodyElement.className = themes[3];
}
darkBrownThemeBtn.onclick = function() {
    bodyElement.className = themes[4];
}
darkPinkThemeBtn.onclick = function() {
    bodyElement.className = themes[5];
}
darkRedThemeBtn.onclick = function() {
    bodyElement.className = themes[6];
}
lightThemeBtn.onclick = function() {
    bodyElement.className = themes[7];
}
lightGreyThemeBtn.onclick = function() {
    bodyElement.className = themes[8];
}
lightCyanThemeBtn.onclick = function() {
    bodyElement.className = themes[9];
}
lightPinkThemeBtn.onclick = function() {
    bodyElement.className = themes[10];
}
const playListText = document.querySelectorAll('.play-list__text');
playListText.forEach(function(item) {
    item.onclick = function() {
        var xx = document.querySelector('.play-list__text.is-active');
        xx.classList.remove('is-active');
        item.classList.add('is-active');
    }
})
