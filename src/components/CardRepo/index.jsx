/** @format */
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BoxContainer = styled.div`
	margin-top: 30px;
`;

const BoxTitle = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	font-size: 14px;
	position: relative;
	border-radius: 5px;
	padding: 15px 10px;
	background: #223d66;
`;

const BoxValue = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 14px;
	color: #0C6C82;
	padding: 25px 5px 20px 15px;
	border-radius: 5px;
	margin-top: -7px;
	background-color: #f0f0f0;
`;

const CardRepo = ({ title, value, path = '/' }) => {
	return (
		<BoxContainer>
			<BoxTitle>
				<strong>{title}</strong>
			</BoxTitle>
			<BoxValue>
				<Link to={path}>{value}</Link>
			</BoxValue>
		</BoxContainer>
	);
};

export default CardRepo;
