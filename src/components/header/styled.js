import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
  box-shadow: 0px 5px 10px #FFA000;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 100px;
  height: 80px;
`;

export const UserIcon = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

export const NavBar = styled.div``;

export const TopContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 15px;
`;

export const SearchInputContainer = styled.div`
  box-sizing: border-box;
  width: 250px;
  height: 35px;
  background: rgba(87, 74, 178, 0.16);
  border: 2px solid #574AB2;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 3px;
`;

export const SearchButton = styled.img`
  cursor: pointer;
  width: 27px;
  height: 27px;
  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 1;
  }
`;

export const NavIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const StagesContainer = styled.div`
  display: flex;
`;

export const Stage = styled.div`
  width: 130px;
  height: 35px;
  background-image: url('${(props) => props.background}');
  background-size: contain;
  background-repeat: no-repeat;
`;

export const LoginContainer = styled.div`
  width: 356.5px;
  background: #FFFFFF;
  border: 1px solid #574AB2;
  box-shadow: 0px 10px 10px rgba(35, 0, 133, 0.33);
  border-radius: 20px;
  position: absolute;
  top: 144px;
  right: 30px;
  z-index: 1;
  padding: 30px 17px;
  box-sizing: border-box;
`;

export const LoginInput = styled.input`
  width: 100%;
  background: rgba(217, 217, 217, 0.24);
  border: 1px solid #230085;
  border-radius: 15px;
  color: #230085;
  box-sizing: border-box;
  margin-bottom: 7px;
  padding: 6px 9px;
  font-size: 20px;
  line-height: 20px;
  font-family: 'Comfortaa';
  outline-color: #230085;

  ::placeholder {
    color: rgba(87, 74, 178, 0.54);  
  }
`;

export const LoginText = styled.div`
  color: #FF6D3C;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  margin: 14px auto 0;
  cursor: pointer;
`;

