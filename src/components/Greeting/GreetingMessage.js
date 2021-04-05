import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMessage = styled.span`
  font-size: 54px;
  font-weight: 500;
  line-height: normal;
  color: #fff;
`;

export default function GreetingMessage({ message, userName }) {
  return (
    <StyledMessage>
      {message}
      {userName}
    </StyledMessage>
  );
}

GreetingMessage.propTypes = {
  message: PropTypes.string,
  userName: PropTypes.string,
};
