/** @format */

import { Avatar, Box, Typography, Grid } from '@mui/material';
import avatarImage from '../../global/foto.jpeg';
import LittleCard from '../LittleCard';

const ProfileCard = () => {
	return (
		<Box
			mt='5%'
			bgcolor='#2B4469'
			width='700px'
			maxWidth='90%'
			justifyContent='center'
			borderRadius='10px'
			alignItems='center'>
			<Box sx={{ display: 'flex' }}>
				<Box>
					<Avatar
						alt='foto perfil github'
						src={avatarImage}
						sx={{ width: 200, height: 200, marginTop: 4, marginLeft: 7 }}
					/>
				</Box>
				<Box mt={6} ml={6}>
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
					sx={{ width: '100%' }}
					container
					rowSpacing={1}
					columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
					<Grid item xs={3}>
						<LittleCard title='Followers' value='30' />
					</Grid>
					<Grid item xs={3}>
						<LittleCard title='Followings' value='30' />
					</Grid>
					<Grid item xs={3}>
						<LittleCard title='Gists' value='30' />
					</Grid>
					<Grid item xs={3}>
						<LittleCard title='Repos' value='30' />
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default ProfileCard;
