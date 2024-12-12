import React from 'react';
import '../css/symptomChecker.css';

const SymptomPage3 = ({ selectedSymptoms, userData, setUserData }) => {
    console.log("userData", userData);
    
    // const handleInputChange = (symptom, field, value) => {

    //     setUserData((prevData) => ({
    //         ...prevData,
    //         [symptom]: {
    //             ...prevData[symptom], // Preserve existing data for the symptom
    //             [field]: value,      // Update the specific field
    //         },

    //     }));

    const handleInputChange = (symptom, field, value) => {

        setUserData((prevData) => ({
            ...prevData,
            [symptom]: {
                ...prevData[symptom],
                [field]: value,
            },
        }));

    }

    const generateSymptomQuestions = () => {
        return Array.from(selectedSymptoms).map(symptom => (
            <div key={symptom} className="form-group">
                <h3>{symptom}</h3>
                <label>Severity</label>
                <select
                    className="form-control"
                    name="severity"
                    value={userData.severity}
                    onChange={(e) =>
                        handleInputChange(symptom, 'severity', e.target.value)
                    }
                >
                    <option value="">Select Severity</option>
                    <option value="Mild">Mild</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Severe">Severe</option>
                </select>
                <label>Additional Notes</label>
                <textarea
                    className="form-control"
                    name="notes"
                    value={userData.notes}
                    onChange={(e) =>
                        handleInputChange(symptom, 'notes', e.target.value)
                    }
                    placeholder="Write any notes here..."
                />
            </div>
        ));
    };

    return (
        <div id="page3">
            <h2 className="heading">Additional Information</h2>
            <div>{generateSymptomQuestions()}</div>
        </div>
    );
};

export default SymptomPage3;
