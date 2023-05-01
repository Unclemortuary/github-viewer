import { Octokit } from "@octokit/core";

const getApi = ({ signal }) => new Octokit({ auth: API_TOKEN, request: { signal: signal }});

export const request = (params) => getApi({ signal: params.signal }).request({
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