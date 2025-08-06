import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodo = (e) => {
    setTodo(e.target.value); // ✅ only update value
  };

  const handleAddTodo = () => {
    if (todo.trim() === "") return; // ✅ prevent empty todos
    setTodos((prev) => [...prev, todo]);
    setTodo(""); // ✅ clear input only after adding
  };
  const handleRemoveTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };
  const handleUpwardToggle = (index) => {
    if (index == 0) return;
    const newTodos = [...todos];
    const temp = newTodos[index];
    newTodos[index] = newTodos[index - 1];
    newTodos[index - 1] = temp;
    setTodos(newTodos);
  };
  const handlwDownwardToggle = (index) => {
    if (index == todos.length - 1) return;
    const newTodos = [...todos];
    const temp = newTodos[index];
    newTodos[index] = newTodos[index + 1];
    newTodos[index + 1] = temp;
    setTodos(newTodos);
  };
  return (
    <div className="h-screen w-screen bg-[#2D3047] flex justify-center items-center">
      <div className="w-[50%] h-[80%] bg-[#FFFD82] flex flex-col border border-black rounded-[5px]">
        {/* Input Section */}
        <div className="w-full flex justify-around h-[20%] items-center">
          <input
            type="text"
            placeholder="Enter Todo"
            className="w-[60%] p-4 h-[50%] border border-black"
            value={todo} // ✅ controlled input
            onChange={handleNewTodo}
          />
          <button
            className="w-[20%] bg-[#FF9B71] border border-black h-[50%] hover:bg-[#F8FFE5] cursor-pointer"
            onClick={handleAddTodo}
          >
            Add Todo
          </button>
        </div>

        {/* Todo List */}
        <div className="flex-1 min-h-[60%] flex flex-col overflow-y-auto">
          {todos.map((t, index) => (
            <div
              key={index}
              className=" bg-[#F9F9ED] border border-black w-[90%] p-4 mx-auto flex justify-around my-4"
            >
              <div className="w-[80%]">{t}</div>
              <div className="w-[10%] font-bold  ">
                <button
                  onClick={() => handleUpwardToggle(index)}
                  className="cursor-pointer"
                >
                  ⬆️
                </button>
              </div>
              <div className="w-[10%] font-bold ">
                <button
                  onClick={() => handlwDownwardToggle(index)}
                  className="cursor-pointer"
                >
                  ⬇️
                </button>
              </div>
              <div className="w-[10%] font-bold ">
                <button
                  onClick={() => handleRemoveTodo(index)}
                  className="cursor-pointer"
                >
                  ✖
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
