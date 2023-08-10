// import "@/utils/database";
import connectDB from "@/utils/database";
import { BeansModel } from "@/utils/schemaModels";
const createBeans = async (req, res) => {
  try {
    await connectDB();
    console.log(req.body.title);
    console.log(req.body);
    await BeansModel.create(req.body);
    return res.status(200).json({ message: "アイテム作成成功" });
  } catch (err) {
    return res.status(400).json({ message: "アイテム作成失敗" });
  }
};

export default createBeans;
