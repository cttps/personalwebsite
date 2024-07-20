##################################
FROM golang:1.21-alpine as go-base
##################################

WORKDIR /build

COPY go.mod go.sum ./
RUN go mod download
# Copy everything (idk if everything it copies is necessary, i hope someone can tell me if it isnt lol)
COPY . .
RUN go build -tags prod -o bin/app cmd/main_prod.go

#Where the containers main executable is
ENTRYPOINT [ "/build/bin/app" ]