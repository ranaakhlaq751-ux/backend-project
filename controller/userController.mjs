
import User from "../Models/User.mjs";

// GET: Fetch all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password -tokens");

        res.send({
            message: "Data fetched successfully",
            data: users
        });

    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};

// POST: Register user
export const registerUser = async (req, res) => {
    try {
        const user = new User(req.body);

        await user.save();

        res.status(201).send({
            message: "User registered successfully!"
        });

    } catch (e) {
        res.status(400).send({
            message: e.message
        });
    }
};

// POST: Login user
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).send({
                message: "User not found"
            });
        }

        const isCorrect = await user.comparepassword(password);

        if (!isCorrect) {
            return res.status(401).send({
                message: "Invalid email or password"
            });
        }

        // Generate token
        const token = user.generateToken();

        user.tokens.push(token);

        await user.save();

        res.send({
            message: "User logged in successfully!",
            token
        });

    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};

// PUT: Logout user
export const logoutUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.userId, {
            $pull: {
                tokens: req.tokenToRemove
            }
        });

        res.send({
            message: "Logged out successfully"
        });

    } catch (e) {
        res.status(500).send({
            message: e.message
        });
    }
};
