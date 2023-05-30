export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  something: {};
};

export enum Savereceta {
  "SAVE_RECETA" = "SAVE_RECETA",
}

export interface XAction {
  action: Savereceta.SAVE_RECETA;
  payload: Pick<AppState, "something">;
}

export type Actions = XAction;
