import axios from 'axios';

export function getSymbol(setSymbol) {
    axios.get("/api/art/symbol")
    .then((res) => setSymbol(res.data))
}