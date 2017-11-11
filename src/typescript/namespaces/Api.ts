import { App } from './App';
import { Http } from './modules/Http';

export namespace Api {
    export function getUsers () {
        Http.getRequest(`/users/`)
            .catch(function (error) {
                console.log('There was an error', error);
            })
            .then(function (result) {
                App.setState('users', result);
            })
    }
    export function getUserById (id: string) {
        Http.getRequest(`/users/${id}`)
            .then(function (result) {
                console.log('List of users', result);
            })
    }
}