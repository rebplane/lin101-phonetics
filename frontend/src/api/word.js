import axios from 'axios';

export function getWord(setWord) {
    axios.get("/api/word")
    .then((res) => setWord(res.data[0]))
}