import styled from 'styled-components';
import { MdMoreHoriz } from 'react-icons/md';
import { GoTriangleUp } from 'react-icons/go';
import { motion } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';

const StyledTimeIcon = styled(MdMoreHoriz)`
  color: #fff;
  width: 35px;
  position: absolute;
  right: -60px;
  top: 60px;
  border-radius: 50%;
  text-shadow: 0 1px 5px rgb(0 0 0 / 10%);
  cursor: pointer;
  height: 35px;

  :hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

const StyledTimeToggle = styled(motion.span)`
  width: 165px;
  box-sizing: border-box;
  padding: 6px 0;
  font-size: 14px;
  display: inline-block;
  letter-spacing: 0;
  vertical-align: center;
  background: rgba(15, 15, 15, 0.925);
  border-radius: 5px;
  border-color: rgba(255, 255, 255, 0.15);
  position: absolute;
  top: 105px;
  right: -185px;
  cursor: pointer;
`;

const StyledToggleButton = styled(motion.span)`
  background: #4cbf3f;
  width: 28px;
  height: 18px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 3px;
  box-sizing: border-box;
  transition-duration: 0.2s;

  &.Off {
    background: rgba(255, 255, 255, 0.25);
    justify-content: flex-start;
  }
`;

const StyledCircle = styled(motion.span)`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #fff;
  transition-duration: 0.2s;

  &.Off {
    opacity: 0.5;
  }
`;

const StyledTriangle = styled(GoTriangleUp)`
  position: absolute;
  top: -19px;
  left: 15px;
  color: rgba(15, 15, 15, 0.925);
  text-shadow: 0 1px 5px rgb(0 0 0 / 10%);
  width: 16px;
  height: 30px;
`;

const StyledDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 15px;
  box-sizing: border-box;

  :hover {
    background: rgba(255, 255, 255, 0.12);
  }
`;

export default function GreetingTimeToggle({ onClick, onToggle, visible }) {
  const [toggleButton, setToggleButton] = useState(true);

  return (
    <>
      <StyledTimeIcon onClick={onClick}></StyledTimeIcon>
      {visible && (
        <StyledTimeToggle
          onClick={() => {
            onToggle();
            setToggleButton(!toggleButton);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.1,
          }}
          exit={{ opacity: 0 }}
        >
          <StyledDiv>
            24-hour clock
            <StyledToggleButton className={toggleButton ? '' : 'Off'}>
              <StyledCircle className={toggleButton ? '' : 'Off'} />
            </StyledToggleButton>
          </StyledDiv>
          <StyledTriangle />
        </StyledTimeToggle>
      )}
    </>
  );
}

GreetingTimeToggle.propTypes = {
  onClick: PropTypes.func,
  onToggle: PropTypes.func,
  visible: PropTypes.bool,
};
