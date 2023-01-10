import axios from 'axios';

const wheezyVidLookup = async () =>
  axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=UUQL5ABUvwY7YoW5lgMyAS_w&key=AIzaSyDGDT1155riKqwcNDoAmITd4Rm2h8P8Xw4`)
  .then((res) => console.log(res))

export default { wheezyVidLookup };