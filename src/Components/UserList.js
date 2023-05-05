import { Card } from "../UI/Card";
import "./Form.css";
import { UserItem } from "./UserItem";
import './UserList.css'

export const UserList = (props) => {
  return (
    <Card>
      <ul className="user-list">
        {props.data.map((user) => (
          <UserItem key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};
