const Questions = require("../models/questionUpload.model");

const addQuestion = (req, res) => {
  const question = req.body.question;
  
  const newQuestion = new Questions({
    ...req.body,
  });
  
  Questions.findOne({ question }, async (err, que) => {

    if (que) {
      res.status(201).json({ message: "Question already exist" });
      return;
    } else if (
      !req.body.question ||
      !req.body.total_marks ||
      !req.body.skill_tag ||
      !req.body.sub_tag ||
      !req.body.tag_level
    ) {
      return res.json({ message: "Please fill all the details",data:req.body });
    } else {
      try {
        const val = await newQuestion.save();
        res.status(200).json({message:"question uploaded successfully",status:"done"});
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  });

};

module.exports = { addQuestion };
