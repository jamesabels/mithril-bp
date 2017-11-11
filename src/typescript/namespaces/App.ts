interface State {
  mode: String;
  users: any;
}

export namespace App {
  export const state: State = {
    mode: 'view',
    users: []
  };
  export function setState(stateKey: string, value: any) {
    state[stateKey] = value;
  }
}
