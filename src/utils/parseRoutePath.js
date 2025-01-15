export function parseRoutePath(path){
  //parametro que vai verificar exemplo: products/ ":id"
  const routeParametersRegex = /:([a-zA-z]+)/g
  //proximo parametro que vai verificar exemplo: products/:id "?"status=closed
  const params = path.replaceAll(routeParametersRegex,"(?<$1>[a-z0-9-_]+)")
  //proximo parametro que vai verificar exemplo: products/:id ?"status=closed"
  const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)

  return pathRegex
}