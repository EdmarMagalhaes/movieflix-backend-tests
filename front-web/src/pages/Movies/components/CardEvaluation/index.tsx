import React from "react";
import { ReactComponent as EvaluationImage } from "core/assets/images/estrela.svg" 
import './styles.scss';

const CardEvaluation = () => (
    <div className="evaluation-container">
        <div className="evaluation-title">
            <EvaluationImage className="icon-evaluation" />
                <h6 className="name-evaluation">
                    Ana Green 
                </h6>
        </div>
            <div className="evaluation-box border-radius-4">
                <h6 className="text-evaluation">
                    Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.
                </h6>
            </div>
        
    </div>
);

export default CardEvaluation;