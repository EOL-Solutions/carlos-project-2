import styled from 'styled-components'
import { ResponsiveTo } from '../../hooks/useResponsive'
import cloudImg from '@/images/night-city.webp'

export const Banner = styled.section`
  height: 300px;
  display: grid;
  align-items: center;
  background: linear-gradient(0deg, 
                rgba(4,5,23,1) 60%, 
                  rgba(255,255,255,0) 100%), 
              url(${cloudImg});
  background-size: auto, cover;
  background-position-y: top;
  background-attachment: fixed;
  ${ResponsiveTo('lg')}{
    height: 300px;
  }
  hr{
    margin: 30px 0;
  }
`
