import { FETCH_USER_REJECTED } from '../actions/user_actions';
import { FETCH_USER_FULLFILLED } from '../actions/user_actions';
import { FETCH_USER_PENDING } from '../actions/user_actions';


const INITIAL_STATE = { 
	fetching: false,
	fetched: false,
 };

export default function(state = INITIAL_STATE, action) {
   switch(action.type) {
		case FETCH_USER_PENDING:{
			console.log('promise pending', action)
			return {...state, fetching: true, fetched: false}
			break;
		}
		case FETCH_USER_REJECTED:{
			console.log('you got the 401 and promise rejected')
			return {...state, fetching: false, err: action.payload }
			break;
		}
		case FETCH_USER_FULLFILLED:{
			console.log('promise fullfilled', action)
			return {...state, fetching: false, fetched: true, data: action.payload.data }
			break;
		}
		
	}
	return state;
}