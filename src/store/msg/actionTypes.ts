export const ADD_NOTE = 'ADD_NOTE'

export interface ADD_Action  {type:typeof ADD_NOTE,payload:string}

export type AllActions = ADD_Action