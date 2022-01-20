/** @format */

import { Box, Typography, Grid, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import CardRepo from '../components/CardRepo';
import TransitionsModal from '../components/Modal';
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

	return (
		<>
			<Box maxWidth='xl' sx={cotainerBox}>
				<Box
					mt={5}
					sx={{ display: 'flex', justifyContent: 'center', maxWidth: '90%' }}>
					<SearchUser setOpen={setOpen} />
				</Box>
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
					<>
						<ProfileCard />
						<Box mt={6} width='90vw'>
							<Typography
								sx={{ color: '#232323', textAlign: 'center' }}
								variant='h2'
								component='h2'>
								<strong>Repositório</strong>
							</Typography>
							<Grid container spacing='5'>
								<Grid item xs='6' md='4'>
									<CardRepo title='Name Project' value='bruno3du/bruno3du' />
								</Grid>
								<Grid item xs='6' md='4'>
									<CardRepo title='Name Project' value='bruno3du/bruno3du' />
								</Grid>
								<Grid item xs='6' md='4'>
									<CardRepo title='Name Project' value='bruno3du/bruno3du' />
								</Grid>
								<Grid item xs='6' md='4'>
									<CardRepo title='Name Project' value='bruno3du/bruno3du' />
								</Grid>
								<Grid item xs='6' md='4'>
									<CardRepo title='Name Project' value='bruno3du/bruno3du' />
								</Grid>
							</Grid>
						</Box>
					</>
				)}
				<TransitionsModal open={open} setOpen={setOpen} />
			</Box>
		</>
	);
};

export default GithubProfile;
