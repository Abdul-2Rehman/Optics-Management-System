import { Schema, model } from "mongoose";
import validator from "validator";

const accountSchema = new Schema(
  {
    accountName: {
      type: String,
      trim: true,
      required: [true, "Account Name is required"],
      maxlength: [50, "Name cannot be more than 50 characters"],
    },
    accountNumber: {
      type: String,
      required: [true, "Number is required"],
    },
  },
  {
    timestamps: true,
  }
);

export const Owner = model("Owner", accountSchema);
