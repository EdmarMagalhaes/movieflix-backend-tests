import './styles.scss';

type Props = {
    title: string;
    name?: string;
    value?: boolean;
}

const ButtonDefault = ({ title, name, value }: Props) => (
<button className="btn btn-primary form-control btn-style" name={name} disabled={value}>
    <h6 className="font-size">
        {title}
    </h6>
</button>
);

export default ButtonDefault;