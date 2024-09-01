
import contactSchemaModel from "../models/constactSchema.js";

export const save = async (req, res) => {
    const details = req.body;
    const currentDate = new Date();
    const contactDetails = { ...details, info: currentDate };
  
    try {
      await contactSchemaModel.create(contactDetails);
      res.status(201).json({
        status: 201,
        message: "Request successfully submitted",
        success: true
      });
    } catch (error) {
      console.error("Error saving contact details:", error);
      res.status(500).json({
        status: 500,
        message: "Internal server error",
        success: false
      });
    }
  };


export const fetch = async (req, res) => {
  try {
    const messages = await contactSchemaModel.find();
    res.status(200).json({
      status: 200,
      data: messages,
      success: true
    });
  } catch (error) {
    console.error("Error fetching contact details:", error);
    res.status(500).json({
      status: 500,
      message: "Internal server error",
      success: false
    });
  }
};


export const update = async (req, res) => {
    const { condition_obj, content_obj } = req.body;
  
    try {
      const conditions = await contactSchemaModel.find(condition_obj);
      
      if (conditions.length > 0) {
        const updateResult = await contactSchemaModel.updateOne(condition_obj, { $set: content_obj });
  
        if (updateResult.nModified > 0) {
          res.status(200).json({
            status: 200,
            message: "Update successful",
            success: true
          });
        } else {
          res.status(500).json({
            status: 500,
            message: "No documents were updated",
            success: false
          });
        }
      } else {
        res.status(404).json({
          status: 404,
          message: "Message not found",
          success: false
        });
      }
    } catch (error) {
      console.error("Error updating contact details:", error);
      res.status(500).json({
        status: 500,
        message: "Internal server error",
        success: false
      });
    }
  };
  