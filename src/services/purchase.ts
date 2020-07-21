import RNIap, {purchaseUpdatedListener} from 'react-native-iap';
import { Purchase } from '../@types'
import { Alert } from 'react-native';

export const purchased = async (productId: any) => {
  let isPurchased: boolean = false;
  try {
    const puchases = await RNIap.getAvailablePurchases();
    puchases.forEach((purchase: Purchase) => {
      if(purchase.productId === productId){
        isPurchased = true;
        return;
      }
    });
    return isPurchased;
  } catch (error) {
    return false;
  }
};

export const requestPurschase = async (productId: any) => {
  try {
    await RNIap.requestSubscription(productId);
  } catch (error) {
    Alert.alert("Erro ao tentar recuperar os dados produto. Por Favor tente novamente!")
  }
};

export const fetchAvailableProducts = async (productsIds: string[] ) => {
  try {
    const getProducts =  await RNIap.getProducts(productsIds)
  } catch (error) {
    
  }
};

export const purchaseUpdateSubscription = async () => {
  await purchaseUpdatedListener(async (purchase: Purchase) => {
    const receipt: {} = purchase.transactionReceipt;
    if (receipt) {
      const ackResult = await  RNIap.finishTransaction(purchase);
    }
  })
};
