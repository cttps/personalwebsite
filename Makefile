run: build
	@./bin/app

build:
	@cd web && npm run build && cd ..
	@go build -o bin/app cmd/main.go

frontend:
	@cd web && npm run start