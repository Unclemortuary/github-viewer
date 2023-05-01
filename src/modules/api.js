import { Octokit } from "@octokit/core";

let api = null;

const getApi = () => {
    if (!api) api = new Octokit({ auth: API_TOKEN });
    return api;
};

export const request = (params) => getApi().request({
    headers: {
        'Accept': 'application/vnd.github+json'
    },
    method: 'GET',
    ...params,
});

export const requestUser = ({ username }) => request({
    url: '/users/{username}',
    username,
});