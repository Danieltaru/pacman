import styled from 'styled-components';


export const Score = () => {
    return (
        <StyledScore>
            <p>score</p>
            <p>10</p>
        </StyledScore>
    );
};


const StyledScore = styled.div`
  width: 100%;  
max-width: 50rem;
    background: hsla(0,0%,100%, .1);
    display: flex;
    
    justify-content: center;
    
    gap: 1rem;
    font-size: .8rem;
`;