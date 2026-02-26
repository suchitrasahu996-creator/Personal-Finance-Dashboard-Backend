import * as goalService from "../services/goal.service.js";

export const createGoal = async (req, res) => {
  try {
    const userId = req.user.id;
    const goalData = req.body;

    const goal = await goalService.createGoal(userId, goalData);

    res.status(201).json({
      success: true,
      data: goal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getGoals = async (req, res) => {
  try {
    const userId = req.user.id;

    const goals = await goalService.getGoals(userId);

    res.status(200).json({
      success: true,
      data: goals,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateGoalProgress = async (req, res) => {
  try {
    const userId = req.user.id;
    const goalId = req.params.id;
    const { saved_amount } = req.body;

    const goal = await goalService.updateGoalProgress(
      userId,
      goalId,
      saved_amount
    );

    res.status(200).json({
      success: true,
      data: goal,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteGoal = async (req, res) => {
  try {
    const userId = req.user.id;
    const goalId = req.params.id;

    await goalService.deleteGoal(userId, goalId);

    res.status(200).json({
      success: true,
      message: "Goal deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};