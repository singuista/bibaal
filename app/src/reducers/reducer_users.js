import { FETCH_USERS_REJECTED } 					from '../actions/user_actions';
import { FETCH_USERS_FULLFILLED } 					from '../actions/user_actions';
import { FETCH_USERS_PENDING } 						from '../actions/user_actions';
import ApiUtils										from '../utils/APIUtils'

/*import { FETCH_USER_REJECTED } 					from '../actions/index';
import { FETCH_USER_FULLFILLED } 					from '../actions/index';
import { FETCH_USER_PENDING } 						from '../actions/index';*/


const INITIAL_STATE = { 
	items: [],
	fetching: false,
	fetched: false,
	id: '',
	user: null
 };

export default function(state = INITIAL_STATE, action) {
   switch(action.type) {
		case FETCH_USERS_PENDING:
			//console.log('promise pending', action)
			return {...state, fetching: true, fetched: false}//, items: action.payload.data
			break;
		
		case FETCH_USERS_REJECTED:
			//console.log('you got the 401 and promise rejected')

			ApiUtils.checkUserSession('401 Unauthorized');

			return {...state, fetching: false, err: action.payload }
			break;
		
		case FETCH_USERS_FULLFILLED:
			//console.log('promise fullfilled', action)
			//console.log(action.payload.data);
			return {
				...state, 
				fetching: false, 
				fetched: true, 
				loading: action.payload.data ? false : true, 
				items: action.payload.data ? action.payload.data : [],
			}
			break;
		
		
	}
	return state;
}
