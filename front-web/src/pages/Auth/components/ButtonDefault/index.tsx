import React from "react";
import './styles.scss';

type Props = {
    title: string;
    name?: string;
}

const ButtonDefault = ({ title, name }: Props) => (
<button className="btn btn-primary form-control btn-style" name={name}>
    <h6 className="font-size">
        {title}
    </h6>
</button>
);

export default ButtonDefault;