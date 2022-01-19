/** @format */

import { SearchOutlined } from '@mui/icons-material';
import { IconButton, InputBase, Paper, Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import CardRepo from '../components/CardRepo';
import ProfileCard from '../components/ProfileCard';

const GithubProfile = () => {
	const [text, setText] = useState('');

	return (
		<>
			<Box
				maxWidth='xl'
				sx={{
					display: 'flex',
					height: '100vh',
					flexDirection: 'column',
					alignItems: 'center',
				}}>
				<Box
					mt={5}
					sx={{ display: 'flex', justifyContent: 'center', maxWidth: '90%' }}>
					<Paper
						component='form'
						sx={{
							p: '2px 4px',
							display: 'flex',
							width: 600,
						}}>
						<InputBase
							value={text}
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
				</Box>
				<ProfileCard />
				<Box mt={6}>
					<Typography sx={{color: '#232323'}} variant='h2' component='h2'>
						<strong >Repositório</strong>
					</Typography>
					<CardRepo />
				</Box>
			</Box>
		</>
	);
};

export default GithubProfile;
