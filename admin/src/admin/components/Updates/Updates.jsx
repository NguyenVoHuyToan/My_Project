
import "./Updates.css";
import { UpdatesData } from "../../../../../../admin/src/Data/Data";

const Updates = () => {
  return (
    <div className="Updates">
      {UpdatesData.map((update,index) => {
        return (
          <div className="update" key={index}>
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span>{update.name}</span>
                <span> {update.noti}</span>
              </div>
                <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;
