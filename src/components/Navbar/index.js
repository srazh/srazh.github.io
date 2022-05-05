import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/' activeStyle>
			Home
		</NavLink>
		<NavLink to='/Interests' activeStyle>
			Interests
		</NavLink>
		<NavLink to='/Play' activeStyle>
			Play
		</NavLink>
		<NavLink to='/Work' activeStyle>
			Work
		</NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
