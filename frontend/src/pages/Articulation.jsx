import { React, useEffect, useState }from 'react'
import { getSymbol } from '../api/articulation';
import Button from 'react-bootstrap/Button';

import './Home.css';

import Header from '../components/Header'
import Vowel from '../components/Vowel';
import Consonant from '../components/Consonant';

function Articulation() {
    
    const [symbol, setSymbol] = useState({});
    const [vowelProperties, setVowelProperties] = useState({height: "", backness: "", rounding: ""})
    const [consonantProperties, setConsonantProperties] = useState({voicing: "", place: "", manner: ""})

    // States for correctness or question/answer state
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null)
    const [flagNext, setFlagNext] = useState(false);

    useEffect(() => {
        getSymbol(setSymbol);
    }, [flagNext])

    const onSubmit = e => {
        setIsAnswered(true)
        // Vowel
        if (symbol.type === 'v') {
            if (symbol.height === vowelProperties.height && symbol.backness === vowelProperties.backness && symbol.rounding === vowelProperties.rounding) {
                setIsCorrect(true)
            } 
            else {
                setIsCorrect(false)
            }
        }
        // Consonant
        else {
            if (symbol.voicing === consonantProperties.voicing && symbol.place_of_articulation === consonantProperties.place_of_articulation && symbol.manner_of_articulation === consonantProperties.manner_of_articulation) {
                setIsCorrect(true)
            } else {
                setIsCorrect(false)
            }
        }
        e.preventDefault()
    }

    const onNext = e => {
        // Reset flags and states
        setVowelProperties({height: "", backness: "", rounding: ""})
        setConsonantProperties({voicing: "", place: "", manner: ""})
        setIsAnswered(false)
        setIsCorrect(null)
        setFlagNext(!flagNext)

        e.preventDefault()
    }
    
    return (
        <div>
            <Header/>
            <div className="articulation">
                <h1><u>Articulation</u></h1>
                <h1 className="symbol">{symbol.symbol}</h1>
                <div className="vowel">
                    {symbol.type === 'v' && <Vowel symbol={symbol} properties={vowelProperties} setProperties={setVowelProperties}></Vowel>}
                    {symbol.type === 'v' && isAnswered && isCorrect && <h5 className="correct">Correct! {symbol.symbol} is a {symbol.height} {symbol.backness} {symbol.rounding} vowel.</h5> }
                    {symbol.type === 'v' && isAnswered && !isCorrect && <h5 className="incorrect">Incorrect. {symbol.symbol} is a {symbol.height} {symbol.backness} {symbol.rounding} vowel.</h5> }
                </div>
                <div className="consonant">
                    {symbol.type === 'c' && <Consonant symbol={symbol} properties={consonantProperties} setProperties={setConsonantProperties}/>}
                    {symbol.type === 'c' && isAnswered && isCorrect && <h5 className="correct">Correct! {symbol.symbol} is a {symbol.voicing} {symbol.place_of_articulation} {symbol.manner_of_articulation}.</h5> }
                    {symbol.type === 'c' && isAnswered && !isCorrect && <h5 className="incorrect">Incorrect. {symbol.symbol} is a {symbol.voicing} {symbol.place_of_articulation} {symbol.manner_of_articulation}.</h5> }
                </div>
                {(symbol.type === 'c' || symbol.type === 'v') && !isAnswered && <Button variant="secondary" size="lg" onClick={onSubmit}> Check Answer</Button>}
                {(symbol.type === 'c' || symbol.type === 'v') && isAnswered &&<Button variant="secondary" size="lg" onClick={onNext}> Next </Button>}
            </div>
        </div>
    )
}

export default Articulation