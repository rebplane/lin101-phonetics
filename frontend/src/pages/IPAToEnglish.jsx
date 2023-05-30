import { React, useState, useEffect } from 'react'
import { getWord } from '../api/word';
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';

function IPAToEnglish() {

    const [word, setWord] = useState({});
    // States for correctness or question/answer state
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null)
    const [flagNext, setFlagNext] = useState(false);

    useEffect(() => {
        getWord(setWord);
    }, [flagNext])

    return (
        <div>
            <Header/>
            <div className="ipa-to-english">
                <h1><u>IPA to English</u></h1>
                <p>Choose the English word that corresponds to the IPA transcription.</p>
                <h2>{word.ipa_transcription}</h2>
                {/* {word.word_list} */}
                {word.word_list && <Button variant="secondary" size="md"> {word.word_list[0]}</Button>}
                {word.word_list && <Button variant="secondary" size="md"> {word.word_list[1]} </Button>}
                {word.word_list && <Button variant="secondary" size="md"> {word.word_list[2]}</Button>}
                {word.word_list && <Button variant="secondary" size="md"> {word.word_list[3]} </Button>}
            </div>
        </div>
    )
}

export default IPAToEnglish