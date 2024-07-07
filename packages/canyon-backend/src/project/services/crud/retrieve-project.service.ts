import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {PrismaService} from "../../../prisma/prisma.service";
// import { PrismaService } from '../../prisma/prisma.service';
@Injectable()
export class RetrieveProjectService {
  constructor(private readonly prisma: PrismaService) {}
  async invoke(currentUser, projectID) {
    console.log(currentUser)
    return this.prisma.project.findFirst({
      where:{
        id: projectID,
      }
    })
  }
}
