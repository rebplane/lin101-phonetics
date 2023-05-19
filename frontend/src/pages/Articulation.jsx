import { React, useEffect, useState }from 'react'
import { getSymbol } from '../api/articulation';

import './Home.css';

import Header from '../components/Header'
import Vowel from '../components/Vowel';

function Articulation() {
    
    const [symbol, setSymbol] = useState({});

    useEffect(() => {
        getSymbol(setSymbol);
    }, [])
    
    return (
        <div>
            <Header/>
            <div className="articulation">
                <h1><u>Articulation</u></h1>
                <h1 className="symbol">{symbol.symbol}</h1>
                <div className="vowel">
                    {symbol.type === 'v' && <Vowel id={symbol._id} key={symbol._id} symbol={symbol}></Vowel>}
                    <p>{symbol.type}</p>
                </div>
            </div>
        </div>
    )
}

export default Articulation