import {cancelRequests, del, get, patch, post, put, routes} from '@api';
import {
  IAddAttribute,
  IAddCategory,
  IAddUnit,
  IDeleteAttribute,
  IDeleteCategory,
  IDeleteSubCategory,
  IEditSubCategory,
  IGetAllProducts,
  IGetAttribute,
  IGetCategoy,
  IGetSubCategory,
  IGetUnit,
  ISubCategory,
} from '@common';
import {getFormData} from '@globals';

export function addAttribute(args: IAddAttribute) {
  const {token, callback, ...params} = args;
  const headers = {Authorization: `Bearer ${token}`};

  cancelRequests('addAttribute');

  return post({
    url: routes.addAttribute,
    cancelKey: 'addAttribute',
    headers,
    params,
  }).then(res => {
    const {status, data} = res;

    if (status) {
      callback?.();
      return data;
    }

    throw new Error(data?.message || 'Somthing went wrong!');
  });
}

export function getAttributes(args: IGetAttribute) {
  const {token, title, callback} = args;
  const headers = {Authorization: `Bearer ${token}`};

  cancelRequests(`getAttributes-${title}`);

  return get({
    url: routes.getAttributes + title,
    cancelKey: `getAttributes-${title}`,
    headers,
  }).then(res => {
    const {status, data} = res;

    if (status) {
      callback?.();
      return data;
    }
  });
}

export function addUnit(args: IAddUnit) {
  const {token, callback, ...params} = args;
  const headers = {Authorization: `Bearer ${token}`};

  cancelRequests('addUnit');

  return post({
    url: routes.unit,
    cancelKey: 'addUnit',
    headers,
    params,
  }).then(res => {
    const {status, data} = res;

    if (status) {
      callback?.();
      return data;
    }
  });
}

export function getUnit(args: IGetUnit) {
  const {token, callback} = args;
  const headers = {Authorization: `Bearer ${token}`};

  cancelRequests('getUnit');

  return get({
    url: routes.unit,
    cancelKey: 'getUnit',
    headers,
  }).then(res => {
    const {status, data} = res;

    if (status) {
      callback?.();
      return data;
    }
  });
}

export function addCategory(args: IAddCategory) {
  const {token, callback, ...params} = args;
  const headers = {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}`};

  cancelRequests('addCategory');

  const body = getFormData(params);

  return post({
    url: routes.addCategory,
    cancelKey: 'addCategory',
    headers,
    params: body,
  }).then(res => {
    const {status, data} = res;

    if (status) {
      callback?.();
      return data;
    }
  });
}

export function getAllCategory(args: IGetCategoy) {
  const {token} = args;
  const headers = {Authorization: `Bearer ${token}`};

  cancelRequests('getAllCategory');

  return get({
    url: routes.getAllCategory,
    cancelKey: 'getAllCategory',
    headers,
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
}

export function getAllSubCategory(args: IGetSubCategory) {
  const {token, category_id} = args;
  const headers = {Authorization: `Bearer ${token}`};

  cancelRequests('editSubCategory');

  return get({
    url: `${routes.getAllSubCategory}${category_id}/subcategory`,
    cancelKey: 'editSubCategory',
    headers,
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
}

export function getAllSubCategoryList(args: IGetCategoy) {
  const {token} = args;
  const headers = {Authorization: `Bearer ${token}`};

  cancelRequests('getAllSubCategoryList');

  return get({
    url: routes.getAllSubCategoryList,
    cancelKey: 'getAllSubCategoryList',
    headers,
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
}

export function deleteAttribute(args: IDeleteAttribute) {
  const {token, ...params} = args;
  const headers = {Authorization: `Bearer ${token}`};

  cancelRequests('deleteAttributes');

  return del({
    url: routes.deleteAttributes,
    cancelKey: 'deleteAttributes',
    headers,
    data: params,
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
}

export function deleteCategory(args: IDeleteCategory) {
  const {token, ...params} = args;
  const headers = {Authorization: `Bearer ${token}`};

  cancelRequests('deleteCategory');

  return del({
    url: routes.deleteCategory + params.id,
    cancelKey: 'deleteCategory',
    headers,
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
}

export function updateAttribute(args: any) {
  const {token, callback, title, value, oldVlaue} = args;
  const headers = {Authorization: `Bearer ${token}`};

  cancelRequests('updateAttribute');

  return patch({
    url: `${routes.addAttribute}${title}`,
    cancelKey: 'updateAttribute',
    headers,
    params: {
      value: {
        old: oldVlaue,
        new: value,
      },
    },
  }).then(res => {
    const {status, data} = res;

    if (status) {
      callback?.();
      return data;
    }

    throw new Error(data?.message || 'Somthing went wrong!');
  });
}

export function getAllAttributes(args: any) {
  const {token} = args;
  const headers = {Authorization: `Bearer ${token}`};

  cancelRequests('getAllAttributes');

  return get({
    url: routes.getAllAttributes,
    cancelKey: 'getAllAttributes',
    headers,
  }).then(res => {
    console.log(JSON.stringify(res, null, 2));
    const {status, data} = res;

    if (status) {
      return data;
    }
    throw new Error(data || 'Somthing went wrong!');
  });
}

export function updateCategory(args: any) {
  const {token, callback, category_id, name, photo} = args;
  const headers = {Authorization: `Bearer ${token}`};

  const body = getFormData({
    name,
    photo,
  });

  cancelRequests('updateCategory');

  return patch({
    url: `${routes.editCategory}${category_id}`,
    cancelKey: 'updateCategory',
    headers,
    params: body,
  }).then(res => {
    const {status, data} = res;

    if (status) {
      callback?.();
      return data;
    }

    throw new Error(data?.message || 'Somthing went wrong!');
  });
}
