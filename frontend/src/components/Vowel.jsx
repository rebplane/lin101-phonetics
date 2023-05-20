import React from 'react'
import Form from 'react-bootstrap/Form';
import './Form.css'

function Vowel({properties, setProperties}) {

    const handleChange = e => {
        e.persist();

        setProperties(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    }
    
    return (
        <div>
            <Form>
                <h3>Height</h3>
                <Form.Group controlId='height' className="mb-3">
                    <Form.Check
                        inline
                        label="high"
                        value="high"
                        name="height"
                        type="radio"
                        id="height-1"
                        onChange={handleChange}
                        checked={properties.height === "high"}
                    />
                    <Form.Check
                        inline
                        label="mid"
                        value="mid"
                        type="radio"
                        name="height"
                        id="height-2"
                        onChange={handleChange}
                        checked={properties.height === "mid"}
                    />
                    <Form.Check
                        inline
                        label="low"
                        value="low"
                        name="height"
                        type="radio"
                        id="height-3"
                        onChange={handleChange}
                        checked={properties.height === "low"}
                    />
                </Form.Group>
                <h3>Backness</h3>
                <Form.Group controlId='backness' className="mb-3">
                    <Form.Check
                        inline
                        label="front"
                        value="front"
                        name="backness"
                        type="radio"
                        id="backness-1"
                        onChange={handleChange}
                        checked={properties.backness === "front"}
                    />
                    <Form.Check
                        inline
                        label="central"
                        value="central"
                        type="radio"
                        name="backness"
                        id="backness-2"
                        onChange={handleChange}
                        checked={properties.backness === "central"}
                    />
                    <Form.Check
                        inline
                        label="back"
                        value="back"
                        name="backness"
                        type="radio"
                        id="backness-3"
                        onChange={handleChange}
                        checked={properties.backness === "back"}
                    />
                </Form.Group>

                <h3>Rounding</h3>
                <Form.Group controlId='rounding' className="mb-2">
                    <Form.Check
                        inline
                        label="rounded"
                        value="rounded"
                        name="rounding"
                        type="radio"
                        id="roundness-1"
                        onChange={handleChange}
                        checked={properties.rounding === "rounded"}
                    />
                    <Form.Check
                        inline
                        label="unrounded"
                        value="unrounded"
                        name="rounding"
                        type="radio"
                        id="roundness-2"
                        onChange={handleChange}
                        checked={properties.rounding === "unrounded"}
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default Vowel