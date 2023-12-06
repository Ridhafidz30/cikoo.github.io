const audio = document.getElementById("myAudio");
const lyricsContainer = document.getElementById("lyrics-container");
const lyricsText = document.getElementById("lyrics");
const lyrics = [
  { time: 33, text: "tak Sadar ku temukan" },
  { time: 37, text: "temukan wanita rupawan yang sadarkan" },
  { time: 42, text: "dia seorang tiada lain tiada bukan" },
  { time: 48, text: "hanya dia" },
  { time: 57, text: "Dia buatku nyaman" },
  { time: 63, text: "Dalam hangat pelukan" },
  { time: 67, text: "Dia perasa, yang mengerti yang kurasa" },
  { time: 73, text: "Hanya dia" },
  { time: 80, text: "Kan ku arungi tujuh laut samudra" },
  { time: 85, text: "Kan ku daki pegunungan himalaya" },
  { time: 92, text: "Apapun kan ku lakukan tuk dirimu sayang" },
  { time: 97.3, text: "Oh Penjaga Hati" },
  { time: 113, text: "Kau dan aku sempurna" },
  { time: 117.2, text: "Semoga ada cara tuk terus bersama" },
  { time: 122, text: "Selalu ku tunggu" },
  { time: 125, text: "Tak mau berlalu" },
  { time: 128.6, text: "kau dan aku" },
  { time: 135, text: "Kan ku arungi tujuh laut samudra" },
  { time: 140, text: "Kan ku daki pegunungan himalaya" },
  { time: 147, text: "Apapun kan ku lakukan tuk dirimu sayang" },
  { time: 152.3, text: "Oh Penjaga Hatiku" },
  { time: 160, text: "Interlude" },
  { time: 185, text: "Kan ku arungi tujuh laut samudra" },
  { time: 190, text: "Kan ku daki pegunungan himalaya" },
  { time: 197, text: "Apapun kan ku lakukan tuk dirimu sayang" },
  { time: 202.3, text: "Oh Penjaga Hatiku" },
  { time: 209, text: "Karna bersamamu semua terasa indah" },
  { time: 215, text: "Gundah gulana hatiku tlah hancur sirna" },
  {
    time: 221,
    text: "Janjiku tak kan ku lepas wahai kau bidadariku dari surga",
  },
  { time: 230, text: "Tuk Selamanya" },
  { time: 33 },
];

audio.addEventListener("timeupdate", function () {
  for (const i = 0; i < lyrics.length; i++) {
    if (audio.currentTime >= lyrics[i].time) {
      lyricsText.innerHTML = lyrics[i].text;
      const animationDuration =
        (lyrics[i + 1] ? lyrics[i + 1].time : audio.duration) - lyrics[i].time;
      lyricsText.style.animation = "moveText ${animationDuration}s linear";
    }
  }
});
