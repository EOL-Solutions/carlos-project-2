import styled from 'styled-components'
import mountainsImg from '../../assets/images/night-city.webp'
// import { ResponsiveTo } from '../../hooks/useResponsive'
export const Banner = styled.section`
  width: 100%;
  height: 300px;
  background: linear-gradient(0deg,  rgba(4,5,23,1) 20% , rgba(4,5,23,1) 50%, rgba(255,255,255,0) 100%), url(${mountainsImg});
  background-size: auto, cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: grid;
  place-content: center;
  position: relative;
`
