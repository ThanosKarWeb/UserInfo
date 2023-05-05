import "./UserItem.css";
import { Card } from "../UI/Card";

export const UserItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <div className="expense-item__description">
          <h2>{props.name}</h2>
        </div>
        <div style={{color:"white"}}>{props.age} years old.</div>
      </Card>
    </li>
  );
};
