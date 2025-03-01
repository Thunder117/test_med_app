import React from 'react';
import './ReviewForm.css';

const ReviewForm = () => {

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
                    <button>Click Here</button>
                </div>
                <div className='table-body'>
                    <p>2</p>
                    <p>Dr. Jane Smith</p>
                    <p>Dermatology</p>
                    <button>Click Here</button>
                </div>
            </div>
        </div>
    );
}

export default ReviewForm;