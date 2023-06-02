import React from 'react';
import AnimateOnScreen from '../../AnimateOnScreen';
import { ContentSection, TextWrapper, Text } from './styles';

const Content = () => {
  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <Text>
          Motorcycle accidents are a leading cause of death and injury in the United States. In 2020, there were over 5,000 motorcycle fatalities in the U.S., and over 80,000 motorcycle injuries.
            <br />
            There are a number of factors that contribute to motorcycle accidents, including driver error, road hazards, and weather conditions.
             However, one of the most common factors is alcohol.
             Alcohol is a major factor in over 30% of motorcycle accidents.
          </Text>
        </TextWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default Content;
