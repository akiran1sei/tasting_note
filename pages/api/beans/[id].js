import connectDB from "@/utils/database";
import { BeansModel } from "@/utils/schemaModels";

const getSingleBeans = async (req, res) => {
  try {
    await connectDB();

    const singleBeans = await BeansModel.findById(req.query.id);
    return res.status(200).json({
      message: "アイテム読み取り成功（シングル）",
      singleBeans: singleBeans,
    });
  } catch (err) {
    return res
      .status(400)
      .json({ message: "アイテム読み取り失敗（シングル）" });
  }
};

export default getSingleBeans;
