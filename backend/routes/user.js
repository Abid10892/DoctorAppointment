import express from "express";
import {
  allUser,
  deleteUser,
  getSingleUser,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/:id", getSingleUser);
router.get("/", allUser);

export default router;
