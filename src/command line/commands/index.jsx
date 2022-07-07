import React, { useState } from 'react';
import { Theme } from './themes';

export const Commands = () => {
	const [second, setSecond] = useState(false);

	return <Theme second={second} setSecond={setSecond} />;
};
