import {cancelRequests, del, get, patch, post, routes} from '@api';
import {getFormData} from '@globals';

export const getAllSize = args => {
  const {id, token} = args;
  cancelRequests('getAllSize');
  return get({
    url: `${routes.getAllSize}${id}`,
    cancelKey: 'getAllSize',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
};

export function updateSize(args) {
  const {callback, id, value, token} = args;
  cancelRequests('updateSize');
  return patch({
    url: `${routes.updateSize}${id}`,
    cancelKey: 'updateSize',
    params: {
      value,
    },
    headers: {
      Authorization: `Bearer ${token}`,
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

export function deleteSize(args) {
  const {id, value, token} = args;

  cancelRequests('deleteSize');

  return del({
    url: `${routes.deleteSize}${id}`,
    cancelKey: 'deleteSize',
    data: {
      value,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
}

export function addSize(args) {
  const {callback, token, ...params} = args;
  cancelRequests('addSize');
  return post({
    url: routes.addSize,
    cancelKey: 'addSize',
    params,
    headers: {
      Authorization: `Bearer ${token}`,
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

// Platting
export const getAllColor = args => {
  const {id, token} = args;
  console.log('===============================');
  console.log('id', id);
  console.log('===============================');
  cancelRequests('getAllColor');
  return get({
    url: `${routes.getAllColor}${id}`,
    cancelKey: 'getAllPlatting',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
};

export function updateColor(args) {
  const {callback, id, value, token} = args;
  cancelRequests('updateColor');
  return patch({
    url: `${routes.updateColor}${id}`,
    cancelKey: 'updateColor',
    params: {
      value,
    },
    headers: {
      Authorization: `Bearer ${token}`,
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

export function deleteColor(args) {
  const {id, value, token} = args;
  cancelRequests('deleteColor');
  return del({
    url: `${routes.deleteColor}${id}`,
    cancelKey: 'deleteColor',
    data: {
      value,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
}

export function addColor(args) {
  const {callback, token, ...params} = args;
  cancelRequests('addColor');
  return post({
    url: routes.addColor,
    cancelKey: 'addColor',
    params,
    headers: {
      Authorization: `Bearer ${token}`,
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

// Stone
export const getAllStone = args => {
  const {id, token} = args;
  cancelRequests('getAllStone');
  return get({
    url: `${routes.getAllStone}${id}`,
    cancelKey: 'getAllStone',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
};

export function updateStone(args) {
  const {callback, id, value, token} = args;
  cancelRequests('updateStone');
  return patch({
    url: `${routes.updateStone}${id}`,
    cancelKey: 'updateStone',
    params: {
      value,
    },
    headers: {
      Authorization: `Bearer ${token}`,
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

export function deleteStone(args) {
  const {id, value, token} = args;
  cancelRequests('deleteStone');
  return del({
    url: `${routes.deleteStone}${id}`,
    cancelKey: 'deleteStone',
    data: {
      value,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
}

export function addStone(args) {
  const {callback, token, ...params} = args;
  cancelRequests('addStone');
  return post({
    url: routes.addStone,
    cancelKey: 'addStone',
    params,
    headers: {
      Authorization: `Bearer ${token}`,
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

// Units
export const getAllUnit = token => {
  cancelRequests('getAllUnit');
  return get({
    url: routes.getAllUnit,
    cancelKey: 'getAllUnit',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
};

export function addUnit(args) {
  const {callback, token, ...params} = args;
  cancelRequests('addUnit');
  return post({
    url: routes.addUnit,
    cancelKey: 'addUnit',
    params,
    headers: {
      Authorization: `Bearer ${token}`,
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

export function deleteUnit(args) {
  const {id, token} = args;
  cancelRequests('deleteUnit');
  return del({
    url: `${routes.deleteUnit}${id}`,
    cancelKey: 'deleteUnit',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
}

export function updateUnit(args) {
  const {callback, id, title, baseQty, token} = args;
  cancelRequests('updateUnit');
  return patch({
    url: `${routes.updateUnit}${id}`,
    cancelKey: 'updateUnit',
    params: {
      title,
      baseQty,
    },
    headers: {
      Authorization: `Bearer ${token}`,
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

// Category
export const getAllCategory = token => {
  cancelRequests('getAllCategory');
  return get({
    url: routes.getAllCategory,
    cancelKey: 'getAllCategory',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
};

export function addCategory(args) {
  const {callback, name, image, token} = args;
  cancelRequests('addCategory');
  const body = getFormData({
    name,
  });
  if (image) {
    body.append('image', image, image.name);
  }
  return post({
    url: routes.addCategory,
    cancelKey: 'addCategory',
    params: body,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    console.log(res);
    const {status, data} = res;
    if (status) {
      callback?.();
      return data;
    }
    throw new Error(data?.message || 'Somthing went wrong!');
  });
}

export function deleteCategory(args) {
  const {id, token} = args;
  cancelRequests('deleteCategory');
  return del({
    url: `${routes.deleteCategory}${id}`,
    cancelKey: 'deleteCategory',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
}

export function updateCategory(args) {
  const {callback, id, name, image, token} = args;
  cancelRequests('updateCategory');
  const body = getFormData({
    name,
  });
  if (image) {
    body.append('image', image, image.name);
  }
  return patch({
    url: `${routes.updateCategory}${id}`,
    cancelKey: 'updateCategory',
    params: body,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
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

export const getAllSubCategory = args => {
  const {category_id, token} = args;
  cancelRequests('getALlSubCategory');
  return get({
    url: `${routes.getALlSubCategory}${category_id}`,
    cancelKey: 'getALlSubCategory',
    headers: {Authorization: `Bearer ${token}`},
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data?.sub_category ?? [];
    }
  });
};

export function addSubCategory(args) {
  const {callback, name, category, token} = args;
  const headers = {
    'Content-Type': 'multipart/form-data',
    Authorization: `Bearer ${token}`,
  };

  cancelRequests('addSubCategory');

  const body = getFormData({name, category});

  return post({
    url: routes.addSubCategory,
    cancelKey: 'addSubCategory',
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

export function editSubCategory(args) {
  const {id, name, callback, token} = args;

  cancelRequests('editSubCategory');

  return patch({
    url: `${routes.editSubCategory}${id}`,
    cancelKey: 'editSubCategory',
    params: {name},
    headers: {Authorization: `Bearer ${token}`},
  }).then(res => {
    console.log('Edit Cate', JSON.stringify(res, null, 2));
    const {status, data} = res;
    if (status) {
      callback?.();
      return data;
    }
  });
}

export function deleteSubCategory(args) {
  const {id, token} = args;

  cancelRequests('deleteSubCategory');

  return del({
    url: `${routes.deleteSubCategory}${id}`,
    cancelKey: 'deleteSubCategory',
    headers: {Authorization: `Bearer ${token}`},
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
}

export const addProduct = args => {
  const {callback, images, token, ...params} = args;

  cancelRequests('addProduct');

  const body = getFormData(params);

  if (images && images.length > 0) {
    images.forEach(image => {
      body.append('images', image, image.name);
    });
  }

  return post({
    url: routes.addProduct,
    cancelKey: 'addProduct',
    params: body,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      callback?.(data.id);
      return data;
    }
  });
};

export function updateProduct(args) {
  const {callback, id, images, token, ...params} = args;
  const body = getFormData(params);

  cancelRequests('updateProduct');

  if (images && images.length > 0) {
    images.forEach(image => {
      if (image.name !== null) body.append('images', image, image.name);
    });
  }

  return patch({
    url: `${routes.updateProduct}${id}`,
    cancelKey: 'updateProduct',
    params: body,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
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

export function assignLabourToProduct(args) {
  const {callback, token, ...params} = args;

  cancelRequests('labours-add-to-product');

  return post({
    url: `${routes.assignLabourToProduct}`,
    cancelKey: 'labours-add-to-product',
    params: params,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
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

export function getAllProducts({pageParam = 1, token}) {
  cancelRequests('getAllProducts');

  return get({
    url: `${routes.getAllProducts}?page=${pageParam}`,
    cancelKey: 'getAllProducts',
    headers: {Authorization: `Bearer ${token}`},
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
}

export const deleteProduct = args => {
  const {id, token} = args;
  cancelRequests('deleteProduct');
  return del({
    url: `${routes.deleteProduct}${id}`,
    cancelKey: 'deleteProduct',
    headers: {Authorization: `Bearer ${token}`},
  }).then(res => {
    console.log('Delete Product', JSON.stringify(res, null, 2));
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
};

export function getAllProductAttributes(token) {
  cancelRequests('getAllProductAttributes');

  return get({
    url: routes.getAllProductAttribute,
    cancelKey: 'getAllProductAttributes',
    headers: {Authorization: `Bearer ${token}`},
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
}

// Staff
export const addStaff = args => {
  const {callback, photo, token, ...params} = args;

  cancelRequests('addStaff');

  const body = getFormData(params);

  if (photo) body.append('photo', photo, photo.name);

  return post({
    url: routes.addStaff,
    cancelKey: 'addStaff',
    params: body,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      callback?.();
      return data;
    }
  });
};

export const getStaff = token => {
  cancelRequests('getStaff');
  return get({
    url: routes.getStaff,
    cancelKey: 'getStaff',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
};

export function updateStaff(args) {
  const {callback, id, photo, token, ...params} = args;

  cancelRequests('updateStaff');

  const body = getFormData(params);

  if (photo) body.append('photo', photo, photo.name);

  return patch({
    url: `${routes.account}${id}`,
    cancelKey: 'updateStaff',
    params: body,
    headers: {
      Authorization: `Bearer ${token}`,
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

export const deleteStaff = args => {
  const {id, token} = args;
  cancelRequests('deleteStaff');
  return del({
    url: `${routes.account}${id}`,
    cancelKey: 'deleteStaff',
    headers: {Authorization: `Bearer ${token}`},
  }).then(res => {
    console.log('Delete Customer', JSON.stringify(res, null, 2));
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
};

// Labour
export const addLabour = args => {
  const {callback, photo, token, ...params} = args;

  cancelRequests('addLabour');

  const body = getFormData(params);

  if (photo) body.append('photo', photo, photo.name);

  return post({
    url: routes.addLabour,
    cancelKey: 'addLabour',
    params: body,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      callback?.();
      return data;
    }
  });
};

export const getLabour = token => {
  cancelRequests('getLabour');
  return get({
    url: routes.getLabour,
    cancelKey: 'getLabour',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
};

export function updateLabour(args) {
  const {callback, id, photo, token, ...params} = args;

  cancelRequests('updateLabour');

  const body = getFormData(params);

  if (photo) body.append('photo', photo, photo.name);

  return patch({
    url: `${routes.account}${id}`,
    cancelKey: 'updateLabour',
    params: body,
    headers: {
      Authorization: `Bearer ${token}`,
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

// Profile
export const getAccountInfo = token => {
  cancelRequests('getAccountInfo');
  return get({
    url: routes.getAccountInfo,
    cancelKey: 'getAccountInfo',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
};

// Customer
export const addCustomer = args => {
  const {callback, photo, token, ...params} = args;

  cancelRequests('addCustomer');

  const body = getFormData(params);

  if (photo) body.append('photo', photo, photo.name);

  return post({
    url: routes.addCustomer,
    cancelKey: 'addCustomer',
    params: body,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      callback?.();
      return data;
    }
  });
};

export const getCustomer = token => {
  cancelRequests('getCustomer');
  return get({
    url: routes.getCustomer,
    cancelKey: 'getCustomer',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then(res => {
    const {status, data} = res;
    if (status) {
      return data;
    }
  });
};

export function updateCustomer(args) {
  const {callback, id, photo, token, ...params} = args;

  cancelRequests('updateCustomer');

  const body = getFormData(params);

  if (photo) body.append('photo', photo, photo.name);

  return patch({
    url: `${routes.account}${id}`,
    cancelKey: 'updateCustomer',
    params: body,
    headers: {
      Authorization: `Bearer ${token}`,
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
