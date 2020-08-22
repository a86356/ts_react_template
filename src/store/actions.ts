import {CHANGE_VALUE,CHANGE_VALUE_TYPE} from "./const";

export interface CHANGEAction {
    type: CHANGE_VALUE_TYPE
}
export const change = ():CHANGEAction => ({
    type: CHANGE_VALUE
})

export type ModifyAction = CHANGEAction