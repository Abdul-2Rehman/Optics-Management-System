import { Schema, model } from "mongoose";
import validator from "validator";

const companySchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Company Name is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Company = model("Company", companySchema);
