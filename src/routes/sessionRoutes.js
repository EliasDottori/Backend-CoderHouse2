import { Router } from "express";
import passport from "../config/passport.js";
import { loginUser } from "../controllers/sessionController.js";

const router = Router();

router.post("/login", loginUser);
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

export default router;
