/** @format */

import { CircularProgress, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import useGithub from '../hooks/useGithub';
import { SearchUser } from '../components/SearchUser';
import TransitionsModal from '../components/Modal';

const Home = () => {
	const [open, setOpen] = useState(false);
	const { githubState } = useGithub();

	return (
		<>
			{githubState.loading ? (
				<div
					style={{
						width: '100vw',
						height: '100vh',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<CircularProgress />
				</div>
			) : (
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
						<SearchUser setOpen={setOpen} />
					</Box>
					<TransitionsModal open={open} setOpen={setOpen} />
				</Container>
			)}
		</>
	);
};

export default Home;
