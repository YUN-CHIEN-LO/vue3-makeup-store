import { REST } from "../common";
import { getProductApi } from "@/type";
export default {
  getProduct({
    brand,
    product_type,
    product_category,
    product_tags,
    price_greater_than,
    price_less_than,
    rating_greater_than,
    rating_less_than,
  }: getProductApi): Promise<any> {
    if (!brand && !product_type && !product_category && !product_tags)
      return new Promise((resolve, reject) => {
        resolve({ data: [] });
        reject("null brand");
      });

    return REST.get(`/api/v1/products.json`, {
      params: {
        brand: brand,
        product_type: product_type,
        product_category: product_category,
        product_tags: product_tags,
        price_greater_than: price_greater_than,
        price_less_than: price_less_than,
        rating_greater_than: rating_greater_than,
        rating_less_than: rating_less_than,
      },
    });
  },
};
