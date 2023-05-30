export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
  something: {};
};

export enum Savereceta {
  "X" = "X",
}

export interface XAction {
  action: Savereceta.X;
  payload: Pick<AppState, "something">;
}

export type Actions = XAction;
