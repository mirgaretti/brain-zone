import React from 'react';
import { BoldText, Text } from '../common/styled';
import { Advantage, AdvantageList, AdvantageListContainer, AdvantageTitle, ContentContainer } from './styled';

const Advantages = () => {
  return (
    <ContentContainer>
      <AdvantageTitle>
        Наши преимущества
      </AdvantageTitle>  
      <AdvantageListContainer>
        <AdvantageList>
          <Advantage>
            <Text size="14px" height="16px" >
            <BoldText>Подсказки. </BoldText>Столкнулся с трудностями и не знаешь как решить задачу? Не беда. Brain Zone спешит на помощь. Тебе предоставлена возможность воспользоваться нашими подсказками и смело идти дальше. Только запомни: количество подсказок ограничено. Чем больше задач ты решил самостоятельно - тем больше у тебя шансов получить подсказку для более трудной задачки.
            </Text>
          </Advantage>
          <Advantage>
            <Text size="14px" height="16px" >
            <BoldText>Соревнования. </BoldText> Почувствуй себя на время храбрым рыцарем. Твоё оружие - твои знания. Сразись с соперником в честном бою! И пусть победит сильнейший!
            </Text>
          </Advantage>
        </AdvantageList>
        <AdvantageList>
          <Advantage>
            <Text size="14px" height="16px" >
            <BoldText>Рейтинговая система. </BoldText> Наша команда всегда следит за твоими успехами, все результаты сохраняются и не уходят бесследно. Тебе будет дана возможность отслеживать свой рейтинг и рейтинги других ребят, сравнить их и всегда стремиться к большему!
            </Text>
          </Advantage>
          <Advantage>
            <Text size="14px" height="16px" >
            <BoldText>Личная статистика. </BoldText> Запомни золотое правило успеха: главное соревнование происходит не с кем-то другим, а с самим собой в прошлом. Будь лучшей версией себя! В этом тебе поможет твоя личная статистика задач. Ты всегда сможешь посмотреть, сколько задач ты уже решил и сколько тебе осталось решить.
            </Text>
          </Advantage>
        </AdvantageList> 
      </AdvantageListContainer> 
    </ContentContainer>
  );
};

export default Advantages;