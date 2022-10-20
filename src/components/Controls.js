import styled from 'styled-components';

export const Controls = () => {
    return (
        <StyledControls>
            <div className="arrows">
                <div className="joystick"></div>

            </div>
            <div className="buttons">
                <div className="joystick"></div>

            </div>

        </StyledControls>
    );
};

const StyledControls = styled.div`

width: 100%;
max-width: 25rem;

padding: 2rem;

background: hsla(0,0%,100%,.1);
border-radius: 10rem;

display: flex;
justify-content: space-around;
align-items: center;
gap: 2rem;

>:nth-child(n){    
    width: 100%;
    min-width: 10rem;
    min-height: 10rem;
    
    display: flex;
    justify-content: center;
    align-items: center;

    background: hsla(0,0%,100%,.1);
    
    border-radius: 50%;
}

.joystick{
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: hsla(0,0%,100%,.1);
}

.arrows{
}

.buttons{
}
  
`;