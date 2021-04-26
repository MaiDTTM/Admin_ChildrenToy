import {ADMIN} from './actionTypes';
import createActionNoAppID from 'src/base/createActionNoAppID';


export const getListAdmin = (payload) => createActionNoAppID(ADMIN.GET_LIST, payload);
export const callDeleteAdminAction = (payload) => createActionNoAppID(ADMIN.CALL_DELETE, payload);
export const callPostAdminAction = (payload) => createActionNoAppID(ADMIN.CALL_POST_ADMIN, payload);
export const callPutAdminAction = (payload) => createActionNoAppID(ADMIN.CALL_PUT, payload);
export const deleteAdminAction = (payload) => createActionNoAppID(ADMIN.DELETE, payload);
export const loginAdminAction = (payload) => createActionNoAppID(ADMIN.LOGIN, payload);
export const getAdminIdAction = (payload) => createActionNoAppID(ADMIN.GET_ADMIN, payload);
