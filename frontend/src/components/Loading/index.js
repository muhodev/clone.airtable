import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    0% {
		transform: scaleY(1) scaleX(0.5);
	}

	50% {
		transform: scaleY(10) scaleX(1);
	}

	100% {
		transform: scaleY(1) scaleX(0.5);
	}
`

const Overlay = styled.div`
    width: 100vw;
    height: 100vh;
    background: #f3f7f9;
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    display:flex;
    align-items:center;
    justify-content: center;
`

export const Loader = styled.div`
    display: flex;
	flex-direction: row;
	align-items: center;

	.bar {
		width: 10px;
		height: 5px;
		background: #10c15c;
		margin: 2px;
		animation: ${rotate} 1s infinite linear;

		&:nth-child(1) {
			animation-delay: 0s;
		}

		&:nth-child(2) {
			animation-delay: 0.25s;
		}

		&:nth-child(3) {
			animation-delay: 0.5s;
		}
	}
`

function Loading() {
	return (
		<Overlay>
			<Loader>
				<div className="bar"></div>
				<div className="bar"></div>
				<div className="bar"></div>
			</Loader>
		</Overlay>
	)
}

export default Loading