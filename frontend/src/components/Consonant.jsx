import { React, useState, useEffect }from 'react'
import Form from 'react-bootstrap/Form';
import './Form.css'

function Consonant({properties, setProperties}) {
    
    const onChange = e => {
        e.persist();
        
        setProperties(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    
    return (
        <div>
            <Form>
            <h3>Voicing</h3>
                <Form.Group controlId='voicing' className="mb-2">
                    <Form.Check
                        inline
                        label="voiceless"
                        value="voiceless"
                        name="voicing"
                        type="radio"
                        id="voicing-1"
                        onChange={onChange}
                        checked={properties.voicing === "voiceless"}
                    />
                    <Form.Check
                        inline
                        label="voiced"
                        value="voiced"
                        type="radio"
                        name="voicing"
                        id="voicing-2"
                        onChange={onChange}
                        checked={properties.voicing === "voiced"}
                    />
                </Form.Group>

                <h3>Place of Articulation</h3>
                <Form.Group controlId="place">
                    <Form.Select
                    name="place"
                    value={properties.place}
                    onChange={onChange}
                    >
                    <option value=""></option>  
                    <option value="bilabial">bilabial</option>       
                    <option value="labialdental">labialdental</option>    
                    <option value="dental">dental</option>  
                    <option value="alveolar">alveolar</option>  
                    <option value="postalveolar">postalveolar</option> 
                    <option value="retroflex">retroflex</option>  
                    <option value="palatal">palatal</option>  
                    <option value="velar">velar</option>  
                    <option value="uvular">uvular</option>  
                    <option value="glottal">glottal</option>  
                    <option value="labial-velar">labial-velar</option>
                    </Form.Select>
                </Form.Group>

                <h3>Manner of Articulation</h3>
                <Form.Group controlId="manner">
                    <Form.Select
                    name="manner"
                    value={properties.manner}
                    onChange={onChange}
                    >
                    <option value=""></option>
                    <option value="oral stop">oral stop</option>
                    <option value="fricative">fricative</option>
                    <option value="affricate">affricate</option>
                    <option value="nasal">nasal</option>
                    <option value="flap/tap">flap/tap</option>
                    <option value="trill">trill</option>
                    <option value="lateral">lateral</option>
                    <option value="approximant">approximant</option>
                    </Form.Select>
                </Form.Group>

            </Form>
        </div>
    )
}

export default Consonant