/** @format */

import styled from 'styled-components';

const BoxContainer = styled.div`
	margin-top: 30px;
	width: 120px;
`;

const BoxTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	font-size: 14px;
	position: relative;
	border-radius: 5px;
	height: 26px;
	background: #0a8ca9;
`;

const BoxValue = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	color: #232323;
	padding-top: 4px;
	height: 30px;
	border-radius: 5px;
	margin-top: -7px;
	background-color: #e5e5e5;
`;

const LittleCard = ({ title, value }) => {
	return (
		<BoxContainer>
			<BoxTitle>{title}</BoxTitle>
			<BoxValue>{value}</BoxValue>
		</BoxContainer>
	);
};

export default LittleCard;
