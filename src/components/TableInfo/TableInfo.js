import InfoButton from "./InfoButton";
import {useState} from "react";
import InfoBlock from "./InfoBlock";

function TableInfo(props) {

  const [showInfo, setShowInfo] = useState(false);

  const info = { text: 'Info info info', color: 'red' }

  const clickBtn = () => {
    setShowInfo(!showInfo);
  }

  return (
    <div className="table-info-wrapper">
      <InfoButton clickBtnCallback={clickBtn}/>
      <br/><br/>
      {showInfo && <InfoBlock text={info.text} color={info.color}/>}
    </div>
  );
}

export default TableInfo;
