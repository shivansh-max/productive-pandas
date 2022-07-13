import { FC } from 'react';
import { CMDForm, CMDInput, CMDSearch } from '../styles/cmd.styles';
import {VscSearch} from 'react-icons/vsc'

interface searchBar {}

export const SearchBar: FC<searchBar> = () => {
	return <CMDForm>
        <CMDSearch>
            <VscSearch />
        </CMDSearch>
        <CMDInput placeholder='Search Command ' />
    </CMDForm>;
};
