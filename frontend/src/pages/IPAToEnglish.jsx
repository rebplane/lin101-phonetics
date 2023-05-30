import React from 'react'
import Header from '../components/Header'
import Button from 'react-bootstrap/Button';

function IPAToEnglish() {
    return (
        <div>
            <Header/>
            <div className="ipa-to-english">
                <h1><u>IPA to English</u></h1>
                <p>Choose the English word that corresponds to the IPA transcription</p>
                <h2>Word goes here</h2>
                <Button variant="secondary" size="md"> tasdfasdf </Button>
                <Button variant="secondary" size="md"> asdasdflj </Button>
                <Button variant="secondary" size="md"> Next </Button>
                <Button variant="secondary" size="md"> Next </Button>
            </div>
        </div>
    )
}

export default IPAToEnglish