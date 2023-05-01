import { Octokit } from 'octokit';

const getApi = ({ signal }) => new Octokit({ auth: API_TOKEN, request: { signal: signal }});

export const request = (params) => getApi({ signal: params.signal }).request({
    headers: {
        'Accept': 'application/vnd.github+json'
    },
    method: 'GET',
    ...params,
});

export const getIterator = (params) => getApi({ signal: params.signal }).paginate.iterator({
    method: 'GET',
    url: params.url,
    per_page: params.pageSize
});

export const requestUser = ({ username }) => request({
    url: '/users/{username}',
    username,
});