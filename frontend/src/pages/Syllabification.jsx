import { React, useEffect, useState }from 'react'
import { getSyllable } from '../api/syllable';
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';

function Syllabification() {

    const [syllable, setSyllable] = useState({});
    // States for correctness or question/answer state
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null)
    const [flagNext, setFlagNext] = useState(false);

    useEffect(() => {
        getSyllable(setSyllable);
    }, [flagNext])

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
        },
        {
            id: 4,
            variant: "secondary"
        }
    ])

    const checkAnswer = e => {
        if (!isAnswered) {
            setIsAnswered(true)

            var id = parseInt(e.target.getAttribute("id"))

            if (id == syllable.stress_position) {
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

        setButtons([{id: 0, variant: "secondary"}, {id: 1, variant: "secondary"}, {id: 2, variant: "secondary"},{id: 3, variant: "secondary"},{id:4, variant: "secondary"}])

        e.preventDefault()
    }

    return (
        <div>
            <Header/>
            <div className="syllabification">
                <h1>Syllabification </h1>
                <p>Click on the syllable that is stressed in the following word:</p>
                {syllable && <h3>{syllable.english_word} [{syllable.ipa_transcription}]</h3>} 
                
                {syllable.ipa_transcription && syllable.ipa_transcription[0] && <Button onClick={checkAnswer} value={syllable.ipa_transcription[0]} id={buttons[0].id} variant={buttons[0].variant} size="md">{syllable.ipa_transcription[0]}</Button>}
                {syllable.ipa_transcription && syllable.ipa_transcription[1] && <Button onClick={checkAnswer} value={syllable.ipa_transcription[1]} id={buttons[1].id} variant={buttons[1].variant} size="md">{syllable.ipa_transcription[1]}</Button>}
                {syllable.ipa_transcription && syllable.ipa_transcription[2] && <Button onClick={checkAnswer} value={syllable.ipa_transcription[2]} id={buttons[2].id} variant={buttons[2].variant} size="md">{syllable.ipa_transcription[2]}</Button>}
                {syllable.ipa_transcription && syllable.ipa_transcription[3] && <Button onClick={checkAnswer} value={syllable.ipa_transcription[3]} id={buttons[3].id} variant={buttons[3].variant} size="md">{syllable.ipa_transcription[3]}</Button>}
                {syllable.ipa_transcription && syllable.ipa_transcription[4] && <Button onClick={checkAnswer} value={syllable.ipa_transcription[4]} id={buttons[4].id} variant={buttons[4].variant} size="md">{syllable.ipa_transcription[4]}</Button>}

                <br/>

                {isAnswered && isCorrect && <h5 className="correct">Correct!</h5>}
                {isAnswered && !isCorrect && <h5 className="incorrect">Incorrect. The correct stress is {syllable.correct}.</h5>}

                {isAnswered && <Button onClick={onNext} variant="secondary" size="lg"> Next </Button>}
            
            </div>
        </div>
    )
}

export default Syllabification