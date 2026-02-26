
import { getInsights } from "../services/insights.service.js";

export const fetchInsights = async (req, res, next) => {
  try {
    const data = await getInsights(req.user.id);
    res.json(data);
  } catch (err) {
    next(err);
  }
};