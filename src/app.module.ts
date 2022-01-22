import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User, UserSchema } from './user/user.schema';
//import {Admin, AdminSchema} from './admin/admin.schema'
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [UserModule, AdminModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      introspection: true,
        playground: true
    }),
    MongooseModule.forRoot('mongodb+srv://zain9246:G9JVMPYMhQErVbh6@cluster0.32ag5.mongodb.net/nest-tasks'),
    MongooseModule.forFeature([{
      name: User.name, schema: UserSchema
    }]),
   // MongooseModule.forFeature([{name : Admin.name , schema : AdminSchema}])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
