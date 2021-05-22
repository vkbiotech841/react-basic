import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text='Learn React' />
      <Todo text='Master React' />
      <Todo text='Explore the full React course' />
    </div>
  );
}

export default App;

// Here, Todo is a custome component. consider it as function nested into the App().
// Now, consider that function accept an argument. So, here, text='Learn React' is an argument to the Todo function or component. This is way to passing data to the component in react (Props method). This type of component are called as Functional Components.
// Now, <Todo/> component will accept these value in the Todo component and use the data for display. This data in the child component, we call as "props".  Props is an object.
// The argument passed the functional component will be available an object (key:value) in the props.
// Hence, properties of props can be accessed using dot notation. (eg. props.title) in the functiona component.
// Since, properties of a props can dynamic, in react we use {} to display dynamic any javascript expression but we can not use block statement (e.g if, else) in { }.

// 
