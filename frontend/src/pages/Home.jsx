import React from 'react'
import Header from '../components/Header'
import './Home.css';

function Home() {
    return (
        <div>
            <Header/>
            <div className="home">
                <h1>IPA Practice for LIN101</h1>
                <br/>
                <p>You can use these three exercises to help you memorize the IPA symbols. These are the symbols that we are to study in LIN101, and we are using Canadian English.</p>
                <ul>
                    <li><a href="/articulation">Articulation</a>: Use this exercise to help you remember the phonetic properties of vowels and consonants. </li>
                    <br/>
                    <li><a href="/ipa-to-english">IPA to English</a>: Use this exercise to practice translating IPA words to English. You will be given a word in IPA symbols and will be given choices to translate the word into English</li>
                    <br/>
                    <li><a href="/english-to-ipa">English to IPA</a>: Use this exercise to practice translating English to IPA. You will be given a word in English, and will be given choices to translate the word into IPA.</li>
                </ul>
            </div>
        </div>
    )
}

export default Home