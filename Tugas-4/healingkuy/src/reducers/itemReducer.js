import {
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  EDIT_ITEM_SUCCESS,
  EDIT_ITEM_FAILURE,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,
} from "../actions/types";

const initialState = {
  items: [],
  error: null,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        items: action.payload,
        error: null,
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        items: [],
        error: action.payload,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        items: [...state.items, action.payload],
        error: null,
      };
    case ADD_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case EDIT_ITEM_SUCCESS:
      const updatedItem = action.payload;
      const updatedItems = state.items.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
      return {
        ...state,
        items: updatedItems,
        error: null,
      };
    case EDIT_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_ITEM_SUCCESS:
      const deletedItemId = action.payload;
      const remainingItems = state.items.filter(
        (item) => item.id !== deletedItemId
      );
      return {
        ...state,
        items: remainingItems,
        error: null,
      };
    case DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default itemReducer;
