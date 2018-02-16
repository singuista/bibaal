import Store 					from '../Store'
import APIUtils 				from '../utils/APIUtils';
// import apiHelpers				from '../utils/Helpers';
import async 					from 'async';
//import promise from 'redux-promise'
import _ 						from 'lodash';

//Fetch Users Action
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING'
export const FETCH_USERS_REJECTED = 'FETCH_USERS_REJECTED'
export const FETCH_USERS_FULLFILLED = 'FETCH_USERS_FULLFILLED'

//Fetch Single User Action 
export const FETCH_USER_PENDING = 'FETCH_USER_PENDING'
export const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED'
export const FETCH_USER_FULLFILLED = 'FETCH_USER_FULLFILLED'

// Fetch Searched Users Action
export const FETCH_SEARCHED_USERS_PENDING = 'FETCH_SEARCHED_USERS_PENDING'
export const FETCH_SEARCHED_USERS_REJECTED = 'FETCH_SEARCHED_USERS_REJECTED'
export const FETCH_SEARCHED_USERS_FULLFILLED = 'FETCH_SEARCHED_USERS_FULLFILLED'

// Fetch User Profile Action
export const FETCH_USER_PROFILE_PENDING = 'FETCH_USER_PROFILE_PENDING';
export const FETCH_USER_PROFILE_REJECTED = 'FETCH_USER_PROFILE_REJECTED';
export const FETCH_USER_PROFILE_FULLFILLED = 'FETCH_USER_PROFILE_FULLFILLED';

export function fetchUsers(param) {
	let urlParams = param ? param : '',
		endpoint = '/users' + urlParams;

	const request = APIUtils.reduxGet(endpoint, 
		function(response) {return Store.dispatch({type: 'FETCH_USERS_FULLFILLED', payload: response})}, 
		function(error) { return Store.dispatch({type: 'FETCH_USERS_REJECTED', payload: error})});

	return {
		type: 'FETCH_USERS_PENDING',
		payload: request
	};
}

export function fetchUser(id) {
	let urlParams = id;
	const request = APIUtils.reduxGet(urlParams, 
		function(response) {return Store.dispatch({type: 'FETCH_USER_FULLFILLED', payload: response})}, 
		function(error) { return Store.dispatch({type: 'FETCH_USER_REJECTED', payload: error})});
	return {
		type: 'FETCH_USER_PENDING',
		payload: request
	};
}

export function fetchUserProfile(id, category, params, subCategory=null, attributes=null ) {
	
	let urlParams = id + '/' + category + (params ? params : '');
	const request = APIUtils.reduxGet(urlParams, 
		function(response) {
			if (attributes) {
				let items = response.data.items;
				async.map(items, function(item, done){
					async.map(attributes, function(attribute, done){
						if(_.get(item, attribute)){
							APIUtils.reduxGet(_.get(item, attribute),
								(res) => {
									item = _.set(item, attribute, res.data);
									done();
								} ,
								(error) => {
									console.error(error);
									done();
								});
						}else{
							item = _.set(item, attribute, 'N/A');
							done();
						}	
												
					}, (/*err, results*/)=>{
						done();
					})
				}, 
				(err)=>{
					if(err){
						return Store.dispatch({type: 'FETCH_USER_PROFILE_REJECTED', payload: error })
					}
					return Store.dispatch({type: 'FETCH_USER_PROFILE_FULLFILLED', payload: response, category: category, subCategory: subCategory });
				})
			}else{
				console.log(response, category, subCategory);
				return Store.dispatch({type: 'FETCH_USER_PROFILE_FULLFILLED', payload: response, category: category, subCategory: subCategory });
			}
		},
		function(error) {
			return Store.dispatch({type: 'FETCH_USER_PROFILE_REJECTED', payload: error })
		});

	return {
		type: 'FETCH_USER_PROFILE_PENDING',
		payload: request
	};
}

export function fetchSearchedUsers(term, params) {
	let endpoint = '/users?q=' + term + params

	const request = APIUtils.reduxGet(endpoint, 
		function(response) {return Store.dispatch({type: 'FETCH_SEARCHED_USERS_FULLFILLED', payload: response})}, 
		function(error) { return Store.dispatch({type: 'FETCH_SEARCHED_USERS_REJECTED', payload: error})});

	return {
		type: FETCH_SEARCHED_USERS_PENDING,
		payload: request
	}

}