/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetMyRestaurants
// ====================================================

export interface GetMyRestaurants_restaurants_image {
  __typename: "UploadFile";
  url: string;
}

export interface GetMyRestaurants_restaurants {
  __typename: "Restaurant";
  id: string;
  name: string;
  description: string;
  image: GetMyRestaurants_restaurants_image | null;
}

export interface GetMyRestaurants {
  restaurants: (GetMyRestaurants_restaurants | null)[] | null;
}
