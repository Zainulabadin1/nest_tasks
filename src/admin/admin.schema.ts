//Schema for mongodb

import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { Document } from 'mongoose';
const uniqueValidator = require('mongoose-unique-validator')


@Schema()
export class Admin extends Document{
   
    @Prop()
    name: string

    @Prop({unique : true})
    email: string

    @Prop()
    password: string
}

export const AdminSchema = SchemaFactory.createForClass(Admin);
AdminSchema.plugin(uniqueValidator)