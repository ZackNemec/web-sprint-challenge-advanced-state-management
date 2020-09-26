import {
  FETCH_DATA,
  FETCH_SUCCESS,
  FETCH_ERROR,
  ADD_DATA,
  ADD_SUCCESS,
  ADD_ERROR,
} from "../../actions/index";

const initialState = {
  smurfs: [],
  isFetching: false,
  isAdding: false,
  errors: "",
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload,
        error: "",
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case ADD_DATA:
      return {
        ...state,
        isAdding: true,
        smurfs: [...state.smurfs],
      };
    case ADD_SUCCESS:
      return {
        ...state,
        isAdding: false,
        smurfs: action.payload,
        error: "",
      };
    case ADD_ERROR:
      return {
        ...state,
        isAdding: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default smurfReducer;
