import jester

proc registerIndexRoutes*() =
  echo "Registering index routes..."  # optional log

routes:
  get "/":
    resp "Hello, worlds!"
