import COURSES from "../../data/data"
import { AJOUTER, HIDE, ACHETER, SHOW ,SUPPRIMER,SUP_ACHAT} from "../ActionsTypes";
const initialState = {
	Cours: COURSES,
	Achats : [],
	Panier: [],
  }
export const reducerPayment = (state = initialState, action) => {
	switch (action.type) {
	  case ACHETER:
		const updatedPanier = state.Panier.map(item => {
		  const courseInCours = state.Cours.find(course => course.id === item.id);
		  if (courseInCours && courseInCours.selected) {
			return { ...item, selected: false };
		  }
		  return item;
		});
		return {
		  ...state,
		  Achats: [...state.Achats, action.payload],
		  Cours: state.Cours.map(course => {
			const courseInPanier = state.Panier.find(item => item.id === course.id);
			if (courseInPanier) {
			  return { ...course, selected: false };
			}
			return course;
		  }),
		  Panier: []
		};
	  case SUP_ACHAT:
		return {
		  ...state,
		  Achats: state.Achats.filter(item => item.id !== action.payload.id)
		};
	  default:
		return state;
	}
  };
  