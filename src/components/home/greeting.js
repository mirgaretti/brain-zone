import React from 'react';
import { ContentContainer, GreetingImage, GreetingInfo, GreetingText, GreetingTitle } from './styled';

const Greeting = () => {
  return (
    <ContentContainer>
      <GreetingTitle>
        Приветствуем!
      </GreetingTitle>
      <GreetingInfo>
        <GreetingText size="20px" height="22px">
          Здравствуй! Мы рады приветствовать тебя в Brain Zone, передовом образовательном портале, который станет тебе верным другом в преодолении пути к знаниям. Математика это не только формулы, сложные фигуры, квадратные уравнения и таблица умножения. Математика - это наука, которая даёт возможность думать, искать решения казалось бы нерешаемых задач, это полёт мыслей. Если ты заинтересован в таком захватывающем предмете, мы с радостью предоставим тебе возможность решать задания разного уровня сложности, проверить себя и посоревноваться с другими ребятами!
        </GreetingText>
        <GreetingImage src="/media/greating.png" />
      </GreetingInfo>      
    </ContentContainer>
  );
};

export default Greeting;
