import User from "../models/UserSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ).select("-password");

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: true, message: "Failed to update" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    await User.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Successfully Deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: true, message: "Failed to Delete" });
  }
};

export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({ success: true, message: "User Found", data: user });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: true, message: "Failed to update" });
  }
};

export const allUser = async (req, res) => {
  try {
    const users = await User.find({}).select("-password");

    res.status(200).json({ success: true, message: "User Found", data: users });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: true, message: "No User Found" });
  }
};
