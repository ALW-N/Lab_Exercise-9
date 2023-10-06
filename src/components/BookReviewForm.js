import React, { useState } from 'react';

function BookReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [showReview, setShowReview] = useState(false);

  const handleSubmit = () => {
    
    onSubmit({ rating, reviewText });

    setShowReview(true);
  };

  const closeReview = () => {

    setShowReview(false);
  };

  return (
    <div>
      <h2>Submit a Review</h2>
      <label>
        Rating:
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
        />
      </label>
      <label>
        Review:
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>

      {/* Review Pop-up */}
      {showReview && (
        <div className="review-modal">
          <div className="review-content">
            <h2>Review Submitted!</h2>
            <p>Rating: {rating}</p>
            <p>Review: {reviewText}</p>
            <button onClick={closeReview}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookReviewForm;
