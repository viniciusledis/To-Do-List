import { useState } from "react";
import "./App.css";
import ToDoItem from "./components/ToDoItem/ToDoItem";
import InputArea from "./components/InputArea/InputArea";
import Footer from "./components/Footer/Footer";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className="main-container">
        <div className="container">
          <header className="heading">
            <h1>To-Do List</h1>
          </header>
          <InputArea addItem={addItem} deleteItem={deleteItem} />
          <ul>
            {items.map((todoItem, index) => (
              <ToDoItem
                key={index}
                id={index}
                text={todoItem}
                onChecked={deleteItem}
              />
            ))}
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
