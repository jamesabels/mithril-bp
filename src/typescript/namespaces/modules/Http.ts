import * as m from 'mithril';

export module Http {
    const state = {
        baseUrl: 'https://jsonplaceholder.typicode.com',
        apiKey: null
    };
    export function getRequest(url: string) {
        return m.request({
            method: 'GET',
            headers: {},
            url: `${state.baseUrl}${url}`
        })
    }
    export function postRequest(url: string, data: any) {
        return m.request({
            method: 'POST',
            headers: {},
            url: `${state.baseUrl}${url}`,
            data
        })
    }
    export function putRequest(url: string, data: any) {
        return m.request({
            method: 'PUT',
            headers: {},
            url: `${state.baseUrl}${url}`,
            data
        })
    }
    export function deleteRequest(url: string) {
        return m.request({
            method: 'DELETE',
            headers: {},
            url: `${state.baseUrl}${url}`
        })
    }
}