export interface IProductResponse {
  product: IProduct[];
  message: string;
  productCount: number;
}

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  ratings: number;
  images: Image[];
  category: string;
  stock: number;
  numberOfReviews: number;
  user: string;
  reviews: Review[];
  createdAt: string;
  __v: number;
}

export interface Image {
  public_id: string;
  url: string;
  _id: string;
}

export interface Review {
  user: string;
  name: string;
  rating: number;
  comment: string;
  _id: string;
}
