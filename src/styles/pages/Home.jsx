import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  h1 {
    font-size: 40px;
    color: ${({ theme }) => theme.colors.green};
  }
`
