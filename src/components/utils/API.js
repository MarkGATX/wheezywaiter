import axios from 'axios';


const wheezyVidLookup = async () =>
  axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=4&playlistId=UUQL5ABUvwY7YoW5lgMyAS_w&key=${process.env.REACT_APP_YT_API_KEY}`)
  .then((res) => console.log(res))

export default { wheezyVidLookup };