import { CountryModule } from './modules/country/country.module';
import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { AppService } from './services/app.service';
import { AuthModule } from './resolvers/auth/auth.module';
import { UserModule } from './resolvers/user/user.module';
import { AppResolver } from './resolvers/app.resolver';
import { DateScalar } from './common/scalars/date.scalar';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './configs/config';
import { GraphqlConfig } from './configs/config.interface';
import { PrismaModule } from 'nestjs-prisma';
import { CityModule } from './modules/city/city.module';
import { StateModule } from './modules/state/state.module';
import { CompanyModule } from './modules/company/company.module';
import { ProjectModule } from './modules/project/project.module';
import { AddressModule } from './modules/address/address.module';
import { UserProjectFollowerModule } from './modules/user-project-follower/user-project-follower.module';
import { PostCategoryModule } from './modules/post-category/post-category.module';
import { AdminProjectModule } from './modules/admin-project/admin-project.module';
import { OrganizationChartAdminModule } from './modules/organization-chart-admin/organization-chart-admin.module';
import { PostModule } from './modules/post/post.module';
import { BookingModule } from './modules/booking/booking.module';
import { EventModule } from './modules/event/event.module';
import { EventRateModule } from './modules/event-rate/event-rate.module';
import { CurrencyModule } from './modules/currency/currency.module';
import { PaymentModule } from './modules/payment/payment.module';
import { Ipay88Service } from './modules/ipay88/ipay88.service';
import { AttachmentModule } from './modules/attachment/attachment.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';





@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/uploads'),
      serveRoot: '/uploads/'
    }),
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql');
        return {
          installSubscriptionHandlers: true,
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
          sortSchema: graphqlConfig.sortSchema,
          autoSchemaFile:
            graphqlConfig.schemaDestination || './src/schema.graphql',
          debug: graphqlConfig.debug,
          playground: graphqlConfig.playgroundEnabled,
          context: ({ req }) => ({ req }),
        };
      },
      inject: [ConfigService],
    }),
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PostModule,
    CityModule,
    CountryModule,
    StateModule,
    CompanyModule,
    ProjectModule,
    AddressModule,
    UserProjectFollowerModule,
    PostCategoryModule,
    AdminProjectModule,
    OrganizationChartAdminModule,
    BookingModule,
    EventModule,
    EventRateModule,
    CurrencyModule,
    PaymentModule,
    AttachmentModule,
  ],
  controllers: [],
  providers: [AppService,  AppResolver, DateScalar, Ipay88Service],
})
export class AppModule {}
