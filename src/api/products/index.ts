import axios from 'axios';
import {API} from '../../common/Constants';

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API.BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.log(`Error fetching products: ${error}`);
    return error;
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await axios.get(`${API.BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.log(`Error fetching product: ${error}`);
    return error;
  }
};
