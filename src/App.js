import { Provider, useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import { store } from "./store";
import {
  chekAllTodos,
  deleteAllTodos,
  editAllTodos,
  getAllTodos,
  postAllTodos,
} from "./store/todos/todosThunk";
import { Button, TextField } from "@mui/material";
import { Modal } from "./componetn/Modal";
import styled from "@emotion/styled";

function AppContent() {
  const [inputValue, setInputValue] = useState("");
  const [complete] = useState(false);
  const [editInput, setEditInput] = useState("null");
  const [editId, setEditId] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);

  const addTodos = (event) => {
    event.preventDefault();
    const data = {
      title: inputValue,
      id: Date.now(),
      complete: false,
    };
    dispatch(postAllTodos(data));
    setInputValue("");
  };
  const editChangeInput = (e) => {
    setEditInput(e.target.value);
  };

  const deleteTodos = (id) => dispatch(deleteAllTodos(id));

  const editHandler = (item) => {
    setOpenModal(true);
    setEditInput(item.title);
    setEditId(item.id);
  };

  const chekHandler = (item) => {
    const data = item;
    dispatch(chekAllTodos({ ...data, complete: !data.complete, id: data.id }));
  };

  const saveHandler = () => {
    const data = {
      title: editInput,
      complete: false,
      id: editId,
    };
    dispatch(editAllTodos(data))
      .unwrap()
      .then(() => setOpenModal(false))
      .catch((error) => console.log(error));
    setEditInput("");
  };
  console.log(complete);
  return (
    <>
      {openModal && (
        <Modal
          value={editInput}
          onChange={editChangeInput}
          setOpenModal={setOpenModal}
          saveHandler={saveHandler}
        />
      )}
      <div>
        <div>
          <form onSubmit={addTodos}>
            <StyledTextField
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button variant="contained" color="error" type="submit">add todo</Button>
          </form>
        </div>
        <div>
          {todos.map((item) => (
            <div key={item.id}>
              <input
                type="checkbox"
                checked={item.complete}
                onChange={() => chekHandler(item)}
              />

              {item.complete ? (
                <p style={{ textDecoration: "line-through" }}>{item.title}</p>
              ) : (
                <p>{item.title}</p>
              )}
              <Button variant="contained" onClick={() => editHandler(item)}>
                Edit
              </Button>
              <Button variant="contained" onClick={() => deleteTodos(item.id)}>
                Delete{" "}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppContent />
      </Provider>
    </div>
  );
}

export default App;

const StyledTextField=styled(TextField)`
  .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 7px 0px;
  }
`