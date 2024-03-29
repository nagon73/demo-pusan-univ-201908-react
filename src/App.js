import React from 'react';
import Counter from "./components/counter";
import FunctionalCounter from "./components/functional_counter";
import TodoList from "./components/todo_list";

class App extends React.Component {
    render() {
        // const message = this.props.message;
        const { message } = this.props;
        return (
            <>
                <TodoList />
                <h1>Hello, {message}</h1>
                <FunctionalCounter />
                <Counter />
            </>
        );
    }
}

// function App() {
//   return (
//     <h1>Hello, React</h1>
//   );
// }

export default App;
