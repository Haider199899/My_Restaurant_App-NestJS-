/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { User } from './core/models/user.model';
import { Profile } from './core/models/profile.model';
import { Menu } from './core/models/restaurant_menu.model';
import { Order } from './core/models/order.model';
import { Restaurant } from './core/models/restaurant.model';
import { RestaurantModule } from './modules/restaurant/restaurant.module';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { MenuModule } from './modules/menu/menu.module';
import { OrdersModule } from './modules/orders/orders.module';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'post1234',
      database: 'My_restaurant',
      models: [User,Profile,Menu,Order,Restaurant],
      autoLoadModels:true
    }),
    AuthModule,
    UsersModule,
    RestaurantModule,
    ProfilesModule,
    MenuModule,
    OrdersModule
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
