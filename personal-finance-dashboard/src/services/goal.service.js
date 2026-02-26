import * as goalRepo from "../repositories/goal.repository.js";
import { calculateDaysRemaining } from "../utils/dateHelpers.js";

export const createGoal = async (userId, data) => {

  return await goalRepo.insertGoal(userId, data);

};

export const getGoals = async (userId) => {

  const goals = await goalRepo.getGoalsByUserId(userId);

  return goals.map((goal) => {

    const percentage =
      (goal.saved_amount / goal.target_amount) * 100;

    return {
      ...goal,
      percentage: Math.min(percentage, 100),

      daysRemaining:
        calculateDaysRemaining(goal.deadline),

      status:
        percentage >= 100
          ? "completed"
          : percentage < 50
          ? "behind"
          : "on_track",
    };

  });

};

export const updateGoalProgress = async (
  userId,
  goalId,
  savedAmount
) => {

  return await goalRepo.updateGoalSavedAmount(
    userId,
    goalId,
    savedAmount
  );

};

export const deleteGoal = async (userId, goalId) => {

  return await goalRepo.deleteGoal(userId, goalId);

};