import { PrismaClient } from '@prisma/client';
import * as faker from 'faker';
const locality = require('./seed/locality-malaysia.json');

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();
  await prisma.country.deleteMany();
  await prisma.city.deleteMany();
  await prisma.state.deleteMany();

  console.log('Seeding.......');

  const countryArray: string[] = ['Malaysia', 'Indonesia'];

  for (const country of countryArray) {
    await prisma.country.create({
      data: {
        name: country,
      },
    });
  }

  const country = await prisma.country.findFirst({
    where: {
      name: 'Malaysia',
    },
  });

  // MALAYSIA LOCALITY
  for (const state of locality.state) {
    const stateName: any = state.name;
    const city: any = state.city;
    for (const currentCity of city) {
      const cityName: any = currentCity.name;
      const state = await prisma.state.findFirst({
        where: {
          name: stateName,
        },
      });
      // console.log('state',state);
      try {
        if (!state) {
          await prisma.city.create({
            data: {
              name: cityName,
              state: {
                create: {
                  name: stateName,
                },
              },
              country: {
                connect: { id: country.id },
              },
            },
          });
        } else {
          await prisma.city.create({
            data: {
              name: cityName,
              state: {
                connect: {
                  id: state.id,
                },
              },
              country: {
                connect: { id: country.id },
              },
            },
          });
        }
        await prisma.city.create({
          data: {
            name: cityName,
            state: {
              connectOrCreate: {
                create: {
                  name: stateName,
                },
                where: {
                  id: state.id,
                },
              },
            },
            country: {
              connect: { id: country.id },
            },
          },
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  for (let i = 0; i < 100; i++) {
    const user = await prisma.user.create({
      data: {
        email: faker.internet.email(),
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        phone_number: faker.phone.phoneNumber(),
        password:
          '$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm', // secret42
        role: faker.random.arrayElement(['USER', 'ADMIN']),
      },
    });

    // console.log(user);
  }

  for (let i = 0; i < 100; i++) {
        const randomCity =
      await prisma.$queryRaw`SELECT * from nest_db."City" ORDER BY RANDOM() LIMIT 1`;

    const address = await prisma.address.create({
      data: {
        address: faker.address.streetAddress(),
        postcode: faker.address.zipCode(),
        city: {
          connect: {
            id: randomCity[0].id
          }
        },
        longitude: parseFloat(faker.address.longitude()),
        latitude: parseFloat(faker.address.latitude()),
      },
    });

    console.log(address);
  }
}





main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
