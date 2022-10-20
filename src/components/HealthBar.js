import styled from 'styled-components';
import pacman from '../assets/Original_PacMan.png';
import cherry from '../assets/cherry.png';

export const HealthBar = () => {
    return (
        <StyledHealthBar>
            <div className="lives">
                <div className="pacContainer">
                    <img src={pacman} alt="" />
                </div>
                <div className="pacContainer">
                    <img src={pacman} alt="" />
                </div>
            </div>

            <div className="pacContainer">
                <img src={cherry} alt="" />
            </div>
        </StyledHealthBar>
    );
};


const StyledHealthBar = styled.div`
  
  width: 100%;  
max-width: 50rem;
    /* background: hsla(0,0%,100%, .1); */
    
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    gap: 1rem;

.lives{    
    display: flex;
}

.pacContainer{    
    width: 2rem;
    img{
        width: 100%;
    }
}
`;