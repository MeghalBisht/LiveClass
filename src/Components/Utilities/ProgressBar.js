import React from 'react';
import styled from 'styled-components';

const Track = styled.div`
width: 70%;
height: 20px;
background-color: #bebebe;
border-radius: 4px;
`;

const Thumb = styled.div`
&:after{
    content: "${props => props.percentage}%";
    position: absolute;
    left: 220px;
    top: -8px;
    color: #fff;
    font-weight: bold;
    font-size: 22px;
}
position: relative;
width: ${props => props.percentage}%;
height: 100%;
background-color: #fff;
border-radius: 4px;
`;

function ProgressBar(props){
   
        return (
            <Track>
            <Thumb percentage={props.percentage} />
            </Track>
        );

}

export default ProgressBar