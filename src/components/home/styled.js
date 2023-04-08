import styled from "styled-components";
import { Text } from "../common/styled";

export const ContentContainer = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 10px 10px rgba(255, 160, 0, 0.5);
  border-radius: 30px;
  padding: ${(props) => props.pad || '30px'};
  margin-bottom: 30px;
  overflow: hidden;
  position: relative;
`;

export const GreetingTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 55px;
  color: #230085;
  margin: 0;
`;

export const GreetingInfo = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const GreetingImage = styled.img`
  max-width: 40%;
  flex: 1;
`;

export const GreetingText = styled(Text)`
  flex: 1;
`;

export const AdvantageTitle = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 70px;
  color: #230085;
  margin: 0;
  background-image: url('/media/brush.svg');
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  width: 100%;
  background-size: contain;
  height: 70px;
`;

export const AdvantageListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const AdvantageList = styled.ul`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
`;

export const Advantage = styled.li`
  ::marker{
    content: url('/media/play.svg');
    margin: 10px;
    line-height: 10px;
    font-size: 20px;
  }
  :first-child{
    margin-bottom: 20px;
  }
`;

export const JuniorContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const JuniorTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 70px;
  color: #230085;
  text-align: center;
`;

export const JuniorBox = styled.div`
  background-color: ${(props) => props.color};
  box-sizing: border-box;
  width: 28%;
  height: 403px;
  border-radius: 20px;
  margin: 10px 40px;
  padding: 10px 20px;
  position: relative;
`;

export const JuniorImage = styled.img`
  position: absolute;
  bottom: 15px;
  right: 15px;
`;

export const MiddleTitleContainer = styled.div`
  background-color: #FF6D3C;  
  padding: 15px;
`;

export const MiddleTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 70px;
  color: #FFFFFF;
  text-align: center;
`;

export const MiddleContainer = styled.div`
  justify-content: space-between;
  display: flex;
`;

export const MiddleBox = styled.div`
  box-sizing: border-box;
  width: ${(props) => props.width};
  height: 370px;
  margin: 10px 40px;
  padding: 10px 20px;
  position: relative;
`;

export const MiddleImage = styled.img`
  width: 200px;
  height: 165px;
  padding: 45% 0;
  padding-right: 90px;
`;

export const MiddleText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 70px;
  color: #FF6D3C;
  text-align: center;
`;

export const SeniorTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 70px;
  color: #230085;
  text-align: center;
`;

export const SeniorContainer = styled.div`
justify-content: space-between;
  display: flex;
  padding: 20px;
  gap: 10px;
`;

export const SeniorDirection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: ${(props) => props?.flex || 1};
`;

export const SeniorBox = styled.div`
  background-color: ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 20px;
  padding: 10px 10px;
`;

export const SeniorTextContainer = styled.div`
  flex: 1.18;
`;











