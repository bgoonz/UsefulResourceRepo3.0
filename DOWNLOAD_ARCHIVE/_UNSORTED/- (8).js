import React, { Component } from 'react';
import './ProfilePic.css';
import './possum_img.png';

export default class ProfilePic extends Component {
	render() {
		return (
			<div>
				<img className='myProfilePic' src='./possum_img.png' alt='A transparent image of a Virginia Opossum' />
			</div>
		);
	}
}