import { ToDoListItem } from "./ToDoListItem/ToDoListItem";
import "./ToDoList.scss";
import { ToDo } from "../../models/ToDo-item";

export const ToDoList = (props: { todos: ToDo[]; deleteToDo: Function; updateToDo: Function }) => {
    const checkedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item, i) => {
                return <ToDoListItem toDoItem={item} key={i} deleteToDo={props.deleteToDo} updateToDo={props.updateToDo} />;
            });
    };

    const unCheckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item, i) => {
                return <ToDoListItem toDoItem={item} key={i} deleteToDo={props.deleteToDo} updateToDo={props.updateToDo} />;
            });
    };

    return (
        <div className="todo-container">
            <ul className="todo-list failed">{checkedList()}</ul>
            <ul className="todo-list completed">{unCheckedList()}</ul>
        </div>
    );
};
