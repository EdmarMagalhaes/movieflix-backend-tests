import { ReactComponent as ReviewImage } from "core/assets/images/estrela.svg"
import './styles.scss';

const CardNoReview = () => (
    <div className="review-container">
        <div className="review-title">
            <ReviewImage className="icon-review" />
            <h6 className="name-review">
                Deixe sua avaliação!
            </h6>
        </div>
        <div className="review-box border-radius-4">
            <h6 className="text-review">
                Seja o primeiro!
            </h6>
        </div>

    </div>
);

export default CardNoReview;