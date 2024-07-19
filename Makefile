run: build-dev
	@./bin/app

# i think npm build auto minifies tailwindcss
build-prod:
	@cd web && npm run build && cd ..
	@go build -tags prod -o bin/app cmd/main_prod.go

build-dev:
	@cd web && npm run build # `&& cd ..` not necessary because each line is done in a seperate shell
	@go build -o bin/app cmd/main_dev.go

backend:
	@go build -o bin/app cmd/main.go
	@./bin/app

frontend:
	@cd web && npm run start