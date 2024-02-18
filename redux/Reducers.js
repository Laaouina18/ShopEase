import COURSES from "../data/data"
import { AJOUTER, HIDE, ACHETER, SHOW ,SUPPRIMER,SUP_ACHAT} from "./ActionsTypes"

const initialState = {
  Cours: COURSES,
  Achats : [],
  Panier: [],
}

export const reducer = (state = initialState, action) => {
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
		Cours:upd
		
      }
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
        Achats : [...state.Achats,action.payload],
		Cours: state.Cours.map(course => {
			const courseInPanier = state.Panier.find(item => item.id === course.id);
			if (courseInPanier) {
			  return { ...course, selected: false };
			}
			return course;
		  }),
		Panier:[]
      }
    case SUPPRIMER:
		const updCrs = state.Cours.map(cours => {
			if (cours.id === action.payload.id) {
			  return { ...cours,selected: false}; 
			}
			return cours;
		  });
      return {
        ...state,
        Panier: state.Panier.filter(item => item.id !== action.payload.id),
		Cours:updCrs
      }
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
		  case SUP_ACHAT:
		return {
    ...state,
    Achats: state.Achats.filter(item => item.id !== action.payload.id)
};

    default:
      return state
  }
}
