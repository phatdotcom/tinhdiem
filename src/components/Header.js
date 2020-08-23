import React from 'react';
import { HeartFilled } from '@ant-design/icons';
import New from '../images/new.svg';

function Header () {
	return (
		<div className="I-PcQ">
		    <span className="rT7_x hEvdQ Pp8Je"><HeartFilled spin style={{ color: '#fd3176' }}/>&nbsp;Phatdotcom</span>
		    <div className="duN1d">
		       <div className="oG__D nY_qE" style={{ backgroundImage: 'url(' + New + ')' }}></div>
		       <div className="at4-p">#LearnMERNStackJSFree</div>
		    </div>
		</div> 
	)
}
export default Header;