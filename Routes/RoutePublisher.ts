import { Router } from "express";
import PublisherController from "../Controllers/PublisherController";


const RouterPublisher = Router()

RouterPublisher.get("/all",PublisherController.GetAllPublishers)
RouterPublisher.post("/create",PublisherController.CreatePublisher)

export default RouterPublisher