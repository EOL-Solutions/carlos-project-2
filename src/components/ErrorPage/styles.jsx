import styled from 'styled-components'
import errorImg from '@/images/error.webp'

export const Main = styled.main`
  display:grid;
  place-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background: url(${errorImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat; 
  background-attachment: fixed;
`
