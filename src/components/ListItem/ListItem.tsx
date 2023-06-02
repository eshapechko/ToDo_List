import { Link } from "react-router-dom";
import { ToDo } from "../../models/ToDo-item";
import classes from "./ListItem.module.scss";

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <Link className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`} target="_blank" to={`/list/${todo.id}`}>
            {todo.text}
        </Link>
    );
};
