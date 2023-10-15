import { Controller, Get, Query, Headers, Res } from "@nestjs/common"
import { AppService } from "./app.service"
import { Request, Response } from "express"

@Controller("/api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("leads")
  getLeads(
    @Headers("authorization") authorization: string,
    @Query("query") queryParam: string,
    @Res() res: Response,
  ): Promise<Response> {
    return this.appService.getLeads(authorization, queryParam, res)
  }

  @Get()
  authorization(
    @Query("code") code: string,
    @Query("referer") referer: string,
    @Res() res: Response,
  ): void {
    this.appService.auth(code, referer, res)
  }
}


