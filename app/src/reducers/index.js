import { combineReducers } 						from 'redux'
import UsersReducer 							from './reducer_users'
import UserReducer 								from './reducer_user'
import userProfileReducer 						from './reducer_user_profile'



const rootReducer = combineReducers({
	users: UsersReducer,
	user: UserReducer,
	userProfile: userProfileReducer
})


export default rootReducer