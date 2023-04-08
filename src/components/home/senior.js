import React from 'react';
import { BoldText, Text, Arrow, OrangeButton } from '../common/styled';
import { ContentContainer, SeniorBox, SeniorContainer, SeniorDirection, SeniorTitle, SeniorTextContainer } from './styled';

const Senior = () => {
  return (    
    <ContentContainer>
      <SeniorTitle>
        10 и 11 класс - ЦТ и ЦЭ
      </SeniorTitle>
      <SeniorContainer>
        <SeniorDirection flex={0.7} >
          <SeniorBox color="rgba(255, 160, 0, 0.29)">
          <Text>
          Уважаемые ученики 10-ых и 11-ых классов! Чтобы продолжить обучение в учреждениях высшего и среднего специального образования, вы будете принимать участие в централизованном тестировании. Оставшееся время вы, несомненно, используете для углубления и расширения своих знаний по предмету, для овладения наиболее эффективными приёмами работы над тестовыми заданиями.
          </Text>
          </SeniorBox>
          <OrangeButton>Перейти</OrangeButton>      
        </SeniorDirection>
        <SeniorDirection>
          <SeniorBox color="rgba(255, 109, 60, 0.19)">
          <Text>
          Важно помнить: основное условие вашего успеха - систематические занятия, детальная проработка материала школьных учебных пособий. Быть уверенным в успехе также поможет наш образовательный портал!
          </Text>
          </SeniorBox> 
          <SeniorBox color="rgba(87, 74, 178, 0.18)">
          <Text>
          Подготовиться к ЦТ в сжатые сроки, освежить в памяти пройденный материал, выявить неусвоенные темы и понятия, увидеть многообразие форм и конструкций тестовых заданий - всё это возможно при кропотливом ежедневном труде над предлагаемыми нами заданиями. В нашем портале вам предоставлены многие задания и разделы, которые отсутствовали  предыдущих годах.
          </Text>
          </SeniorBox>          
        </SeniorDirection>
        <SeniorTextContainer>
          <Text>
            <BoldText>Тематические задания<br /></BoldText> 
            1. Основные вычисления и формулы. Вычисления, преобразования, линейные и приводящиеся к ним уравнения, неравенства.<br />
            2. Квадратные уравнения и неравенства. Квадратный трёхчлен. Квадратичная функция. Функции, графики.<br />
            3. Рациональные уравнения, рациональные неравенства. Системы уравнений. Текстовые задачи. Последовательности, прогрессии.<br />
            4. Уравнения, содержащие переменную под знаком модуля. Неравенства, содержащие переменную под знаком модуля. Иррациональные уравнения. Иррациональные неравенства.<br />
            5. Показательные, логарифмические выражения. Показательные уравнения, неравенства, системы. Логарифмические уравнения, неравенства, системы.<br />
            6. Тригонометрические выражения. Тригонометрические уравнения. Геометрия на плоскости. Геометрия в пространстве.<br />
          </Text>
          <Arrow src="/media/arrow.svg" />
        </SeniorTextContainer>      
      </SeniorContainer>
      <Arrow />
    </ContentContainer>
  );
};

export default Senior;