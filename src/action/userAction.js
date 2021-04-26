import {USER} from './actionTypes';
import createActionNoAppID from 'src/base/createActionNoAppID';

export const getListAdmin = (payload) => createActionNoAppID(USER.GET_LIST, payload);
export const callDeleteAdminAction = (payload) => createActionNoAppID(USER.CALL_DELETE, payload);
export const callPostAdminAction = (payload) => createActionNoAppID(USER.CALL_POST_ADMIN, payload);
export const callPutAdminAction = (payload) => createActionNoAppID(USER.CALL_PUT, payload);
export const deleteAdminAction = (payload) => createActionNoAppID(USER.DELETE, payload);
export const loginAdminAction = (payload) => createActionNoAppID(USER.LOGIN, payload);
export const getAdminIdAction = (payload) => createActionNoAppID(USER.GET_ADMIN, payload);
