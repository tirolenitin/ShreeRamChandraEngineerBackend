import express from "express";

import adminRoute from "./adminRoutes.js";

const router = express.Router();

router.use("/admin", adminRoute);

export default router;
