import { Router } from "express";
import PublisherController from "../Controllers/PublisherController";


const RouterPublisher = Router()

RouterPublisher.get("/all",PublisherController.GetAllPublishers)

export default RouterPublisher