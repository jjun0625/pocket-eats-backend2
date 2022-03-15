import { RestaurantService } from './restautants.service';
import { Restaurant } from './entities/restaurant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantResolver } from './restaurants.resolver';
import { Module } from '@nestjs/common';

@Module({
  providers: [RestaurantResolver, RestaurantService],
  imports: [TypeOrmModule.forFeature([Restaurant])],
})
export class RestaurantsModule {}
