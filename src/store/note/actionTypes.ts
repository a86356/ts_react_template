export const ADD_NOTE='ADD_NOTE'
export const REMOVE_NOTE='REMOVE_NOTE'

export interface ADD_Action  {type:typeof ADD_NOTE,payload:any[]}
export interface REMOVE_Action  {type:typeof REMOVE_NOTE,payload:number}



export type AllActions = ADD_Action | REMOVE_Action