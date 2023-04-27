import { Octokit } from "@octokit/core";

let api = null;

const getApi = () => {
    if (!api) api = new Octokit({ auth: API_TOKEN });
    return api;
};

const request = ({ params, onBefore, onSuccess, onError, onCleanup }) => {
    if (typeof onBefore === 'function') onBefore();
    getApi().request({
        ...params
    })
    .then(response => {
        if (response.status === 200) onSuccess(response.data);
    })
    .catch(err => typeof onError === 'function' ? onError(err) : console.log(err))
    .finally(() => typeof onCleanup === 'function' ? onCleanup() : null);
};

export const requestUser = ({ username, onBefore, onSuccess, onError, onCleanup }) => request({
    params: {
        method: 'GET',
        url: '/users/{username}',
        username,
        headers: {
            'Accept': 'application/vnd.github+json'
        }
    },
    onBefore,
    onSuccess,
    onError,
    onCleanup
});