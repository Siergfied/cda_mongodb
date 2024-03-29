import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CarDocument = HydratedDocument<Car>;

@Schema()
export class Car {
  @Prop()
  brand: string;

  @Prop()
  price: string;

  @Prop()
  description: string;
}

export const CarSchema = SchemaFactory.createForClass(Car);
