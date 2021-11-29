import React from "react";
import { ReactComponent as EvaluationImage } from "core/assets/images/estrela.svg" 
import './styles.scss';

const CardReview = () => (
    <div className="review-container">
        <div className="review-title">
            <EvaluationImage className="icon-review" />
                <h6 className="name-review">
                    Ana Green 
                </h6>
        </div>
            <div className="review-box border-radius-4">
                <h6 className="text-review">
                    Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
                </h6>
            </div>
        
    </div>
);

export default CardReview;