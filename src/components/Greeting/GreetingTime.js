import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledTime = styled.div`
  font-size: 168px;
  letter-spacing: -5px;
  font-weight: 500;
  line-height: 1;
  color: #fff;
  position: relative;
`;

export default function GreetingTime({ time, children }) {
  return (
    <StyledTime>
      {time}
      {children}
    </StyledTime>
  );
}

GreetingTime.propTypes = {
  time: PropTypes.string.isRequired,
};
