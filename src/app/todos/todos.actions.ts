import { createAction, props } from "@ngrx/store";

export const crear = createAction('[TODO] Crear TODO', props<{texto:string}>());