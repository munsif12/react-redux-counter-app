//reducers are use to describe the type of action means if the action is addition then reducer will be a++
const initalstate = 0;
const reducerForIncAndDec = (state = initalstate, action) => {
  switch (action.type) {
    case "INC_NUMBER": {
      return ++state;
    }
    case "DEC_NUMBER": {
      return --state;
    }
    default:
      return state;
  }
};
export { reducerForIncAndDec };
