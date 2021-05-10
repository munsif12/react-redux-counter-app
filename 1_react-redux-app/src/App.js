import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incAction, decAction } from "./redux/actions";
function App() {
  {
    /* useSelector takes a parameter which is store and is use to get state retrned by the reducer function like if the type is add it will return the state with increment*/
  }
  const value = useSelector((store) => store.reducerForIncAndDec);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="wrapper"></div>
      <div className="headingWrapper">
        <h1 className="heading">WELLCOME TO FIRST REACT REDUX APP</h1>
      </div>
      <div className="conunterWrapper">
        <button id="dec" onClick={() => dispatch(decAction())}>
          -
        </button>
        <input type="text" name="value" id="value" value={value} />
        {/* const dispatch = useDispatch(function) 
        useDispatch is us to call the reducer and takes an object which includes type of the or payload if you want 
        */}
        <button
          id="inc"
          onClick={() =>
            dispatch(
              incAction() /* u can also do it as { type: "INC_NUMBER" } */
            )
          }
        >
          +
        </button>
      </div>
    </div>
  );
}
export default App;
