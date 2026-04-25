import '../Styles/mainText.css';

function texto({titulo, parrafo}) {
    return (
        <div className="texto-container">
            <h1>{titulo}</h1>
            <p>{parrafo}</p>
        </div>
    );
}
export default texto;