import './style.css';

function InfoText({label, value}) {
  return (
    <p className="info-text">
        {label + ": " + value}
    </p>
  );
}

export default InfoText;