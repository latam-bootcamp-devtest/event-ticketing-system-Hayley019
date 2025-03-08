import { Router } from "express";

const router = Router();

router.get("/Hello", (req, res) => {
  res.send("Hello, World!");
});

export default router;