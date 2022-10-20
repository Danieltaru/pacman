import styled from 'styled-components';

import { Wall } from './Wall';
import { HealthBar } from './HealthBar';

export const Board = () => {
    return (
        <StyledBoard>
            <Wall />
            <Wall />
            <Wall />
        </StyledBoard>
    );
};

const StyledBoard = styled.div`

width: 100%;
height: 100%;
max-width: 50rem;
height: 20rem;
padding: 2rem;
margin: 0rem 10rem;

border: 1px solid white;

display: flex;
justify-content: center;
align-items: center ;

flex-wrap: wrap;

gap: 2rem;

  
`;