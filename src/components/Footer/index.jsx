/** @format */

import { Box, Container } from '@mui/material';


const FooterWrapper = {
  textAlign:"right",
  padding: "40px 20px 20px 0",
  color: "#5A5A5A"
}

export default function Footer() {
	return (
		<Container>
			<Box sx={FooterWrapper}>Created by Bruno Eduardo</Box>
		</Container>
	);
}
