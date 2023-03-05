import React from 'react';
import Posts from '../Posts';
import {Image} from '../App';
import {
    useHistory,
    useParams
  } from "react-router-dom";
import styled, {createGlobalStyle} from 'styled-components';
import { PostGrid, InfoGrid, ImageGrid} from './PostGrid';
import {MiniUserGrid} from '../Profile/UserGrid';
import {ProfileImage} from '../Profile/ProfileImage';

const ModalStyled = styled.div`
    position: absolute;
    background: #fff;
    top: ${({top}) => top}px; //
    height: 70vh;
    left: 15%;
    right: 15%;
    padding: 15px;
    border: 2px solid #444;
    @media (max-width: 990px){
      left: 0;
      right: 0;
      top: ${({top}) => top}px;
      height: 80vh;
      width: auto;
  }
    
`;

const OverflowHidden = createGlobalStyle`
  body {
      overflow: hidden;
  }
`;

export function Modal() {
    let history = useHistory();
    let { id } = useParams();
    let image = Posts[parseInt(id, 10)];
  
    if (!image) return null;
  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
      <div
        onClick={back}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          height: "5000px",
          background: "rgba(0, 0, 0, 0.8)"
        }}
      >
        <ModalStyled
            top={window.scrollY + (window.innerHeight/10)}
        >
        <OverflowHidden />
        <PostGrid>
          <ImageGrid>
            <Image isModal index={image.id} />
          </ImageGrid>
          <InfoGrid>
            <div style={{display: "flex"}}>
              <ProfileImage mini />
              <div style={{display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: 10 }}>
                <h2 style={{marginBottom: 0, marginTop: 0}}>Victoria Puentes</h2>
                <h5 style={{marginBottom: 0, marginTop: 0}}>{image.year}</h5>
              </div>
            </div>
            
            <p tyle={{marginTop: 0}}>
              <h1 style={{marginBottom: 15}}>{image.title}</h1>
              {image.description}
            </p>
            <div></div>
          </InfoGrid>
        </PostGrid>
        </ModalStyled>
      </div>
    );
  }