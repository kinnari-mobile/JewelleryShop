export interface ILoginUser {
  email: string;
  phone: string;
  password: string;
  remember: boolean;
}

export interface ISignUpUser {
  email: string;
  phone: string;
  password: string;
  remember: boolean;
}

export interface IForgotPassword {
  email: string;
}

export interface ISetPassword {
  password: string;
  confirm_password: string;
}

export interface IAddProductFields {
  category: string;
  subCategory: string;
  modal_number: string;
  main_unit: string;
  main_unit_qty: string;
  sub_unit: string;
  sub_unit_qty: string;
  plating: string;
  size: string;
  stone: string;
  product_image: string[];
}

export interface IProduct {
  product_image: string;
  title: string;
  plating: string;
  modal_number: string;
  price: string;
  sale_price: string;
  UOM: string;
  active: boolean;
}

export interface ISetting {
  id: string;
  title: string;
}

export interface IStaff {
  id: string;
  setting_image: string;
  title: string;
}

export interface IAddCategoryFields {
  category: string;
  subCategory: string;
  modal_number: string;
  main_unit: string;
  main_unit_qty: string;
  sub_unit: string;
  sub_unit_qty: string;
  plating: string;
  size: string;
  stone: string;
  category_image: string;
}

export interface IAddBusinessFields {
  title: string;
  list_image: string;
}

export interface ICategory {
  _id: string;
  id: string;
  category_image: string;
  name: string;
  description: string;
}

export interface IBusiness {
  id: string;
  title: string;
}

export interface IBill {
  id: string;
  customer_name: string;
  invoice_no: string;
  date: string;
  amount: string;
}
export interface IPrice {
  mrp: string;
  sale: string;
  in_stock: string;
}

export interface IAddEdit {
  sub_cate: string;
}

export interface IStaffAddEdit {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  bank_name: string;
  holder_name: string;
  acc_number: string;
  ifsc_code: string;
  role: string;
  photo: string;
  is_del: boolean;
  is_active: boolean;
}

export interface ICustomer {
  user_image: string;
  name: string;
  mobile: string;
}

export interface IStaffListCard {
  id: string;
  user_image: string;
  name: string;
  mobile: string;
  email: String;
}

export interface IAddCustomerFields {
  name: string;
  email: string;
  address: string;
  phone: string;
  pincode: string;
  city: string;
  state: string;
  country: string;
  photo: string;
}

export interface IAccountInfoFields {
  name: string;
  email: string;
  address: string;
  phone: string;
  pincode: string;
  photo: string;
}

export interface ISubCategory {
  _id: string;
  category_image: string;
  name: string;
  category: string;
  token?: string;
  callback?: () => void;
}

export interface ICompanyInfoFields {
  companyname: string;
  ownername: string;
  address: string;
  contact: string;
  email: string;
  managername: string;
}

export interface IBillFields {
  customer_name: string;
  invoice_no: string;
  invoice_date: string;
  transport: string;
  lr_no: string;
  payable_value: string;
  cgst: string;
  sgst: string;
  packaging_expense: string;
  parcel_paid: string;
  discount: string;
  grand_total: string;
}
export interface IUnit {
  id: string;
  title: string;
}

export interface IAddFormikUnit {
  unit: string;
}

export interface IPlatting {
  id: string;
  title: string;
}

export interface IAddPlatting {
  plating: string;
}

export interface IStone {
  id: string;
  title: string;
}

export interface IAddStone {
  stone: string;
}

export interface ISize {
  id: string;
  title: string;
}

export interface IAddSize {
  size: string;
}

export interface IChangePassword {
  old_password: string;
  password: string;
  confirm_password: string;
}

export interface ILoginParams {
  phone: string;
  password: string;
  remember: boolean;
  callback?: () => void;
}

export interface IUser {
  isLoggedIn: boolean;
  user: {
    access: string;
    refresh: string;
  };
}

export interface IAddAttribute {
  title: string;
  value: string;
  token?: string;
  callback?: () => void;
}

export interface IGetAttribute {
  title: string;
  token: string;
  callback?: () => void;
}

export interface IAddUnit {
  title: string;
  baseQty: string;
  token?: string;
  callback?: () => void;
}

export interface IGetAllProducts {
  token: string;
}

export interface IGetUnit {
  token: string;
  callback?: () => void;
}

export interface IAddCategory {
  name: string;
  photo?: {
    uri: string;
    name: string;
    type: string;
  };
  token?: string;
  callback?: () => void;
}

export interface IAddCategoryForm {
  category: string;
  category_image:
    | string
    | {
        uri: string;
        type: string;
        name: string;
      };
}

export interface IGetSubCategory {
  category_id: string;
  token: string;
}

export interface IGetCategoy {
  token: string;
}

export interface IEditSubCategory {
  token?: string;
  category?: string;
  name: string;
  _id?: string;
  callback?: () => void;
}

export interface IDeleteSubCategory {
  token?: string;
  _id: string;
}

export interface IDeleteAttribute {
  title: string;
  value: string;
  token?: string;
}

export interface IDeleteCategory {
  token?: string;
  id: string;
}
