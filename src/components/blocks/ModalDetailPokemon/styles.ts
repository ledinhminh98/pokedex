import styled, { css, keyframes } from 'styled-components'
import { Text } from 'components/elements'
import { Grid } from '@material-ui/core'
import WatermarkLarge from 'assets/img/watermark-pokeball-large.svg'
import { bgType as bg, IWrapperProps } from '../CardPokemon/styles'
import { bgType } from '../TypesPokemon/styles'

interface ILeftProps {
  color?: IWrapperProps['color']
}
interface ITitleProps {
  white?: boolean
}

interface IAbilityProps {
  color?: IWrapperProps['color']
}

export const Container = styled(Grid)`
  height: 100%;
`

interface IBarProps {
  size: number
}

const widthExpand = (size: number) => keyframes`
  0% {
    width: 0px;
  }
  100% {
    width: ${size / 1.5}%;
  }
`

export const List = styled.ul`
  margin-top: 35px;
  margin-bottom: 15px;
  li {
    padding: 10px 0;
  }
`

export const Bar = styled.div<IBarProps>`
  width: 100%;
  height: 6px;
  margin-top: 5px;
  background: ${(props) => props.theme.palette.grey[100]};
  position: relative;
  border-radius: 15px;
  &:after {
    height: 100%;
    position: absolute;
    background: ${(props) => props.theme.palette.success.main};
    content: '';
    border-radius: 15px;
    animation: ${(props) => widthExpand(props.size)} 0.5s forwards 0.5s;
  }
`

export const CustomTitle = styled(Text)`
  color: ${(props) => props.theme.palette.common.white};
  font-size: 32px;
  text-transform: capitalize;
  word-break: break-all;
`

export const CustomSubTitle = styled(Text)<ITitleProps>`
  color: ${(props) => props.theme.palette.success.main};
  font-size: 18px;

  ${(props) =>
    props.white &&
    css`
      color: ${props.theme.palette.common.white};
    `}
`

export const Left = styled(Grid)<ILeftProps>`
  ${(props) => bg[props.color || 'default']}
  padding: 50px 35px;
  text-align: center;
  position: relative;

  &:before {
    position: absolute;
    z-index: 0;
    content: '';
    width: 100%;
    height: 100%;
    background-image: url(${WatermarkLarge});
    background-repeat: no-repeat;
    background-position: top 106px center;
    background-size: 100px;
    left: 0;
    top: 0;
    opacity: 0.1;
  }
`

export const Relative = styled.div`
  position: relative;
`

export const Right = styled(Grid)`
  padding: 50px 35px;
  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`

export const ListAbilities = styled.ul<IAbilityProps>`
  margin-top: 25px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 1fr;
  li {
    ${(props) => bgType[props.color || 'default']}
    padding:5px;

    color: ${(props) => props.theme.palette.common.white};
    border-radius: 5px;
    text-align: center;
  }
`

export const Img = styled.img`
  margin-bottom: 35px;
  margin-top: 15px;
`
