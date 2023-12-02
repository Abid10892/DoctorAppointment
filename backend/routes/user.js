import express from "express";
import {
  allUser,
  deleteUser,
  getMyAppointment,
  getSingleUser,
  getUserProfile,
  updateUser,
} from "../controllers/user.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();
router.put("/:id", authenticate, restrict(["patient"]), updateUser);
router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);
router.get("/", authenticate, restrict(["admin"]), allUser);
router.delete("/:id", authenticate, restrict(["patient"]), deleteUser);
router.get("/profile/me", authenticate, restrict(["patient"]), getUserProfile);
router.get(
  "/appointment/my-appointment",
  authenticate,
  restrict(["patient"]),
  getMyAppointment
);

export default router;
