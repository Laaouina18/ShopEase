
import COURSES from "../data/data"
import { AJOUTER, HIDE, ACHETER, SHOW } from "./ActionsTypes"


const initialState = {
  Cours: COURSES,
  Achats : [],
  Panier: [],
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AJOUTER:
      return {
        ...state,
		Panier: [...state.Panier, action.payload]
      }
    case ACHETER:
      return {
        ...state,
        Achats : [...state.Achats,action.payload]
      }
    default:
      return state
  }
}