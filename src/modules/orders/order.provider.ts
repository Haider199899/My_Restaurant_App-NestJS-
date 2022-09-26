/* eslint-disable prettier/prettier */
import { Order } from 'src/core/models/order.model';
import{ORDER_REPOSITORY} from '../../core/constants';

export const orderProviders = [{
    provide: ORDER_REPOSITORY,
    useValue:Order
}]