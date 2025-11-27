import React from 'react';
import './Reviews.css';

class Reviews extends React.Component {
  render() {
    // Manually defined reviews array
    const reviews = [
      { name: 'Anu', email: 'anu@gmail.com', comment: 'Great experience!' },
      { name: 'Anjula', email: 'anjula@gmail.com', comment: 'Very user-friendly and clean design.' },
      { name: 'Sree', email: 'sree@gmail.com', comment: 'Support was helpful and quick.' },
      { name: 'Hema', email: 'hema@gmail.com', comment: 'Loved the interface!' },
    ];

    return (
      <div className="reviews-dashboard">
        <h2>User Reviews</h2>
        <div className="review-list">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p><strong>Name:</strong> {review.name}</p>
              <p><strong>Email:</strong> {review.email}</p>
              <p><strong>Comment:</strong> {review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Reviews;
