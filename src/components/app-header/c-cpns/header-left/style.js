import styled from 'styled-components'

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  fill: ${props => props.theme.color.primary};
  .logo {
    margin-left: 80px;
    cursor: pointer;    
  }
`