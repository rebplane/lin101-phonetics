import axios from 'axios';

export function getSymbol(setSymbol) {
    axios.get("/api/art/symbol")
    .then((res) => {
        setSymbol(res.data[0])
        console.log(res.data[0])
    })
    // .then((res) => console.log(res.data[0]))
}