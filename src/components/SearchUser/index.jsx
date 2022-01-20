/** @format */

import { SearchOutlined } from '@mui/icons-material';
import { IconButton, InputBase, Paper } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useGithub from '../../hooks/useGithub';

export const SearchUser = ({ setOpen }) => {
	const [text, setText] = useState('');
	const { getUser } = useGithub();
	const navigate = useNavigate();

	async function handleSearch(e) {
		e.preventDefault();

		if (!text.trim()) return;

		try {
			await getUser(text);
			navigate('/githubprofile');
		} catch (error) {
			console.log(error);
			setOpen(true);
		}
	}

	return (
		<Paper
			component='form'
			sx={{
				p: '2px 4px',
				display: 'flex',
				alignItems: 'center',
				width: 700,
				maxWidth: '90%',
			}}
			onSubmit={(e) => handleSearch(e)}>
			<InputBase
				value={text}
				required
				onChange={(e) => {
					setText(e.target.value);
				}}
				sx={{ ml: 1, flex: 1 }}
				placeholder='Search'
				inputProps={{ 'aria-label': 'Search' }}
			/>
			<IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
				<SearchOutlined />
			</IconButton>
		</Paper>
	);
};
