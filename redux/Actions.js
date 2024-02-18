import { AJOUTER, HIDE, SHOW, ACHETER, SUPPRIMER ,SUP_ACHAT} from "./ActionsTypes";
const ajouter_panier = (cours) => {
 
  return {
	
    type: AJOUTER,
    payload: cours
	
  };
};

const acheter_cours = (cours) => {
  return {
    type: ACHETER,
    payload: cours
  };
};

const show_cours = (cours) => {
  return {
    type: SHOW,
    payload: cours
  };
};

const hide_cours = (cours) => {
  return {
    type: HIDE,
    payload: cours
  };
};

const supprimer_panier = (cours) => {
  return {
    type: SUPPRIMER,
    payload: cours
  };
};
const supprimer_achat=(achat)=>{
	return{
		type:SUP_ACHAT,
		payload:achat
	}
}

export { ajouter_panier, acheter_cours, hide_cours, show_cours ,supprimer_panier,supprimer_achat};
