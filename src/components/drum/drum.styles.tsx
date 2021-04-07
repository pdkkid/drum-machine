import styled from 'styled-components';
export const Main = styled.div`
    width: 100%;
    flex: 1 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5em;
`;

export const Box = styled.div`
    width: 80vh;
    height: 50vh;
    max-height: 65vh;
    max-width: 90vh;
    outline: #111111 solid 7px;
    display: flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: center;
    flex-wrap: wrap;
`;

export const StyledPad = styled.div`
    min-width: 50px;
    min-height: 50px; 
    flex-grow: 1;
    flex-basis: auto;
    margin: 10px;
    background: green;
    div {
        user-select: none;
        text-align: center;
        audio {

        }
    }
`;