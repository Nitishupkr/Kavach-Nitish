import React from 'react';
import items from '../../../utils/constants/services-items';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import {
  ContentSection,
  TextWrapper,
  ServicesWrapper,
  AccordionToggle,
  AccordionContent,
} from './styles';

const About = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const handleMouseEnter = React.useCallback(
    curr => {
      if (curr === selectedItem) return;

      addCursorBorder();
    },
    [selectedItem, addCursorBorder],
  );

  const handleMouseLeave = React.useCallback(
    curr => {
      if (curr === selectedItem) return;

      removeCursorBorder();
    },
    [selectedItem, removeCursorBorder],
  );

  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <h2>
          A smart helmet is a type of protective headgear that uses sensors and other technologies to improve the safety of motorcyclists.
           Smart helmets can detect a variety of hazards, including falls, collisions, and drunk driving. 

          </h2>
          <p>
          One of the most important features of a smart helmet is its ability to detect alcohol.
           Alcohol is a major factor in motorcycle accidents, and smart helmets can help to prevent these accidents by preventing drunk drivers from operating their motorcycles. 
           Smart helmets typically use sensors to detect alcohol in the rider's breath.
           If the sensor detects alcohol, the helmet will prevent the motorcycle from starting.
Smart helmets can also detect wearables, such as smartwatches and fitness trackers.
 This information can be used to provide riders with personalized safety advice. For example, if a rider's smartwatch detects that they are about to fall asleep, the helmet can alert the rider to take a break.


          </p>
        </TextWrapper>
        <ServicesWrapper>
          <h3>Features</h3>
          {items.map(([item, services], itemIndex) => (
            <React.Fragment key={item}>
              <AccordionToggle
                aria-expanded={itemIndex === selectedItem}
                onClick={() => setSelectedItem(itemIndex)}
                onMouseEnter={() => handleMouseEnter(itemIndex)}
                onMouseLeave={() => handleMouseLeave(itemIndex)}
              >
                {item}
              </AccordionToggle>
              <AccordionContent
                animate={{ height: itemIndex === selectedItem ? '100%' : '0' }}
                transition={{ duration: 0.7, ease: [0, 0.7, 0.29, 0.97] }}
              >
                {services.map((service, serviceIndex) => (
                  <p key={`${itemIndex}_${serviceIndex}`}>{service}</p>
                ))}
              </AccordionContent>
            </React.Fragment>
          ))}
        </ServicesWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default React.memo(About);
