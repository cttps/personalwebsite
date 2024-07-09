run: buildall
	@./bin/app

buildall:
	@cd web && npm run build && cd ..
	@go build -o bin/app cmd/main.go
	
backend:
	@go build -o bin/app cmd/main.go
	@./bin/app

frontend:
	@cd web && npm run start