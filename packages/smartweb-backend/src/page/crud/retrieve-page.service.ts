import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../prisma/prisma.service";

@Injectable()
export class RetrievePageService {
  constructor(private readonly prisma: PrismaService) {}
  async invoke(pageID) {
    return this.prisma.page.findFirst({
      where:{
        id: pageID
      }
    })
  }
}
