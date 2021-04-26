// action Type
import {PRODUCT} from './actionTypes';

import createActionNoAppID from 'src/base/createActionNoAppID';

export const getList_IdCatalog = (payload) => createActionNoAppID(PRODUCT.CALL_GET_LIST_ID_CATALOG, payload);
export const getList = (payload) => createActionNoAppID(PRODUCT.CALL_GET_LIST, payload);
export const postProduct = (payload) => createActionNoAppID(PRODUCT.POST, payload);
export const deleteProduct = (payload) => createActionNoAppID(PRODUCT.DELETE, payload);
export const putProduct = (payload) => createActionNoAppID(PRODUCT.PUT, payload);
