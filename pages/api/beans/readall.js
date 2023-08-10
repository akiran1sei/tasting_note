import connectDB from "@/utils/database";
import { BeansModel } from "@/utils/schemaModels";

const getAllItems = async (req, res) => {
  try {
    await connectDB();
    const allItems = await BeansModel.find();
    return res
      .status(200)
      .json({ message: "読み取り成功（オール）", allItems: allItems });
  } catch (err) {
    return res.status(400).json({ message: "読み取り失敗（オール）" });
  }
};
export default getAllItems;
