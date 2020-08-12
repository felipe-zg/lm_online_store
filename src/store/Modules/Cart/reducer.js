import { bindActionCreators } from "redux";

const INITIAL_STATE = []

export default function CartReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case 'ADD_PRODUCT': {
      return [...state, {item: action.product, amount: 1}]
    }
    default:{
      return state;
    }
  }
}
