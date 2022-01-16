import { CountryModule } from './country/country.module';
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
import { CityModule } from './city/city.module';
import { StateModule } from './state/state.module';
import { CompanyModule } from './company/company.module';
import { ProjectModule } from './project/project.module';
import { AddressModule } from './address/address.module';
import { UserProjectFollowerModule } from './user-project-follower/user-project-follower.module';
import { PostCategoryModule } from './post-category/post-category.module';
import { AdminProjectModule } from './admin-project/admin-project.module';
import { OrganizationChartAdminModule } from './organization-chart-admin/organization-chart-admin.module';
import { PostModule } from './post/post.module';
import { ImageModule } from './image/image.module';
import { BookingModule } from './booking/booking.module';
import { EventModule } from './event/event.module';
import { EventRateModule } from './event-rate/event-rate.module';
import { EmailModule } from './email/email.module';
import { CurrencyModule } from './currency/currency.module';
import { PaymentModule } from './payment/payment.module';
import { Ipay88Service } from './ipay88/ipay88.service';

@Module({
  imports: [
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
    ImageModule,
    BookingModule,
    EventModule,
    EventRateModule,
    EmailModule,
    CurrencyModule,
    PaymentModule,
  ],
  controllers: [],
  providers: [AppService,  AppResolver, DateScalar, Ipay88Service],
})
export class AppModule {}
