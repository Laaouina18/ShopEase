import {AJOUTER,HIDE,SHOW,ACHETER} from "./ActionsTypes"



const ajouter_panier=(cours)=>{
return{
	type:AJOUTER,
	payload:cours
}
}

const acheter_cours=(cours)=>{
	return{
      type:ACHETER,
      payload:cours
	}
}
const show_cours=()=>{

}

const hide_cours=()=>{

}