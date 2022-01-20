/** @format */

import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const GithubContext = createContext({
	loading: false,
	user: {},
	repositories: [],
	starred: [],
});

const GithubProvider = ({ children }) => {
	const [githubState, setGithubState] = useState({
		hasUser: false,
		loading: false,
		loading_repo: false,
		user: {
			id: undefined,
			avatar: undefined,
			login: undefined,
			name: undefined,
			html_url: undefined,
			blog: undefined,
			company: undefined,
			location: undefined,
			followers: 0,
			following: 0,
			public_gists: 0,
			public_repos: 0,
		},
		repositories: [],
		starred: [],
	});

	const getUser = async (username) => {
		setGithubState(({ loading, ...prevState }) => ({
			loading: !prevState.loading,
			...prevState,
		}));

		await api
			.get(`users/${username}`)
			.then(({ data }) => {
				setGithubState(({ hasUser, user, repositories, ...prevState }) => ({
					hasUser: true,
					repositories: [],
					user: {
						id: data.id,
						avatar: data.avatar_url,
						login: data.login,
						name: data.name,
						html_url: data.html_url,
						blog: data.blog,
						company: data.company,
						location: data.location,
						followers: data.followers,
						following: data.following,
						public_gists: data.public_gists,
						public_repos: data.public_repos,
					},
					...prevState,
				}));
			})
			.catch((error) => {
				setGithubState(({ hasUser, ...prevState }) => ({
					hasUser: false,
					...prevState,
				}));
				throw new Error(error);
			})
			.finally(() => {
				setGithubState(({ loading, ...prevState }) => ({
					loading: false,
					...prevState,
				}));
			});
	};

	const getUserRepos = async (username) => {
		await api
			.get(`users/${username}/repos`)
			.then(({ data }) => {
				setGithubState(({ loading_repo, repositories, ...prevState }) => ({
					loading_repo: true,
					repositories: data,
					...prevState,
				}));
			})
			.finally(() => {
				setGithubState(({ loading_repo, ...prevState }) => ({
					loading_repo: false,
					...prevState,
				}));
			});
	};

	const getUserStarred = async (username) => {
		await api.get(`users/${username}/starred`).then(({ data }) => {
			setGithubState(({ starred, ...prevState }) => ({
				...prevState,
				starred: data,
			}));
		});
	};

	const contextValue = {
		githubState,
		getUser: useCallback(async (username) => await getUser(username), []),
		getUserRepos: useCallback(
			async (username) => await getUserRepos(username),
			[]
		),
		getUserStarred: useCallback(
			async (username) => await getUserStarred(username),
			[]
		),
	};

	return (
		<GithubContext.Provider value={contextValue}>
			{children}
		</GithubContext.Provider>
	);
};

export default GithubProvider;
