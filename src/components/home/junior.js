import React from 'react';
import { BoldText, Text } from '../common/styled';
import { ContentContainer,  JuniorBox,  JuniorContainer,  JuniorImage,  JuniorTitle } from './styled';

const Junior = () => {
  return (
    <ContentContainer>
      <JuniorTitle>
        Учебная программа
      </JuniorTitle>  
      <JuniorContainer>
        <JuniorBox color="rgba(255, 160, 0, 0.08)">
          <JuniorTitle>
            5 класс
          </JuniorTitle>
          <Text>
          Натуральные числа, нуль и действия над ними <br />Числовое выражение и его значение. <br />
          Порядок выполнения арифметических действий.<br /> Уравнения Обыкновенные дроби <br />
          Наглядные представления фигур на плоскости и тел в пространстве
          </Text>
          <JuniorImage src="/media/arrow.svg" />
        </JuniorBox>
        <JuniorBox color="rgba(87, 74, 178, 0.08);">
          <JuniorTitle>
            6 класс
          </JuniorTitle> 
          <Text>
          Десятичные дроби <br />Проценты и пропорции <br />Множество <br />
          Рациональные числа <br />Координатная плоскость <br />Наглядные представления тел в пространстве, примеры разверток
          </Text>
          <JuniorImage src="/media/arrow.svg" />
        </JuniorBox>
        <JuniorBox color="rgba(255, 109, 60, 0.08)">
          <JuniorTitle>
            7 класс
          </JuniorTitle>
          <Text>
          Выражения и их преобразования <br />Линейные уравнения, неравенства и функции <br />
          Линейное уравнение и системы линейных уравнений с двумя переменными<br /> Начальные понятия геометрии <br />
          Признаки равенства треугольников <br />Параллельность прямых на плоскости <br />Сумма углов треугольника, задачи на построение
          </Text>
          <JuniorImage src="/media/arrow.svg" />
        </JuniorBox>
      </JuniorContainer>   
    </ContentContainer>
  );
};

export default Junior;