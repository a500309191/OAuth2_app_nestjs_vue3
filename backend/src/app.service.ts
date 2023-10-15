import { Injectable } from "@nestjs/common"
import { Response } from "express"
import axios from "axios"
import * as dotenv from "dotenv"

dotenv.config()

const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URL = process.env.REDIRECT_URL
const GRANT_TYPE = process.env.GRANT_TYPE


@Injectable()
export class AppService {

  async getLeads(
    authorization: string,
    queryParam: string,
    res: Response
  ) {
    try {
      const response = await axios.get(
        `https://a500309191.amocrm.ru/api/v4/leads?query=${queryParam}`,
        { headers: {
          "Authorization": authorization
        }}
      )
      return res.json(response.data)
    } catch (error) {
      throw new Error(error)
    }
  }

  async auth(
    code: string,
    referer: string,
    res: Response
  ) {
    try {
      const resp = await axios.post(
        `https://${referer}/oauth2/access_token`,
        {
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
          grant_type: GRANT_TYPE,
          code: code,
          redirect_uri: REDIRECT_URL,
        }
      )
      const accessToken = resp.data.access_token
      res.redirect(`http://localhost:8080?access_token=${accessToken}`)
    } catch (error) {
      res.json(error)
    }
  }
}











// interface Leads {
//   id: number
//   name: string
//   price: number
//   responsible_user_id: number
//   group_id: number
//   status_id: number
//   pipeline_id: number
//   loss_reason_id: number | null
//   created_by: number
//   updated_by: number
//   created_at: number
//   updated_at: number
//   closed_at: number | null
//   closest_task_at: number | null
//   is_deleted: boolean
//   custom_fields_values: any
//   score: number | null
//   account_id: number
//   labor_cost: number | null
// }

// interface Person {
//   _page: number
//   _links: any
//   _embeded: 
//   "_embedded": {
//       "leads": [
//           {
//               "id": 706813,
//               "name": "test1",
//               "price": 1000,
//               "responsible_user_id": 10188946,
//               "group_id": 0,
//               "status_id": 61074402,
//               "pipeline_id": 7338382,
//               "loss_reason_id": null,
//               "created_by": 10188946,
//               "updated_by": 10188946,
//               "created_at": 1697185111,
//               "updated_at": 1697185111,
//               "closed_at": null,
//               "closest_task_at": null,
//               "is_deleted": false,
//               "custom_fields_values": null,
//               "score": null,
//               "account_id": 31340002,
//               "labor_cost": null,
//               "_links": {
//                   "self": {
//                       "href": "https://a500309191.amocrm.ru/api/v4/leads/706813?query=&page=1&limit=250"
//                   }
//               },
//               "_embedded": {
//                   "tags": [],
//                   "companies": [
//                       {
//                           "id": 1612953,
//                           "_links": {
//                               "self": {
//                                   "href": "https://a500309191.amocrm.ru/api/v4/companies/1612953?query=&page=1&limit=250"
//                               }
//                           }
//                       }
//                   ]
//               }
//           },
//       ]
//   }
// }