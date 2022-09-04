import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { Todotype } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "はるき",
  hobbies: ["映画", "ゲーム"]
};

function App() {

  const [todos, setTodos] = useState<Array<Todotype>>([]);

  const onClickFecthData = () => {
    axios.get<Array<Todotype>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    })
  };

  return (
    <div>
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" /> 
      <button onClick={onClickFecthData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}

export default App;
