import {Injectable} from "@nestjs/common";
import {PrismaService} from "../../prisma/prisma.service";
import {removeNullKeys} from "../../utils";

@Injectable()
export class UpdateProjectService {
  constructor(private readonly prisma: PrismaService) {}
  async invoke(pageID,projectID,content) {
    return this.prisma.page.update({
      where:{
        id:pageID
      },
      data:removeNullKeys({
        projectID,
        content,
      })
    })
  }
}
