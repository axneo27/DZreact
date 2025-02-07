import './style.css';

function H2({text}) {
  return (
    <>
      <div className="h2-block">
        <h2 className="h2-cool">
            {text}
        </h2>
      </div>
    </>
  );
}

export default H2;