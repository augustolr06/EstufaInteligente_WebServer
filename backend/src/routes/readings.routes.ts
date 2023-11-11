import { Router } from "express";
import { GetReadingsController } from "../modules/readings/useCases/getReadings/GetReadingsController";

/**
 * [GET] `/readings/:greatness/:initialDate/:finalDate/:deviceId` - Retorna todas as leituras de temperatura de uma estufa em um intervalo de tempo
 */

const getReadingsController = new GetReadingsController();

const readingsRoutes = Router();

readingsRoutes.get(
  "/:greenhousesid/:greatness/:initialDate/:finalDate",
  getReadingsController.handle
);

export { readingsRoutes };
