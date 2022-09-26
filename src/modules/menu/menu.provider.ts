/* eslint-disable prettier/prettier */
import { Menu } from 'src/core/models/restaurant_menu.model';
import{MENU_REPOSITORY} from '../../core/constants';

export const menuProviders = [{
    provide: MENU_REPOSITORY,
    useValue:Menu
}]