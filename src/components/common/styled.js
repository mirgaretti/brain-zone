import styled from "styled-components";

export const Text = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.height};
  color: #574AB2;
  margin: 0;
`;

export const BoldText = styled.span`
  font-weight: 600;
`;

export const Arrow = styled.img`
  position: absolute;
  cursor: pointer;
  bottom: 15px;
  right: 15px;
  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 1;
  }
`;

export const OrangeButton = styled.button`
  padding: 6px 35px;
  margin: auto;
  background-color: #ffa000;
  width: fit-content;
  border-radius: 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  color: #FFFFFF;
  outline: none;
  border: 0;
  font-family: 'Comfortaa';
`;