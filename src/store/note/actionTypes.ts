export interface ADD_Action  {type:"ADD_NOTE",payload:string}
export interface REMOVE_Action  {type:"REMOVE_NOTE",payload:number}



export type AllActions = ADD_Action | REMOVE_Action