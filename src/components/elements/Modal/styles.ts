import styled, { keyframes } from 'styled-components'
import Modal from '@material-ui/core/Modal'

const zoomIn = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`
export const Container = styled.div`
  background: #fff;
  max-width: 600px;
  width: 100%;
  height: 500px;
  border-radius: 35px;
  border: 5px solid white;
  overflow: hidden;
  margin: 15px;

  &.open {
    animation: ${zoomIn} 0.5s ease-in-out;
  }
`

export const ModalStyled = styled(Modal)`
  align-items: center;
  justify-content: center;
  display: flex;
`
