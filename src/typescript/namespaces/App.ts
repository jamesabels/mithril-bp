interface State {
  mode: String;
  users: any;
  todos: Array<object>;
}

export namespace App {
  export const state: State = {
    mode: 'view',
    users: [],
    todos: []
  };
  export function setState(stateKey: string, value: any) {
    state[stateKey] = value;
  }
}
