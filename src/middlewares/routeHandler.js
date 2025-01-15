import { routes } from "../routes/index.js";
import { Database } from "../database/database.js";
import { extractQueryParams } from "../utils/extractQueryParams.js";

const database = new Database()

export function routeHandler(request, response){
  const route = routes.find((route) => {
    return route.method === request.method && route.path.test(request.url)
  })

  if(route){
    /*
          [
        '/tickets?status=closed',
        '?status=closed',
        'status=closed',
        index: 0,
        input: '/tickets?status=closed',
        groups: [Object: null prototype] { query: '?status=closed' }
        ]
    */
    const routeParams = request.url.match(route.path)
    //?status=closed
    const { query, ...params } = routeParams.groups

    request.params = params
    request.query = query ? extractQueryParams(query) : {}

    return route.controller({ request, response, database })
  }

  return response.writeHead(404).end()
}