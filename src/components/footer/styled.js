import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  bottom: 0px;
  background: rgba(87, 74, 178, 0.35);
  box-shadow: -1px -10px 10px rgba(255, 109, 60, 0.42);
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;

export const TextContainer = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
  color: #FFFFFF;
  text-shadow: 0px 10px 10px #230085;
  text-align: center;
`;

export const FooterText = styled.span`
  line-height: 40px;
`;

export const FooterIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

export const FooterIcon = styled.img`
  width: 40px;
  height: 40px;
`;