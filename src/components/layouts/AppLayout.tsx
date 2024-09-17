import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import SignUp from '../auth/SignUp';

export function Applayout() {
	return (
		<>
			<Header />
			<div className='flex-grow flex flex-col'>
				<div className='container px-4 md:px-8 flex-grow flex flex-col'>
					<SignUp />
				</div>
			</div>
			<div className='container px-4 md:px-8'>
				<Footer />
			</div>
		</>
	);
}
