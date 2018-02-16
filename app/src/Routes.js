'use strict'

//libs
import React                     							from 'react'
import { Router, Route, Switch} 							from 'react-router-dom'
import { createBrowserHistory } 							from 'history'

//Entry Point / App Container
import App                         							from './App'

//pages
import NotFoundPage											from './pages/notFoundPage/NotFoundPage'
import HomePage                    							from './pages/homePage/HomePage'

//example pages
/*import AnimationPage                    					from './examplePages/animationPage/AnimationPage'
import CanvasPage                    						from './examplePages/canvasPage/CanvasPage'
import FlexboxPage                    						from './examplePages/flexboxPage/FlexboxPage'*/

export const history = createBrowserHistory({
	/* pass a configuration object here if needed */
})

export default (
	<Router history={history}>
		<App>
			<Switch>
				{/*<Route exact path="/" component={HomePage} />*/}
				<Route exact path="/" component={HomePage} />
				<Route exact path="/education" component={HomePage} />
				<Route exact path="/news" component={HomePage} />
				<Route exact path="/about-us" component={HomePage} />
				<Route exact path="/faq" component={HomePage} />
				<Route exact path="/contact-us" component={HomePage} />
				{/*<Route exact path="/animations" component={AnimationPage} />
				<Route exact path="/canvas" component={CanvasPage} />
				<Route exact path="/flexbox" component={FlexboxPage} />	*/}				
				<Route path="*" component={NotFoundPage} />
			</Switch>
		</App>
	</Router>
)