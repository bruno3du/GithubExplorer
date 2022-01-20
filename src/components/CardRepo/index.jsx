/** @format */
import styled from 'styled-components';

const BoxContainer = styled.div`
	margin-top: 30px;
	overflow: hidden;
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
	color: #0c6c82;
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
				<a href={path} rel='noreferrer' target='_blank'>
					{value}
				</a>
			</BoxValue>
		</BoxContainer>
	);
};

export default CardRepo;
