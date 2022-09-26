
function InfoBlock({text, color}) {
  return (
    <div className="table-info-wrapper">
      Main info: <span style={{color: color}}> {text} </span>
    </div>
  );
}

export default InfoBlock;
