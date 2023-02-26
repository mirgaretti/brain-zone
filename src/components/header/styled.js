import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: white;
  box-shadow: 0px 5px 10px #FFA000;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  width: 114px;
  height: 90px;
`;

export const UserIcon = styled.img`
  width: 68px;
  height: 68px;
`;

export const NavBar = styled.div``;

export const TopContainer = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;

export const SearchInputContainer = styled.div`
  box-sizing: border-box;
  width: 264px;
  height: 42px;
  background: rgba(87, 74, 178, 0.16);
  border: 2px solid #574AB2;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 4px;
`;

export const SearchButton = styled.img`
  cursor: pointer;
  width: 31px;
  height: 31px;
  :hover {
    opacity: 0.8;
  }

  :active {
    opacity: 1;
  }
`;

export const NavIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const StagesContainer = styled.div`
  display: flex;
`;

export const Stage = styled.div`
  width: 150px;
  height: 40px;
  background-image: url('${(props) => props.background}');
  background-size: contain;
  background-repeat: no-repeat;
`;
