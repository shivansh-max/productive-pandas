import React from 'react'
import {CMDForm, CMDInput, CMDSearch} from './styles'
import { VscSearch } from 'react-icons/vsc';


export const SearchBar = () => {
  return (
		<CMDForm>
			<CMDSearch>
				<VscSearch />
			</CMDSearch>
			<CMDInput placeholder='Search Command'/>
		</CMDForm>
  );
}
