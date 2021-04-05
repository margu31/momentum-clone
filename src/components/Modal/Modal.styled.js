import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledModal = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

export default StyledModal;
