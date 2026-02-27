import authService from "../services/auth.service.js";

const signup = async (req, res) => {

    try {

        const user = await authService.signup(req.body);

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
        });

    } catch (error) {

        res.status(400).json({
            success: false,
            message: error.message
        });

    }

};

const login = async (req, res) => {

    try {

        const result = await authService.login(req.body);

        res.status(200).json({
            success: true,
            message: "Login successful",
            data: result
        });

    } catch (error) {

        res.status(401).json({
            success: false,
            message: error.message
        });

    }

};

const getMe = async (req, res) => {
  try {

    // comes from protect middleware
    const userId = req.user.id;

    const user = await authService.getLoggedInUser(userId);

    res.json({
      success: true,
      user,
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};



export { signup, login,getMe };