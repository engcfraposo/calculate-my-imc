import RNIap, {purchaseUpdatedListener} from 'react-native-iap';
import { Puchase } from '../@types'

export const purchased = async (productId: number) => {
  let isPurchased = false;
  try {
    const puchases = await RNIap.getAvailablePurchases();

    puchases.forEach((puchase: Puchase) => {
      if(puchase.productId === productId){
        isPurchased = true;
        return;
      }
    });
    return isPurchased;
  } catch (error) {
    return false;
  }
};

export const requestPurschase = async (productId: number) => {};

export const fetchAvailableProducts = async (productsIds: []) => {};

export const purchaseUpdateSubscription = async () => {};
