'use strict';

import React         		from 'react';
import {Link} 				from 'react-router';
import DocumentTitle 		from 'react-document-title';

class NotFoundPage extends React.Component {

	constructor(props) {
		super(props);
	}

	constructAudio() {
		let audioContext = window.AudioContext ? new AudioContext() : null;
			
		if(audioContext) {
			let oscillator = audioContext.createOscillator(),
				request = new XMLHttpRequest();
	 
			request.open('GET', '/images/Adele-Skyfall-cut.mp3', true);
			request.responseType = 'arraybuffer';
			request.onload = function () {
			    let undecodedAudio = request.response;

			    //console.log(request.response);

			    audioContext.decodeAudioData(undecodedAudio, function(buffer) {
			    	//console.log(buffer)
			    	let sourceBuffer = audioContext.createBufferSource();

			    	sourceBuffer.buffer = buffer;
			    	sourceBuffer.connect(audioContext.destination);
			    	sourceBuffer.start(audioContext.currentTime);
			    });
			};
			request.send();

			oscillator.connect(audioContext.destination);

			/*oscillator.start(audioContext.currentTime);
			oscillator.stop(audioContext.currentTime + 1);*/
		}
	}


	componentWillMount() {
		this.constructAudio();
	}

	/**
	 * React Component method gets called before the component is removed from the DOM.
	 * This method can be beneficial when needing to perform clean up operations defined in componentDidMount.
	 * @return {void}
	**/
	componentWillUnmount() {
		//Garbage collection
		//ex: remove timers, clear intervals, remove eventListeners.
		//Anything in memory that should be cleared
	}

	render() {
		return(
			<DocumentTitle title="404: Not Found">
		      	<div className="content-wrapper">
			        <section className="notFound col-md-12 clearfix">
						<div className="notFound__text">
							<h1>Oops!</h1>

							<h3>We can't seem to find the page you are looking for.</h3>

							<h5>
								Error code: 404<br />
								You can either head back to our <Link to="/users">home page</Link>, or use the navigation to the left to visit another page. 
							</h5>
						</div>
						<div className="notFound__img">
							<img src="/images/mail-box.png" />
						</div>
			        </section>
				</div>	
			</DocumentTitle>
		);
	}

}

export default NotFoundPage;