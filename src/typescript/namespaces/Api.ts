import { App } from './App';
import { Http } from './modules/Http';

interface Error {
    verb: string;
    message: any;
}

interface State {
    error: Array<Error>;
}

export namespace Api {
    export const state: State = {
        error: []
    }
    export function getUsers () {
        Http.getRequest(`/users/`)
            .then(function (result) {
                App.setState('users', result);
            })
            .catch(function (error) {
                console.log('There was an error', error);
                state.error.push({verb: 'error', message: 'HTTP Error: Please try again'});
            })
    }
    export function getUserById (id: string) {
        Http.getRequest(`/users/${id}`)
            .then(function (result) {
                console.log('List of users', result);
            })
            .catch(function(error) {
                console.log('There was an error', error);
                state.error.push({verb: 'error', message: 'HTTP Error: Please try again'});
                return;
            })
    }
}