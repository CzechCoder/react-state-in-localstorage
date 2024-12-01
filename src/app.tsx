import { type FC } from 'react';
import { createRoot } from 'react-dom/client';

import { usePeristedState } from './hooks/usePersistedState';
import { removeItem } from './utils/localStorage';
import './global.css';

const App: FC = () => <MainPage />;

const MainPage = () => {
	const [count, setCount] = usePeristedState('count', 0);

	return (
		<div className='flex flex-col gap-2 max-w-screen-sm mx-auto'>
			<h1 className='text-2xl font-semibold'>{count}</h1>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setCount(0)}>Reset</button>
			<button onClick={() => removeItem('count')}>Remove persistence</button>
		</div>
	);
};

createRoot(document.getElementById('root')!).render(<App />);
