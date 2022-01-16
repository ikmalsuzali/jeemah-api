import { PrismaClient } from '@prisma/client';
import * as faker from 'faker';
const locality = require('./seed/locality-malaysia.json');

const prisma = new PrismaClient();

async function main() {
  try {
  await prisma.address.deleteMany();
  await prisma.post.deleteMany();
  await prisma.country.deleteMany();
  await prisma.city.deleteMany();
  await prisma.state.deleteMany();
  await prisma.adminProject.deleteMany();
  await prisma.userProjectFollower.deleteMany()
  await prisma.user.deleteMany();
  await prisma.project.deleteMany();



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
    await prisma.state.create({
      data: {
        name: stateName,
        country: {
          connect: { id: country.id },
        },
      },
    });
    for (const currentCity of city) {
      const cityName: any = currentCity.name;
      const state = await prisma.state.findFirst({
        where: {
          name: stateName,
        },
      });
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
      await prisma.$queryRaw`SELECT * from "City" ORDER BY RANDOM() LIMIT 1`;



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

  }
  } catch(error) {
    console.log(error)
  }

  // country
  for (let i = 0; i < 100; i++) {
    const randomAddress =
      await prisma.$queryRaw`SELECT * from "Address" ORDER BY RANDOM() LIMIT 1`;
    const project = await prisma.project.create({
      data: {
        name: faker.company.companyName(),
        registration_no: faker.finance.creditCardNumber(),
        phone_number: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        address: {
          connect: {
            id: randomAddress[0].id,
          },
        },
      },
    });

    console.log(project);
  }


  for (let i = 0; i < 100; i++) {

    const users =
        await prisma.$queryRaw`SELECT * from "User" WHERE role = 'USER' ORDER BY RANDOM() LIMIT 1`;

    const admins =
        await prisma.$queryRaw`SELECT * from "User" WHERE role = 'ADMIN' ORDER BY RANDOM() LIMIT 1`;

    const projects =
        await prisma.$queryRaw`SELECT * from "Project" ORDER BY RANDOM() LIMIT 1`;
   
    await prisma.userProjectFollower.create({
      data: {
        user: {
          connect: {
            id: users[0].id
          }
        },
        project: {
          connect: {
            id: projects[0].id
          }
        }
      }
    })

    await prisma.adminProject.create({
      data: {
        user: {
          connect: {
            id: admins[0].id,
          },
        },
        project: {
          connect: {
            id: projects[0].id,
          },
        },
      },
    });
    
    
  }

}



main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
