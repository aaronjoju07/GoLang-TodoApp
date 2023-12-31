package main

import (
	"fmt"
	"github.com/aaronjoju07/go-toda-app/router"
	"log"
	"net/http"
)

func main() {
	r := router.Router()
	fmt.Println("starting the server in port 9000")
	log.Fatal(http.ListenAndServe(":9000", r))
}
