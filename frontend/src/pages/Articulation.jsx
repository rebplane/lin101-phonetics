import { React, useEffect, useState }from 'react'
import { getSymbol } from '../api/articulation';

import './Home.css';

import Header from '../components/Header'
import Vowel from '../components/Vowel';
import Consonant from '../components/Consonant';

function Articulation() {
    
    const [symbol, setSymbol] = useState({});
    const [vowelProperties, setVowelProperties] = useState({height: "", backness: "", roundness: ""})
    const [consonantProperties, setConsonantProperties] = useState({voicing: "", place: "", manner: ""})

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
                    {symbol.type === 'v' && <Vowel symbol={symbol} properties={vowelProperties} setProperties={setVowelProperties}></Vowel>}
                </div>
                <div className="consonant">
                    {symbol.type === 'c' && <Consonant symbol={symbol} properties={consonantProperties} setProperties={setConsonantProperties}/>}
                </div>
            </div>
        </div>
    )
}

export default Articulation