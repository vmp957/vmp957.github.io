import styled from 'styled-components';

export const PostGrid = styled.div`
    display: flex;
    height: 100%;
    @media (max-width: 990px){
       flex-direction: column;
    }
`;

export const InfoGrid  = styled.div`
    padding: 20px;
    padding-top: 10%;
    display: flex;
    flex-direction: column;
    
    @media (max-width: 990px){
        flex-grow: 1;
        padding-top: 20px;
        flex-direction: column;
     }
`;


export const ImageGrid = styled.div`
    display: flex;
    width: 50%;
    @media (max-width: 990px){
        flex-grow: 3;
        height: 50%;
     }
`;