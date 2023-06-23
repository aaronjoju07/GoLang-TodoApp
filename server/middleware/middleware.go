package middleware

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

var collextion *mongo.Collection

func init() {
	loadTheEnv()
	CreateDbInstance()
}

func loadTheEnv() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal("Error loading the .env file")
	}
}

func CreateDbInstance() {
	connectionString := os.Getenv("DB_URL")
	dbName := os.Getenv("DB_N")
	colName := os.Getenv("DB_C")
	clientOptions := options.Client().ApplyURI(connectionString)
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		log.Fatal(err)
	}
	err = client.Ping(context.TODO(), nil)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println("connected to mongodb")
	collection = client.Database(dbName).Collection(colName)
	fmt.Println("collection instance created")
}

func GetAllTasks(w http.ResponseWriter, r *http.Request) {

}

func CreateTask() {

}

func TaskComplete() {

}

func UndoTask() {

}

func DeleteTask() {

}

func DeleteAllTasks() {

}
