import COURSES from "../../data/data"
import { AJOUTER, HIDE, ACHETER, SHOW ,SUPPRIMER,SUP_ACHAT} from "../ActionsTypes"
const initialState = {
	Cours: COURSES,
	Achats : [],
	Panier: [],
  }
  export const reducerCours = (state = initialState, action) => {
	switch (action.type) {
	  case AJOUTER:
		const upd = state.Cours.map(cours => {
		  if (cours.id === action.payload.id) {
			return { ...cours, selected: true };
		  }
		  return cours;
		});
		return {
		  ...state,
		  Panier: [...state.Panier, action.payload],
		  Cours: upd
		};
	  case SUPPRIMER:
		const updCrs = state.Cours.map(cours => {
		  if (cours.id === action.payload.id) {
			return { ...cours, selected: false };
		  }
		  return cours;
		});
		return {
		  ...state,
		  Panier: state.Panier.filter(item => item.id !== action.payload.id),
		  Cours: updCrs
		};
	  case HIDE:
		const updatedCours = state.Cours.map(cours => {
		  if (cours.id === action.payload.id) {
			return { ...cours, selected: true };
		  }
		  return cours;
		});
		return {
		  ...state,
		  Cours: updatedCours
		};
	  case SHOW:
		const updated = state.Cours.map(cours => {
		  if (cours.id === action.payload.id) {
			return { ...cours, selected: false };
		  }
		  return cours;
		});
		return {
		  ...state,
		  Cours: updated
		};
	  default:
		return state;
	}
  };
  