import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendProjectCreatedMessage(user, project){
      await this.mailerService.sendMail({
        to: user.email,
        // from: '"Support Team" <support@example.com>', // override default from
        subject:`Congratulations, ${project.name} has been created`,
        template: './basic', // `.hbs` extension is appended automatically
        context: {
            title: `${project.name} created`,
            name: user.name,
        },
      });
  }
}
