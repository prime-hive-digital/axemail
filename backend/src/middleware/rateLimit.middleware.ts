import rateLimit from "express-rate-limit";

import { ENV } from "../config/env";

export const globalRateLimiter = rateLimit({
    windowMs: ENV.RATE_LIMIT_WINDOW * 60 * 1000,
    max: ENV.RATE_LIMIT_MAX,
    standardHeaders: true,
    legacyHeaders: false,
});
