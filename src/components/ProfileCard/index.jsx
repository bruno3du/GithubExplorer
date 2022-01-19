/** @format */

import { Avatar, Box, Typography, Grid, Button } from '@mui/material';
import avatarImage from '../../global/foto.jpeg';
import LittleCard from '../LittleCard';
import { styled } from '@mui/material/styles';

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

const ProfileCard = () => {
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
						src={avatarImage}
						sx={{ width: 200, height: 200, marginTop: 4 }}
					/>
				</Box>
				<Box mt={6}>
					<Typography variant='h4' color='white'>
						Bruno Eduardo
					</Typography>

					<Typography
						variant='p'
						color='white'
						sx={{ display: 'block', marginTop: '15px', fontSize: '14px' }}>
						<strong>Username:</strong> bruno3du
					</Typography>

					<Typography
						variant='p'
						sx={{ display: 'block', marginTop: '15px', fontSize: '14px' }}
						color='white'>
						<strong>Company:</strong>
					</Typography>

					<Typography
						variant='p'
						color='white'
						sx={{ display: 'block', marginTop: '15px', fontSize: '14px' }}>
						<strong>Location:</strong> Americana - São Paulo - Brazil
					</Typography>

					<Typography
						variant='p'
						color='white'
						sx={{ display: 'block', marginTop: '15px', fontSize: '14px' }}>
						<strong>Blog:</strong>
					</Typography>
				</Box>
			</Box>
			<Box sx={{ width: '100%', margin: '30px 20px' }}>
				<Grid
					maxWidth='100%'
					container
					rowSpacing={1}
					columnSpacing={{ xs: 0.2, sm: 0.5, md: 0.8 }}>
					<Grid item xs={6} sm={3}>
						<LittleCard title='Followers' value='30' />
					</Grid>
					<Grid item xs={6} sm={3}>
						<LittleCard title='Followings' value='30' />
					</Grid>
					<Grid item xs={6} sm={3}>
						<LittleCard title='Gists' value='30' />
					</Grid>
					<Grid item xs={6} sm={3}>
						<LittleCard title='Repos' value='30' />
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
				<ButtonStyled>Repositorio</ButtonStyled>
				<ButtonStyled>Starred</ButtonStyled>
			</div>
		</Box>
	);
};

export default ProfileCard;
