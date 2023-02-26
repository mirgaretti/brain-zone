import React from 'react';
import { HeaderContainer, Logo, NavBar, NavIcon, SearchButton, SearchInputContainer, Stage, StagesContainer, TopContainer, UserIcon } from './styled';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src="/media/logo.svg" /> 
      <NavBar>
        <TopContainer>
          <div style={{flex:'auto'}}>
            <SearchInputContainer>
              <SearchButton src="/media/search.svg"/>
            </SearchInputContainer>
          </div> 
          <NavIcon src="/media/home.svg" />  
          <NavIcon src="/media/bulb.svg" />  
          <NavIcon src="/media/stats.svg" />  
          <NavIcon src="/media/list.svg" />  
          <NavIcon src="/media/star.svg" />  
          <NavIcon src="/media/users.svg" />         
        </TopContainer>  
        <StagesContainer>
          <Stage background="/media/stage_inactive.svg" />  
          <Stage background="/media/stage_inactive.svg" /> 
          <Stage background="/media/stage_inactive.svg" /> 
          <Stage background="/media/stage_inactive.svg" /> 
          <Stage background="/media/stage_inactive.svg" /> 
          <Stage background="/media/stage_inactive.svg" /> 
        </StagesContainer>  
      </NavBar> 
      <UserIcon src="/media/user.svg" />         
    </HeaderContainer>
  );
};

export default Header;