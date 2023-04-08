import React from 'react';
import { BoldText, Text, Arrow } from '../common/styled';
import { ContentContainer,  MiddleBox, MiddleContainer, MiddleImage, MiddleText, MiddleTitle, MiddleTitleContainer  } from './styled';

const Middle = () => {
  return (    
    <ContentContainer pad="0px">
      <MiddleTitleContainer>
        <MiddleTitle>
          Учебная программа
        </MiddleTitle>
      </MiddleTitleContainer> 
      <MiddleContainer>
      <MiddleBox width="37%" >
        <MiddleText>
          8 класс  
        </MiddleText> 
        <Text>
          В 8 классе вы начнёте изучение таких тем, как:<br />
          Квадратные корни и их свойства. <br />
          Действительные числа <br />
          Квадратные уравнения.<br /> Квадратичная функция и ее свойства. <br /> Также вы познакомитесь с функциями и их свойствами.<br />
          Геометрия на данной стадии обучения включает в себя:<br />
          Четырехугольники<br />
          Площади многоугольников<br />
          Подобие треугольников<br />
          Окружность<br />
        </Text>
        <Arrow src="/media/arrow.svg" />
      </MiddleBox> 
      <MiddleBox width="15%" >
        <MiddleImage src="/media/middle_img.png" />
      </MiddleBox> 
      <MiddleBox width="40%" >
        <MiddleText>
          9 класс  
        </MiddleText> 
        <Text>
          Поздравляем! Вы уже старшеклассники! А значит и уровень задач повысился. <br />Вам придётся познакомиться с такими темами как:<br />
          Рациональные выражения, Функции<br />
          Дробно-рациональные уравнения и неравенства<br />
          Прогрессии. Геометрия в 9 классе откроет вам такие темы как:<br />
          Соотношения в прямоугольном треугольнике<br />
          Вписанные и описанные окружности<br />
          Теорема синусов. Теорема косинусов<br />
          Правильные многоугольники<br />
        </Text>
        <Arrow src="/media/arrow.svg" />
      </MiddleBox> 
      </MiddleContainer>
    </ContentContainer>
  );
};

export default Middle;