import { ReactComponent as ReviewImage } from "core/assets/images/estrela.svg" 
import './styles.scss';


type Props = {
    name?: string;
    text?: string;
}
const CardReview = ({ name, text }: Props) => (
    <div className="review-container">
        <div className="review-title">
            <ReviewImage className="icon-review" />
                <h6 className="name-review">
                  {text}
                </h6>
        </div>
            <div className="review-box border-radius-4">
                <h6 className="text-review">
                    {name}
                </h6>
            </div>
        
    </div>
);

export default CardReview;