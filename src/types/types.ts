export interface Note {
  id?: number;
  title: string;
  content: string;
}

export interface ReduxAction {
  type: string;
  payload?: any;
}