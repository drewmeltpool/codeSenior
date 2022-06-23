export interface IAction<ActionEnum, T> {
  type: ActionEnum;
  payload: T;
}
