import COURSES from "../../data/data"
import { AJOUTER, HIDE, ACHETER, SHOW ,SUPPRIMER,SUP_ACHAT} from "../ActionsTypes"
const initialState = {
	Cours: COURSES,
	Achats : [],
	Panier: []
  }
  export const reducerCart = (state = initialState, action) => {
	switch (action.type) {
	  case AJOUTER:
		return {
		  ...state,
		  Panier: [...state.Panier, action.payload]
		};
	  case SUPPRIMER:
		return {
		  ...state,
		  Panier: state.Panier.filter(item => item.id !== action.payload.id)
		};
	  default:
		return state;
	}
  };
  