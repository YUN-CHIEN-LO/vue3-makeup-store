type getProductApi = {
  brand?: string;
  product_type?: string;
  product_category?: string;
  product_tags?: string;
  price_greater_than?: number;
  price_less_than?: number;
  rating_greater_than?: number;
  rating_less_than?: number;
};

export type { getProductApi };
