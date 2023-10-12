import { FormikErrors, FormikTouched } from "formik";
import { ReactElement } from "react";

export type AuthType = {
  name?: string;
  email?: string;
  token?: string;
  password?: string;
  acceptTerms?: boolean;
};

export type FilterStockType = { title: string; id: string };

export type SidebarType =
  | string
  | ""
  | "BRAND"
  | "FILTER"
  | "CATEGORY"
  | "CREATE_BRAND"
  | "CREATE_CATEGORY";

export type FormikErrorType =
  | string
  | string[]
  | FormikErrors<any>
  | FormikErrors<any>[]
  | undefined;

export type FormikTouchedType =
  | boolean
  | FormikTouched<any>
  | FormikTouched<any>[]
  | undefined;

export type NavLinkType = {
  id: number;
  link: string;
  title: string;
  icon: ReactElement;
};

export type SearchFilterType = {
  brand: CategoryType | any;
  stock: FilterStockType | any;
  category: CategoryType | any;
};

export type CategoryType = {
  id: number;
  title: string;
  userId: number;
  storeId: number;
  // isForUpdate?: boolean | undefined;
};

export type NotificationType = {
  id: number;
  time: string;
  message: string;
};

export type CustomerType = {
  id?: number;
  name: string;
  phone: string;
  countryCode?: string | undefined;
};

export type ProductType = {
  id?: number;
  sku?: string;
  qty?: number;
  title: string;
  desc?: string;
  storeId?: number;
  brandId?: number;
  gallery?: string[];
  categoryId?: string[];
  stock: number | null;
  price: number | null;
  discount?: number | null;
  actualCost?: number | null;
};

export type OrderType = {
  createdAt: string;
  deletedAt: string;
  updatedAt: string;
  id: number;
  qty: number;
  note: string;
  price: number;
  status: string;
  storeId: number;
  orderId: number;
  discount: number;
  productId: number;
  customerId: number;
  totalPrice: number;
  paymentMethod: string;
  productsCount: number;
  receiveAmount: number;
  discountCoupon: string;
  product: { title: string; gallery: any[] };
};

export type OrderSidebarDataType = {
  deletedAt: null;
  id: number;
  qty: number;
  price: number;
  orderId: number;
  productId: number;
  createdAt: string;
  updatedAt: string;
  product: { title: string; gallery: string[] };
};

export type BrandAndCategoryType = {
  id: number;
  title: string;
};

export type StoreType = {
  id?: number;
  title: string;
  email: string;
  logo?: string;
  currency?: string;
  address?: string;
  city: string;
  web: string;
  country: string;
  state: string;
  phone?: string;
  phoneCode?: string;
  desc: string;
};

export type NewSellOrderType = {
  note: string;
  products: any[];
  discount: number;
  totalPrice: number;
  customerType: string;
  receiveAmount: string;
  paymentMethod: string;
  discountCoupon: string;
};
