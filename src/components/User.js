export default function User(props) {
    let {id, name} = props;
    return (
        <div>

            {id}-{name}
        </div>
    );
}