import express from "express";
import {
  allUser,
  deleteUser,
  getSingleUser,
  updateUser,
} from "../controllers/user.js";
import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();
router.put("/:id", authenticate, restrict(["patient"]), updateUser);
router.delete("/:id", authenticate, restrict(["patient"]), deleteUser);
router.get("/:id", authenticate, restrict(["patient"]), getSingleUser);
router.get("/", authenticate, restrict(["admin"]), allUser);

export default router;
