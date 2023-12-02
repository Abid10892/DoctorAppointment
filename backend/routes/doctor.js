import express from "express";
import reviewRouter from "./review.js";
import {
  allDoctor,
  deleteDoctor,
  getDoctorProfile,
  getSingleDoctor,
  updateDoctor,
} from "../controllers/doctor.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

//nested route
router.use("/:doctorId/reviews", reviewRouter);

router.put("/:id", authenticate, restrict(["doctor"]), updateDoctor);
router.delete("/:id", authenticate, restrict(["doctor"]), deleteDoctor);
router.delete(
  "/profile/me",
  authenticate,
  restrict(["doctor"]),
  getDoctorProfile
);
router.get("/:id", getSingleDoctor);
router.get("/", allDoctor);

export default router;
