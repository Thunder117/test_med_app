import React, {useState} from 'react';
import './ReviewForm.css';
import GiveReviews from '../GiveReviews/GiveReviews';

const ReviewForm = () => {
    const [showFeedback, setShowFeedback] = useState(false);

    const handleShowFeedbackForm = () => {
        setShowFeedback(true);
    }

    return(
        <div className='container'>
            <div className='title'>
                <h1>Reviews</h1>
            </div>
            <div className='table'>
                <div className="table-header">
                    <p>Serial Number</p>
                    <p>Doctor Name</p>
                    <p>Doctor Speciality</p>
                    <p>Provide feedback</p>
                    <p>Review Given</p>
                </div>
                <div className='table-body'>
                    <p>1</p>
                    <p>Dr. John Doe</p>
                    <p>Cardiology</p>
                    <button className='button-disabled' onClick={handleShowFeedbackForm}>Click Here</button>
                    <p>Very good doctor, would recommend</p>
                </div>
                <div className='table-body'>
                    <p>2</p>
                    <p>Dr. Jane Smith</p>
                    <p>Dermatology</p>
                    <button onClick={handleShowFeedbackForm}>Click Here</button>
                </div>
            </div>
            <div>
                {showFeedback && <GiveReviews/>}
            </div>
        </div>
        
    );
}



export default ReviewForm;