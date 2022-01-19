/** @format */

import {
	Container,
	IconButton,
	InputBase,
	Paper,
	Typography,
} from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import React, { useState } from 'react';
import { Box } from '@mui/system';

const Home = () => {
	const [text, setText] = useState('');
	return (
		<>
			<Container maxWidth='xl'>
				<Box
					sx={{ display: 'flex', height: '100vh' }}
					flexDirection='column'
					justifyContent='center'
					alignItems='center'>
					<Typography
						variant='h3'
						sx={{ color: '#232323', textAlign: 'center' }}
						mb={2}>
						Search a Github Profile
					</Typography>
					<Paper
						component='form'
						sx={{
							p: '2px 4px',
							display: 'flex',
							alignItems: 'center',
							width: 700,
							maxWidth: '90%',
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
			</Container>
		</>
	);
};

export default Home;
