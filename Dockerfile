##################################
FROM golang:1.21-alpine as go-base
##################################

WORKDIR /build

COPY go.mod go.sum ./
RUN go mod download
# Copy everything (idk if everything it copies is necessary, i hope someone can tell me if it isnt lol)
COPY . .

RUN go build -tags prod -o bin/app cmd/main_prod.go

##################################
FROM node:14.17.0-alpine as node-base
##################################

WORKDIR /web

COPY web/package.json web/package-lock.json ./
RUN npm install

COPY web ./
RUN npm run build


##################################
FROM alpine:latest
##################################

WORKDIR /app

COPY --from=go-base /build/bin/app /app/bin/app

COPY --from=node-base /web/build /app/web/build


#Where the containers main executable is
ENTRYPOINT [ "/app/bin/app" ]

# Command: docker build -t go-web-app .