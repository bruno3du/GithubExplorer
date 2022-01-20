/** @format */

import { Avatar, Box, Typography, Grid, Button } from '@mui/material';
import LittleCard from '../LittleCard';
import { styled } from '@mui/material/styles';
import useGithub from '../../hooks/useGithub';

const ButtonStyled = styled(Button)({
	textDecoration: 'none',
	minWidth: '120px',
	fontSize: 14,
	padding: '8px 16px',
	lineHeight: 1.5,
	background: '#0A8CA9',
	color: '#FFFFFF',
	border: 'none',
	'&:hover': {
		backgroundColor: '#117991',
	},
});

const ProfileCard = ({
	setOpenRepos,
	openRepos,
	setOpenStarred,
	openStarred,
}) => {
	const { githubState, getUserRepos, getUserStarred } = useGithub();

	async function handleRepos(user) {
		if (!user) return;

		setOpenStarred(false);
		setOpenRepos(!openRepos);

		if (githubState.repositories.length !== 0) return;

		await getUserRepos(user);
	}
	console.log(githubState);
	async function handleStarred(user) {
		if (!user) return;

		// fechando repositório caso aberto
		setOpenStarred(!openStarred);
		
		setOpenRepos(false);

		if (githubState.starred.length !== 0) return;

		await getUserStarred(user);
	}

	function cutString(string, quant = 16) {
		if (string?.length > quant) {
			const newName = string.substring(0, quant);
			const conc = newName + '...';
			return conc;
		}
		return string;
	}

	return (
		<Box
			mt='5%'
			bgcolor='#2B4469'
			width='700px'
			maxWidth='90%'
			justifyContent='center'
			borderRadius='10px'
			alignItems='center'
			boxShadow='1px 2px 2px rgba(0, 0, 0, 0.6)'>
			<Box
				sx={{
					maxWidth: '600px',
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-evenly',
				}}>
				<Box>
					<Avatar
						alt='foto perfil github'
						src={githubState.user.avatar}
						sx={{ width: 200, height: 200, marginTop: 4 }}
					/>
				</Box>
				<Box mt={6}>
					<Typography variant='h4' color='white'>
						{cutString(githubState.user.name)}
					</Typography>

					<Typography
						variant='p'
						color='white'
						sx={{ display: 'block', marginTop: '15px', fontSize: '14px' }}>
						<strong>Username:</strong> {githubState.user.login}
					</Typography>

					<Typography
						variant='p'
						sx={{ display: 'block', marginTop: '15px', fontSize: '14px' }}
						color='white'>
						<strong>Company:</strong> {cutString(githubState.user.company)}
					</Typography>

					<Typography
						variant='p'
						color='white'
						sx={{ display: 'block', marginTop: '15px', fontSize: '14px' }}>
						<strong>Location:</strong> {cutString(githubState.user.location)}
					</Typography>

					<Typography
						variant='p'
						color='white'
						sx={{ display: 'block', marginTop: '15px', fontSize: '14px' }}>
						<strong>Blog:</strong>{' '}
						<a href={githubState.user.blog} rel='noreferrer' target='_blank'>
							{cutString(githubState.user.blog, 36)}
						</a>
					</Typography>
				</Box>
			</Box>
			<Box sx={{ width: '90%', margin: '30px 10px', gridAutoFlow: 'row' }}>
				<Grid margin='0 auto' container spacing={2}>
					<Grid item xs={6} sm={3}>
						<LittleCard title='Followers' value={githubState.user.followers} />
					</Grid>
					<Grid item xs={6} sm={3}>
						<LittleCard title='Followings' value={githubState.user.following} />
					</Grid>
					<Grid item xs={6} sm={3}>
						<LittleCard title='Gists' value={githubState.user.public_gists} />
					</Grid>
					<Grid item xs={6} sm={3}>
						<LittleCard title='Repos' value={githubState.user.public_repos} />
					</Grid>
				</Grid>
			</Box>
			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-around',
					gap: '10px',
					marginBottom: '-15px',
				}}>
				<ButtonStyled onClick={() => handleRepos(githubState.user.login)}>
					Repositório
				</ButtonStyled>
				<ButtonStyled onClick={() => handleStarred(githubState.user.login)}>
					Starred
				</ButtonStyled>
			</div>
		</Box>
	);
};

export default ProfileCard;
