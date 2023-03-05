import React from 'react';
import styled from 'styled-components';
import {ProfileImage} from './ProfileImage';

const UserGridStyled = styled.div`
    display: grid;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 50px;
    gap: 15px;
    grid-template-areas: "photo ."
                         "photo name"
                         "photo label"
                         "photo description"
                         "photo .";
    @media (max-width: 990px){
        grid-template-areas: "photo ."
                             "photo name"
                             "photo label"
                             "photo ."
                             "description .";
    }
`;

export const MiniUserGrid = styled.div`
    display: flex;
    justify-content: left;
    grid-template-columns: auto auto;
    gap: 10px;
`;

const Photo = styled.div`
    grid-area: photo;
`;

const Name = styled.div`
    grid-area: name;
    font-size: 35px;
    align-self: center;
`;

const Label = styled.div`
    grid-area: label;
    @media (max-width: 990px){
        padding-left: 0px;
    }
`;

const Description = styled.div`
    grid-area: description;
    max-width: 400px;
    @media (max-width: 990px){
        grid-column: 1/3;
        padding-left: 25px;
    }
`;

export default function() {
    return <UserGridStyled> 
            <Photo><ProfileImage/></Photo>
            <Name style={{margin:0}}>Victoria Puentes</Name>
            <Label style={{margin:0}}><strong>PPR Certified EC K-12</strong>   •  <strong> Theater EC K-12</strong> </Label>
            <Description style={{margin:0}}>Experienced theater teacher passionate about nurturing students' creativity and confidence. Committed to creating a safe and inclusive learning environment. Skilled in directing and producing high-quality productions.</Description>
         </UserGridStyled>;
}