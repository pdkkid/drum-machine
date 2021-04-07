import styled from 'styled-components';
export const Title = styled.h1`
    color: #111111;
    text-align: center;
    user-select: none;
    margin: 0;
    padding: 1em 1em;
    /* background: #AAAAAA; */
`;

export const Source = styled.div`
  font-size: 20px;
  flex-shrink: 0;
  text-align: center;
  user-select: none;
  padding: .75em .75em;
  /* background: #AAAAAA; */
  a {
    color: #111111;
    padding: 8px;
    border: hidden;
    border-radius: 10px;
    text-decoration: none;
    :hover {
        background:#AAAAAA;
    }
  }
`;

export const Section = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`;