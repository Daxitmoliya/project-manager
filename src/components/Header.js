import { saveIsAddingNewItem, clearBoard, clearLocalStorage } from "../redux/features/task-board-slice";
import { useAppSelector, useAppDispatch } from "../redux/app/hooks";
import AddTaskForm from "./AddTaskForm";
import Modal from "./Modal";
import Search from "./Search";
import SaveFile from "./SaveFile";
import SortActions from "./SortActions";

export default function Header() {
  const taskBoardState = useAppSelector(state => state.taskBoard);
  const dispatch = useAppDispatch();

  return (
    <div className="header">
      <div className="header-info">
        <h1>PROJECT MANAGEMENT TOOL</h1>
        <ul>
          <li>
            <img
              src="https://cdn-icons-png.freepik.com/256/8575/8575514.png?semt=ais_hybrid"
              alt="Archimedean spiral icon"
              width="27"
              height="27"
            />
          </li>
        </ul>
      </div>
      <div className="header-inputs">
        <div className="controls">
          <Search />
          <SortActions />
        </div>
        <div style={{ display: 'flex', gap: '.5rem' }}>
          <button
            title="Add Task"
            onClick={() => {
              dispatch(saveIsAddingNewItem(true));
            }}
            className="add-task-btn"
          >
            <span>+</span> New Task
        </button>
          <button
            title="Clear task"
            className="light-control-btn"
            onClick={() => {
              dispatch(clearBoard());
              dispatch(clearLocalStorage());
            }}
          >
            Clear
        </button>
        <SaveFile />
        </div>
        <Modal
          content={<AddTaskForm />}
          isOpen={taskBoardState.isAddingNewItem}
          title="Add Task"
          clickEffect={(isOpen) => dispatch(saveIsAddingNewItem(!isOpen))}
        />
      </div>
    </div>
  );
}
