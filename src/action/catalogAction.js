import {CATALOG} from './actionTypes';
import createActionNoAppID from 'src/base/createActionNoAppID';

export const getList = (payload) => createActionNoAppID(CATALOG.GET_LIST, payload);
export const deleteCatalog = (payload) => createActionNoAppID(CATALOG.CALL_DELETE, payload);
export const postCatalog = (payload) => createActionNoAppID(CATALOG.CALL_POST, payload);
export const putCatalog = (payload) => createActionNoAppID(CATALOG.CALL_PUT, payload);
