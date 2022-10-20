import styled from 'styled-components';
import pacModel from '../assets/Pac-Man.png';
import { Board } from './Board';
import { Controls } from './Controls';
import { HealthBar } from './HealthBar';
import { Score } from './Score';


export const Level1 = () => {
    return (
        <StyledLevel>
            <h1>Pac-man</h1>
            <Score />
            <Board />
            <HealthBar />

            <Controls/>
            
            <div className="modelContainer">
                <img src={pacModel} alt="" />
            </div>


        </StyledLevel>
    );
};


const StyledLevel = styled.div`
position: relative;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

  
.modelContainer{
    position: absolute;
    bottom: -10rem;
    left: 0;
    display: flex;

    gap: 2rem;
    width: 15rem;
    padding: 2rem;

    img{
        width: 100%;
    }
}




`;