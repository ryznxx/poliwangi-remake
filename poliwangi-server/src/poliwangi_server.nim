# main.nim
import jester
import routes/routes   # routes dijalankan top-level saat di-import

echo "Server running on http://localhost:5000"
routes.registerIndexRoutes()
runForever()
