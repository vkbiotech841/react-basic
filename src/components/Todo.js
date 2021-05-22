import { useState } from 'react';

import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className='card'>
      <h2>{props.text}</h2>

      <div className='actions'>
        <button className='btn' onClick={deleteHandler}>
          Delete
        </button>
      </div>

      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}

    </div>
  );
}

export default Todo;

// Components in react is just a function.
// Naming function: It should start with capital character. so that react, differentiate from build component (Start with small character) from custome components (start with Capital character).
// To turn this function into a component. This function must return a jsx.
// To use this component into the another component, it must be exported as well.

// Handling event:
// event has trigger a function. We can write a function inside the component and then take a reference to that function on browser event inbuild functions (e.g onClick, onChange).

// Why we should take a referance of the function?
// Ans: if we are calling the function instead of taking reference of it, then as DOM element are display in the browser, that function will get executed but in actual scenario, it should get executated upon an event trigger. Hence, we write a function and then take its reference (not by calling function), when an event get triggered then that function gets executed.

// useState():
// useState registers different states of an application.
// useState is a react hooks and it can directly called from the component function.
// useState always an array of two elements. 
// 1st element of the useState array is the snapshot of the current state of the application.
// 2nd element is the function that allows to change the current state of the application.
// In this example: modalIsOpen is the current state of the application which set as false. and setModalIsOpen is a function that can be used for changing the modalIsOpen state.
// calling setModalIsOpen function will re-execute the entire component function and update the state of the application.

// passing a function name as props:
// in this case Modal and backdrop component just need to have onClick event. but here, the Todo.js component,we can not use onClick function direcly because they are the custome component. Hence, we need to create an argument and send as a prop to their respective componets. Then in their respective component can have onClick event. Here, closeModalHandler function reference is acting as props to the their respective components. Now, in the Modal component we need to call this function onClick. Here, we are trigger this onClick on the inbuild component (div element), hence, we are trigger click event from the child component.

// In javascript functions are first class objects.you can pass then around as value. Hence we can pass a function as argument to the another function.
