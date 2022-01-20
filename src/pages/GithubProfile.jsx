/** @format */

import { Box, Typography, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import CardRepo from '../components/CardRepo';
import LoadingState from '../components/LoadingState';
import TransitionsModal from '../components/Modal';
import Footer from '../components/Footer';
import ProfileCard from '../components/ProfileCard';
import { SearchUser } from '../components/SearchUser';
import useGithub from '../hooks/useGithub';

const cotainerBox = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
};

const GithubProfile = () => {
	const [open, setOpen] = useState(false);
	const { githubState } = useGithub();
	const [openRepos, setOpenRepos] = useState(false);

	useEffect(() => {
		if (githubState.repositories.length === 0) {
			setOpenRepos(false);
		}
	}, [githubState.repositories]);

	return (
		<>
			<Box maxWidth='xl' sx={cotainerBox}>
				<Box
					mt={5}
					sx={{ display: 'flex', justifyContent: 'center', maxWidth: '90%' }}>
					<SearchUser setOpen={setOpen} />
				</Box>
				{githubState.loading ? (
					<LoadingState />
				) : (
					<>
						<ProfileCard setOpenRepos={setOpenRepos} openRepos={openRepos} />
						{openRepos && (
							<Box mt={6} width='90vw'>
								<Typography
									sx={{ color: '#232323', textAlign: 'center' }}
									variant='h2'
									component='h3'>
									<strong>Repositório</strong>
								</Typography>
								<Grid container spacing='5'>
									{githubState.loading_repo ? (
										<LoadingState height='50vh' />
									) : (
										githubState.repositories.map((repo) => (
											<Grid key={repo.id} item xs='6' md='4'>
												<CardRepo title={repo.name} value={repo.full_name} />
											</Grid>
										))
									)}
								</Grid>
							</Box>
						)}
					</>
				)}
				<TransitionsModal open={open} setOpen={setOpen} />
			</Box>
			<Footer></Footer>
		</>
	);
};

export default GithubProfile;
