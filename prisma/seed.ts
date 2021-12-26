import { PrismaClient } from '@prisma/client';
import * as faker from 'faker';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.post.deleteMany();

  console.log('Seeding.......');

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

    console.log(user);
  }

}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
