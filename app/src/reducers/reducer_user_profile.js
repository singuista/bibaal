import { FETCH_USER_PROFILE_REJECTED, FETCH_USER_PROFILE_FULLFILLED, FETCH_USER_PROFILE_PENDING } from '../actions/user_actions';
import _ 								from 'lodash';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
   switch(action.type) {
		case FETCH_USER_PROFILE_PENDING:{
			console.log('promise pending', action)
			return {...state}
			break;
		}
		case FETCH_USER_PROFILE_REJECTED:{
			console.log('you got the 401 and promise rejected')
			return {...state, [_.camelCase(action.category)]: {fetching: false, err: action.payload }}
			break;
		}
		case FETCH_USER_PROFILE_FULLFILLED:{
			console.log('promise fullfilled', action)
			if(!_.isNull(action.subCategory)){
				return {...state, [_.camelCase(action.category)]: {
					[_.camelCase(action.subCategory)]: {fetching: false, fetched: true, data: action.payload.data }
				}}
			}
			return {...state, [_.camelCase(action.category)]: {fetching: false, fetched: true, data: action.payload.data }}
			break;
		}
		
	}
	return state;
}