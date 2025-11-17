
document.addEventListener('DOMContentLoaded', () => {
  const music = new Audio();

  const songs = [
    {
      id: '1',
      songName: `Mahaan<br><div class="subtitle">RockSun</div>`,
      poster: "img/17.png",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/17.mp3",
      artist: "RockSun"
    },
    {
      id: '2',
      songName: `Alan Walker - Fade <br><div class="subtitle">Alan Walker</div>`,
      poster: "img/2.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/2.mp3"
    },
    {
      id: '3',
      songName: `Cartoon - On & On <br><div class="subtitle">Daniel Levi</div>`,
      poster: "img/3.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/3.mp3"
    },
    {
      id: '4',
      songName: `Warriyo - Mortals <br><div class="subtitle">Mortals</div>`,
      poster: "img/4.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/4.mp3"
    },
    {
      id: '5',
      songName: `Ertugrul Gazi <br><div class="subtitle">Ertugrul</div>`,
      poster: "img/5.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/5.mp3"
    },
    {
      id: '6',
      songName: `Electronic Music <br><div class="subtitle">Electro</div>`,
      poster: "img/6.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/6.mp3"
    },
    {
      id: '7',
      songName: `Agar Tum Sath Ho <br><div class="subtitle">Tamashaa</div>`,
      poster: "img/7.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/7.mp3"
    },
    {
      id: '8',
      songName: `Suna Hai <br><div class="subtitle">Neha Kakkar</div>`,
      poster: "img/8.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/8.mp3"
    },
    {
      id: '9',
      songName: `Dilber <br><div class="subtitle">Satyameva Jayate</div>`,
      poster: "img/9.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/9.mp3"
    },
    {
      id: '10',
      songName: `Duniya <br><div class="subtitle">Luka Chuppi</div>`,
      poster: "img/10.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/10.mp3"
    },
    {
      id: '11',
      songName: `Lagdi Lahore Di <br><div class="subtitle">Street Dancer 3D</div>`,
      poster: "img/11.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/11.mp3"
    },
    {
      id: '12',
      songName: `Putt Jatt Da <br><div class="subtitle">Putt Jatt Da</div>`,
      poster: "img/12.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/12.mp3"
    },
    {
      id: '13',
      songName: `Baarishein <br><div class="subtitle">Atif Aslam</div>`,
      poster: "img/13.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/13.mp3"
    },
    {
      id: '14',
      songName: `Vaaste <br><div class="subtitle">Dhvani Bhanushali</div>`,
      poster: "img/14.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/14.mp3"
    },
    {
      id: '15',
      songName: `Lut Gaye <br><div class="subtitle">Jubin Nautiyal</div>`,
      poster: "img/15.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/15.mp3"
    },
    {
      id: '16',
      songName: `Dhundhala <br><div class="subtitle">Talwinder</div>`,
      poster: "img/16.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/16.mp3"
    },
    {
      id: '17',
      songName: `Mahaan <br><div class="subtitle">Rocksun</div>`,
      poster: "img/17.png",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/17.mp3"
    },
    {
      id: '18',
      songName: `Saltanat <br><div class="subtitle">Rocksun</div>`,
      poster: "img/saltanat.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/rocKsun - Russian Queen.mp3"
    },
    {
      id: '19',
      songName: `Russian Queen <br><div class="subtitle">Rocksun</div>`,
      poster: "img/russian-queen.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/rocKsun - Russian Queen.mp3"
    },
    {
      id: '20',
      songName: `Dominance<br><div class="subtitle">Rocksun</div> `,
      poster: "img/dominance.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/rocKsun - DOMINANCE (Beat By - Greco).mp3"
    },
    {
      id: '21',
      songName: `Rakkam <br><div class="subtitle">Rocksun</div>`,
      poster: "img/rakkam.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/rocKsun - Rakkam (Official Audio).mp3"
    },
    {
      id: '22',
      songName: `Samjho NA <br><div class="subtitle">Baliram RAthod</div>`,
      poster: "img/samjho na.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/Aditya Rikhari - SAMJHO NA ( NASAMAJH ).mp3"
    },
    {
      id: '23',
      songName: `Jaane na tu <br><div class="subtitle">Bhumi</div>`,
      poster: "img/janena.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/Jaane Na Tu (Official Music Video) _ Bhoomi  Almost Loved - EP  UR Debut  Latest Hindi Indie Song.mp3"
    },
    {
      id: '24',
      songName: `Lallati bhandar `,
      poster: "img/lallati.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/Lallati Bhandar - Lyrical Video  Jogwa  Ajay-Atul  Mukta Barve  Upendra Limaye  Kishor Kadam.mp3"
    },
    {
      id: '25',
      songName: `Nako Raste changle <br><div class="subtitle">Sambata</div>`,
      poster: "img/nako.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/Nako Raste Changle - SAMBATA l OFFICIAL VIDEO l (Prod.by KHAKIEE).mp3"
    },
    {
      id: '26',
      songName: `Pinaak <br><div class="subtitle">Sambata</div>`,
      poster: "img/pinaak.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/Pinnak.mp3"
    },
    {
      id: '27',
      songName: `Rx100 <br><div class="subtitle">MC Gawathi</div> `,
      poster: "img/rx100.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/RX100  MC GAWTHI  PROD.BY YD  OFFCIAL MUSIC VIDEO.mp3"
    },
    {
      id: '28',
      songName: `SAD GAANA <br><div class="subtitle">Bali</div>`,
      poster: "img/sad.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/SAD GAANA (Animated Video)  BALI  AN1K8T  KALA KHATTA EP.mp3"
    },
    {
      id: '29',
      songName: `SHOORVEER 3`,
      poster: "img/shoorveer3.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/SHOORVEER 3 - A Tribute to छतरपत शवज महरज  Rapperiya Baalam Ft. Shambho I Meetu Solanki.mp3"
    },
    {
      id: '30',
      songName: `Vazan<br><div class="subtitle"></div>`,
      poster: "img/vajan.jpg",
      file: "https://raw.githubusercontent.com/baliram072x/songs/main/Sambata x Karan Kanchan - Vazan (Official Video)  Red Bull 64 Bars  Def Jam India.mp3"
    },
  ];

  // Attach posters + names in UI (be defensive: only do for existing items)
  const songItems = Array.from(document.getElementsByClassName('songItem'));
  songItems.forEach((element, i) => {
    if (!songs[i]) return;
    const img = element.getElementsByTagName('img')[0];
    const h5 = element.getElementsByTagName('h5')[0];
    if (img) img.src = songs[i].poster;
    if (h5) h5.innerHTML = songs[i].songName;
  });

  const masterPlay = document.getElementById('masterPlay');
  const wave = document.getElementsByClassName('wave')[0];
  masterPlay && masterPlay.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
      music.play();
      masterPlay.classList.replace('bi-play-fill', 'bi-pause-fill');
      wave && wave.classList.add('active2');
    } else {
      music.pause();
      masterPlay.classList.replace('bi-pause-fill', 'bi-play-fill');
      wave && wave.classList.remove('active2');
    }
  });

  const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('playListPlay')).forEach(el => {
      el.classList.add('bi-play-circle-fill');
      el.classList.remove('bi-pause-circle-fill');
    });
  };

  const makeAllBackgrounds = () => {
    Array.from(document.getElementsByClassName('songItem')).forEach(el => {
      el.style.background = "rgb(105, 105, 170, 0)";
    });
  };

  let index = 0;
  const poster_master_play = document.getElementById('poster_master_play');
  const title = document.getElementById('title');

  Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
      const id = parseInt(e.target.id);
      if (Number.isNaN(id)) return;
      index = id;
      makeAllPlays();
      e.target.classList.remove('bi-play-circle-fill');
      e.target.classList.add('bi-pause-circle-fill');

      const s = songs[index - 1];
      if (!s) return;
      music.src = s.file;
      poster_master_play && (poster_master_play.src = s.poster);
      music.play();
      title && (title.innerHTML = s.songName);
      masterPlay && masterPlay.classList.replace('bi-play-fill', 'bi-pause-fill');
      wave && wave.classList.add('active2');

      makeAllBackgrounds();
      const songEls = document.getElementsByClassName('songItem');
      if (songEls[index - 1]) songEls[index - 1].style.background = "rgb(105, 105, 170, .1)";
    });
  });

  // Seek, volume, back/next (unchanged)
  const currentStart = document.getElementById('currentStart');
  const currentEnd = document.getElementById('currentEnd');
  const seek = document.getElementById('seek');
  const bar2 = document.getElementById('bar2');
  const dot = document.getElementsByClassName('dot')[0];

  music.addEventListener('timeupdate', () => {
    const curr = music.currentTime || 0;
    const dur = music.duration || 0;

    if (dur) {
      const min = Math.floor(dur / 60);
      let sec = Math.floor(dur % 60);
      if (sec < 10) sec = `0${sec}`;
      currentEnd && (currentEnd.innerText = `${min}:${sec}`);
    }

    const min1 = Math.floor(curr / 60);
    let sec1 = Math.floor(curr % 60);
    if (sec1 < 10) sec1 = `0${sec1}`;
    currentStart && (currentStart.innerText = `${min1}:${sec1}`);

    const progress = dur ? parseInt((curr / dur) * 100) : 0;
    if (seek) seek.value = progress;
    if (bar2) bar2.style.width = `${progress}%`;
    if (dot) dot.style.left = `${progress}%`;
  });

  seek && seek.addEventListener('change', () => {
    if (music.duration) music.currentTime = seek.value * music.duration / 100;
  });

  const vol_icon = document.getElementById('vol_icon');
  const vol = document.getElementById('vol');
  const vol_dot = document.getElementById('vol_dot');
  const vol_bar = document.getElementsByClassName('vol_bar')[0];

  vol && vol.addEventListener('change', () => {
    const v = +vol.value;
    if (v === 0) {
      vol_icon && vol_icon.classList.replace('bi-volume-down-fill', 'bi-volume-mute-fill');
    } else {
      vol_icon && vol_icon.classList.add('bi-volume-down-fill');
      vol_icon && vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if (v > 50) {
      vol_icon && vol_icon.classList.add('bi-volume-up-fill');
    } else {
      vol_icon && vol_icon.classList.remove('bi-volume-up-fill');
    }
    vol_bar && (vol_bar.style.width = `${v}%`);
    vol_dot && (vol_dot.style.left = `${v}%`);
    music.volume = v / 100;
  });

  const back = document.getElementById('back');
  const next = document.getElementById('next');

  back && back.addEventListener('click', () => {
    index--;
    if (index < 1) index = songs.length;
    const s = songs[index - 1];
    if (!s) return;
    music.src = s.file;
    poster_master_play && (poster_master_play.src = s.poster);
    title && (title.innerHTML = s.songName);
    music.play();
    makeAllPlays();
    const playBtn = document.getElementById(`${index}`);
    if (playBtn) playBtn.classList.add('bi-pause-circle-fill');
    makeAllBackgrounds();
    const songEls = document.getElementsByClassName('songItem');
    if (songEls[index - 1]) songEls[index - 1].style.background = "rgb(105, 105, 170, .1)";
  });

  next && next.addEventListener('click', () => {
    index++;
    if (index > songs.length) index = 1;
    const s = songs[index - 1];
    if (!s) return;
    music.src = s.file;
    poster_master_play && (poster_master_play.src = s.poster);
    title && (title.innerHTML = s.songName);
    music.play();
    makeAllPlays();
    const playBtn = document.getElementById(`${index}`);
    if (playBtn) playBtn.classList.add('bi-pause-circle-fill');
    makeAllBackgrounds();
    const songEls = document.getElementsByClassName('songItem');
    if (songEls[index - 1]) songEls[index - 1].style.background = "rgb(105, 105, 170, .1)";
  });


  // ---------------------
  // POPULAR SONG SCROLL
  // ---------------------
  const left_scroll = document.getElementById('left_scroll');
  const right_scroll = document.getElementById('right_scroll');
  const pop_song = document.querySelector('.pop_song');

  // compute a sensible scroll amount (one item width + margin)
  function getScrollAmount() {
    const first = pop_song && pop_song.querySelector('li');
    if (!first) return 300;
    const style = getComputedStyle(first);
    const marginRight = parseFloat(style.marginRight) || 10;
    return Math.round(first.clientWidth + marginRight);
  }

  // add listeners (safe-checks)
  if (left_scroll && right_scroll && pop_song) {
    const amount = getScrollAmount();
    left_scroll.addEventListener('click', () => {
      // try smooth scrollBy with fallback
      try {
        pop_song.scrollBy({ left: -amount, behavior: 'smooth' });
      } catch (err) {
        pop_song.scrollLeft = Math.max(0, pop_song.scrollLeft - amount);
      }
    });
    right_scroll.addEventListener('click', () => {
      try {
        pop_song.scrollBy({ left: amount, behavior: 'smooth' });
      } catch (err) {
        pop_song.scrollLeft = pop_song.scrollLeft + amount;
      }
    });
  }

  // popular artists scroll (same logic)
  const left_scrolls = document.getElementById('left_scrolls');
  const right_scrolls = document.getElementById('right_scrolls');
  const item_wrap = document.querySelector('.popular_artists .item');

  if (left_scrolls && right_scrolls && item_wrap) {
    const first = item_wrap.querySelector('li');
    const itemAmount = first ? Math.round(first.clientWidth + (parseFloat(getComputedStyle(first).marginRight) || 20)) : 120;
    left_scrolls.addEventListener('click', () => {
      try { item_wrap.scrollBy({ left: -itemAmount, behavior: 'smooth' }); } catch (e) { item_wrap.scrollLeft -= itemAmount; }
    });
    right_scrolls.addEventListener('click', () => {
      try { item_wrap.scrollBy({ left: itemAmount, behavior: 'smooth' }); } catch (e) { item_wrap.scrollLeft += itemAmount; }
    });
  }

  // ---------------------
  // SEARCH (keeps working)
  // ---------------------
  const search = document.getElementById("search");
  // Use live NodeList each keyup — because search hides elements and we want current DOM nodes
  search && search.addEventListener("keyup", () => {
    const value = search.value.toLowerCase().trim();
    document.querySelectorAll(".songItem").forEach(song => {
      const h = song.querySelector("h5");
      const titleText = h ? h.innerText.toLowerCase() : "";
      song.style.display = titleText.includes(value) ? "flex" : "none";
    });
  });

});


// ===================================================================
function showPlaylist(artistName) {
  const playlistEl = document.getElementById('playlist-songs');
  playlistEl.innerHTML = ""; // Clear previous
  const filteredSongs = songs.filter(song => song.artist === artistName);

  filteredSongs.forEach(song => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${song.poster}" style="width:40px;height:40px;vertical-align:middle;margin-right:10px;" />
      <span>${song.songName.replace(/<br>.*/, "")}</span>
      <button onclick="playSong('${song.file}', '${song.poster}', '${song.songName}')">Play</button>
    `;
    playlistEl.appendChild(li);
  });
}

function playSong(file, poster, songName) {
  const music = document.querySelector('audio') || new Audio();
  music.src = file;
  music.play();

  // Optionally update UI:
  document.getElementById('poster_master_play').src = poster;
  document.getElementById('title').innerHTML = songName;
}

const songItems = Array.from(document.getElementsByClassName('songItem'));
songItems.forEach((element, i) => {
  const s = songs[i];
  if (!s) return;

  const img = element.querySelector('img');
  const h5 = element.querySelector('h5');
  const subtitle = element.querySelector('.subtitle');

  if (img) img.src = s.poster;
  if (h5) h5.innerHTML = s.songName;
  if (subtitle) subtitle.innerHTML = s.artist || '';
});

function showPlaylist(artistName) {
  const playlistEl = document.getElementById('playlist-songs');
  if (!playlistEl) return;

  playlistEl.innerHTML = ""; // Clear previous songs

  // Filter songs based on artist name
  const filteredSongs = songs.filter(song => song.artist && song.artist.toLowerCase() === artistName.toLowerCase());

  filteredSongs.forEach((song, i) => {
    const li = document.createElement('li');
    li.classList.add('songItem');
    li.innerHTML = `
      <div class="img_play">
        <img src="${song.poster}" alt="${song.songName}" style="width:60px;height:60px;object-fit:cover;">
        <i class="bi playListPlay bi-play-circle-fill" id="playlist-${i + 1}"></i>
      </div>
      <h5>
        ${song.songName.replace(/<br>.*/, "")}
        <br>
        <div class="subtitle">${song.artist}</div>
      </h5>
    `;
    playlistEl.appendChild(li);

    // Attach click to play button
    li.querySelector('.playListPlay').addEventListener('click', () => {
      playSong(song.file, song.poster, song.songName);
    });
  });
}



// // Marathi HipHop songs (same songs but alag array)
// const marathiHipHopSongs = [
//   {
//     id: '101', songName: `Mahaan<br><div class="subtitle">RockSun</div>`,
//     poster: "img/17.png",
//     file: "https://raw.githubusercontent.com/baliram072x/songs/main/17.mp3",
//     artist: "RockSun"
//   },
//   {
//     id: '102',
//     songName: `Lallati bhandar`,
//     poster: "img/lallati.jpg", file: "https://raw.githubusercontent.com/baliram072x/songs/main/Lallati Bhandar - Lyrical Video  Jogwa  Ajay-Atul  Mukta Barve  Upendra Limaye  Kishor Kadam.mp3",
//     artist: "Ajay-Atul"
//   },
//   {
//     id: '103',
//     songName: `Nako Raste changle <br><div class="subtitle">Sambata</div>`,
//     poster: "img/nako.jpg",
//     file: "https://raw.githubusercontent.com/baliram072x/songs/main/Nako Raste Changle - SAMBATA l OFFICIAL VIDEO l (Prod.by KHAKIEE).mp3",
//     artist: "Sambata"
//   },
//   {
//     id: '104',
//     songName: `Pinaak <br><div class="subtitle">Sambata</div>`,
//     poster: "img/pinaak.jpg", file: "https://raw.githubusercontent.com/baliram072x/songs/main/Pinnak.mp3",
//     artist: "Sambata"
//   },
//   {
//     id: '105',
//     songName: `Vazan<br><div class="subtitle"></div>`,
//     poster: "img/vajan.jpg",
//     file: "https://raw.githubusercontent.com/baliram072x/songs/main/Sambata x Karan Kanchan - Vazan (Official Video)  Red Bull 64 Bars  Def Jam India.mp3",
//     artist: "Sambata x Karan Kanchan"
//   }
// ];

// const marathiSongsDiv = document.getElementById("marathi_songs");
// const music = document.getElementById("audio"); // assume aapke page me <audio id="audio"></audio> hai
// const poster_master_play = document.getElementById("poster_master_play"); // main poster
// const title = document.getElementById("title"); // main title display

// // Populate Marathi songs dynamically
// marathiHipHopSongs.forEach(song => {
//   const li = document.createElement("li");
//   li.classList.add("songItem");
//   li.innerHTML = `
//     <div class="img_play">
//       <img src="${song.poster}" alt="${song.artist}">
//       <i class="bi playListPlay bi-play-circle-fill" id="${song.id}"></i>
//     </div>
//     <h5>${song.songName}</h5>
//   `;
//   marathiSongsDiv.appendChild(li);
// });

// // Add play event
// document.querySelectorAll(".playListPlay").forEach((element) => {
//   element.addEventListener("click", (e) => {
//     let song = marathiHipHopSongs.find(s => s.id === e.target.id);
//     if(song){
//       music.src = song.file;
//       music.play();
//       poster_master_play.src = song.poster;
//       title.innerHTML = song.songName;
//     }
//   });
// });


//     const marathiHipHopSongs = [
//   {
//     id: '101',
//     songName: `Mahaan<br><div class="subtitle">RockSun</div>`,
//     poster: "img/17.png",
//     file: "https://raw.githubusercontent.com/baliram072x/songs/main/17.mp3",
//     artist: "RockSun"
//   },
//   {
//     id: '102',
//     songName: `Lallati bhandar`,
//     poster: "img/lallati.jpg",
//     file: "https://raw.githubusercontent.com/baliram072x/songs/main/Lallati Bhandar - Lyrical Video  Jogwa  Ajay-Atul  Mukta Barve  Upendra Limaye  Kishor Kadam.mp3",
//     artist: "Ajay-Atul"
//   },
//   {
//     id: '103',
//     songName: `Nako Raste changle <br><div class="subtitle">Sambata</div>`,
//     poster: "img/nako.jpg",
//     file: "https://raw.githubusercontent.com/baliram072x/songs/main/Nako Raste Changle - SAMBATA l OFFICIAL VIDEO l (Prod.by KHAKIEE).mp3",
//     artist: "Sambata"
//   }
// ];

// const marathiSongsDiv = document.getElementById("marathi_songs");
// const music = document.getElementById("audio"); // audio tag
// const poster_master_play = document.getElementById("poster_master_play");
// const title = document.getElementById("title");

// function showMarathiSongs(array){
//   marathiSongsDiv.innerHTML = ""; // clear previous

//   array.forEach(song => {
//     const li = document.createElement("li");
//     li.classList.add("songItem");
//     li.innerHTML = `
//       <div class="img_play">
//         <img src="${song.poster}" alt="${song.artist}">
//         <i class="bi playListPlay bi-play-circle-fill" id="${song.id}"></i>
//       </div>
//       <h5>${song.songName}</h5>
//     `;
//     marathiSongsDiv.appendChild(li);

//     // Event listener for play button **here inside loop**
//     li.querySelector(".playListPlay").addEventListener("click", () => {
//       music.src = song.file;
//       music.play();
//       poster_master_play.src = song.poster;
//       title.innerHTML = song.songName;
//     });
//   });
// }

// // Call the function once
// showMarathiSongs(marathiHipHopSongs);
document.addEventListener('DOMContentLoaded', () => {
    const marathiSongs = [
        {
            id: '101',
            songName: `Lallati Bhandar <br><div class="subtitle">Jogwa</div>`,
            poster: "img/lallati.jpg",
            file: "https://raw.githubusercontent.com/baliram072x/songs/main/Lallati Bhandar - Lyrical Video  Jogwa  Ajay-Atul  Mukta Barve  Upendra Limaye  Kishor Kadam.mp3"
        },
        {
            id: '102',
            songName: `Nako Raste changle <br><div class="subtitle">Sambata</div>`,
            poster: "img/nako.jpg",
            file: "https://raw.githubusercontent.com/baliram072x/songs/main/Nako Raste Changle - SAMBATA l OFFICIAL VIDEO l (Prod.by KHAKIEE).mp3"
        },
        {
            id: '103',
            songName: `Pinaak <br><div class="subtitle">Sambata</div>`,
            poster: "img/pinaak.jpg",
            file: "https://raw.githubusercontent.com/baliram072x/songs/main/Pinnak.mp3"
        },
        {
            id: '104',
            songName: `Rx100 <br><div class="subtitle">MC Gawathi</div>`,
            poster: "img/rx100.jpg",
            file: "https://raw.githubusercontent.com/baliram072x/songs/main/RX100  MC GAWTHI  PROD.BY YD  OFFCIAL MUSIC VIDEO.mp3"
        }
        // Add more Marathi Hiphop songs here
    ];

    const marathiContainer = document.getElementById('marathi_songs');

    marathiSongs.forEach(song => {
        const li = document.createElement('li');
        li.classList.add('songItem');

        li.innerHTML = `
            <div class="img_play">
                <img src="${song.poster}" alt="Marathi Song">
                <i class="bi playListPlay bi-play-circle-fill" id="${song.id}"></i>
            </div>
            <h5>${song.songName}</h5>
        `;
        marathiContainer.appendChild(li);
    });

    // Add play functionality similar to your main songs array
    Array.from(document.getElementsByClassName('playListPlay')).forEach((element) => {
        element.addEventListener('click', (e) => {
            const id = e.target.id;
            const song = marathiSongs.find(s => s.id === id) || songs.find(s => s.id === id);
            if (!song) return;

            music.src = song.file;
            poster_master_play.src = song.poster;
            title.innerHTML = song.songName;
            music.play();
            masterPlay.classList.replace('bi-play-fill', 'bi-pause-fill');
            wave.classList.add('active2');

            makeAllPlays();
            e.target.classList.remove('bi-play-circle-fill');
            e.target.classList.add('bi-pause-circle-fill');

            makeAllBackgrounds();
            const songEls = Array.from(document.getElementsByClassName('songItem'));
            const index = songEls.findIndex(el => el.contains(e.target));
            if (songEls[index]) songEls[index].style.background = "rgb(105, 105, 170, .1)";
        });
    });
});
