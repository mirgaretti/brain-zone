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