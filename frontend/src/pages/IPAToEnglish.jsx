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

    const [buttons, setButtons] = useState([
        {
            id: 0,
            variant: "secondary"
        },
        {
            id: 1,
            variant: "secondary"
        },
        {
            id: 2,
            variant: "secondary"
        },
        {
            id: 3,
            variant: "secondary"
        }
    ])

    const checkAnswer = e => {
        if (!isAnswered) {
            setIsAnswered(true)

            var id = parseInt(e.target.getAttribute("id"))

            if (e.target.value === word.english_word) {
                setIsCorrect(true)
                setButtons(prev => {
                    return prev.map(button => {
                        if (button.id === id) {
                            return {id, variant: "success"}
                        } else {
                            return { id, variant: "light"}
                        }
                    })
                })
                console.log("correct")
            }
            else {
                setIsCorrect(false)
                setButtons(prev => {
                    return prev.map(button => {
                        if (button.id === id) {
                            return {id, variant: "danger"}
                        } else {
                            return { id, variant: "light"}
                        }
                    })
                })
                console.log("incorrect")
            }
        }

        e.preventDefault()
    }

    const onNext = e => {
        // Reset flags and states
        setIsAnswered(false)
        setIsCorrect(null)
        setFlagNext(!flagNext)

        setButtons([{id: 0, variant: "secondary"}, {id: 1, variant: "secondary"}, {id: 2, variant: "secondary"},{id: 3, variant: "secondary"}])

        e.preventDefault()
    }

    // todo: next button shows if answered

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

                {word.word_list && <Button onClick={checkAnswer} value={word.word_list[0]} id={buttons[0].id} variant={buttons[0].variant} size="md">{word.word_list[0]}</Button>}
                {word.word_list && <Button onClick={checkAnswer} value={word.word_list[1]} id={buttons[1].id} variant={buttons[1].variant} size="md">{word.word_list[1]} </Button>}
                {word.word_list && <Button onClick={checkAnswer} value={word.word_list[2]} id={buttons[2].id} variant={buttons[2].variant} size="md">{word.word_list[2]}</Button>}
                {word.word_list && <Button onClick={checkAnswer} value={word.word_list[3]} id={buttons[3].id} variant={buttons[3].variant} size="md">{word.word_list[3]} </Button>}
                
                <br/>

                {isAnswered && isCorrect && <h5 className="correct">Correct!</h5>}
                {isAnswered && !isCorrect && <h5 className="incorrect">Incorrect. The correct answer was {word.english_word}.</h5>}

                {isAnswered && <Button onClick={onNext} variant="secondary" size="lg"> Next </Button>}
            </div>
        </div>
    )
}

export default IPAToEnglish