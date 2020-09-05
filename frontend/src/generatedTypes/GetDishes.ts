/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetDishes
// ====================================================

export interface GetDishes_restaurant_dishes_image {
  __typename: "UploadFile";
  url: string;
}

export interface GetDishes_restaurant_dishes {
  __typename: "Dishes";
  id: string;
  name: string;
  description: string;
  price: number;
  image: GetDishes_restaurant_dishes_image | null;
}

export interface GetDishes_restaurant {
  __typename: "Restaurant";
  id: string;
  name: string;
  dishes: (GetDishes_restaurant_dishes | null)[] | null;
}

export interface GetDishes {
  restaurant: GetDishes_restaurant | null;
}

export interface GetDishesVariables {
  id: string;
}
