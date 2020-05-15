import styled from 'styled-components';

export const Container = styled.div`
  width: 50%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: ${(props) => {
    if (props.column) {
      return 'space-evenly';
    }
  }};
  flex-direction: ${(props) => {
    if (props.column) {
      return 'column';
    }
  }};
  height: ${(props) => {
    if (props.column) {
      return '100%';
    }
  }};
`;

export const LittlePic = styled.img`
  height: 15vh;
  border-radius: 5px;
  border: 1px solid white;
`;

export const GalleryContainer = styled.div`
  background-color: midnightblue;
  display: flex;
  justify-content: space-evenly;
  padding: 1.2rem;
  border: solid white 3px;
`;
