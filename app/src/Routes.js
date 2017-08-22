'use strict'

//libs
import React                       							from 'react'
import {Router, Route, browserHistory, IndexRoute} 			from 'react-router'

//entry point
import App                         							from './App'

//pages
import HomePage                    							from './pages/homePage/HomePage'
import AnimationPage                    					from './pages/animationPage/AnimationPage'
import DataVisionPage                    					from './pages/dataVision/DataVisionPage'

import FlexboxPage                    						from './pages/flexboxPage/FlexboxPage'
import NotFoundPage											from './pages/NotFoundPage'

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={HomePage} />
			<Route path="/" component={HomePage} />
			<Route path="/animations" component={AnimationPage} />
			<Route path="/data-vision" component={DataVisionPage} />
			<Route path="/flexbox" component={FlexboxPage} />
			
			<Route path="*" component={NotFoundPage} />
		</Route>
	</Router>
)






