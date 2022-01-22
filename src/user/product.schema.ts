//Schema for mongodb

import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator')


@Schema()
export class Product extends Document{
   
    @Prop()
    name: string

    @Prop()
    price: number

    @Prop({unique : true})
    product_code: string

    @Prop()
    quantity: number

    @Prop()
    expiry_date: Date

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user_id: mongoose.Types.ObjectId 
    //[{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]

    @Prop({default: "unapproved"})
    approved: string
}

export const ProductSchema = SchemaFactory.createForClass(Product);
ProductSchema.plugin(uniqueValidator)