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

type ProductColor = {
  colour_name: string;
  hex_value: string;
};

type Product = {
  api_featured_image: string;
  brand: string;
  category: string;
  created_at: string;
  currency: string;
  description: string;
  id: string;
  image_link: string;
  name: string;
  price: string;
  price_sign: string;
  product_api_url: string;
  product_colors: ProductColor[];
  product_link: string;
  product_type: string;
  rating?: string;
  tag_list: string[];
  updated_at: string;
  website_link: string;
};

export type { getProductApi };
export type { Product };
