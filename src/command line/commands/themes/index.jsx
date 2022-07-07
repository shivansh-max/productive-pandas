import React from 'react';
import { CommandContainer, CommandIcon, CommandText } from '../../styles';
import { List } from './list';
import { BsPaletteFill } from 'react-icons/bs';

export const Theme = ({second, setSecond}) => {
	return (
		second ? <List /> : <CommandContainer onClick={() => setSecond(true)}>
      <CommandIcon>
        <BsPaletteFill />
      </CommandIcon>
      <CommandText>
        themes
      </CommandText>
    </CommandContainer>
	);
};
