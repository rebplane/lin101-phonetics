import axios from 'axios';

export function getSyllable(setSyllable) {
    axios.get("/api/syllable")
    .then((res) => setSyllable(res.data))
    // .then((res) => console.log(res.data))
}