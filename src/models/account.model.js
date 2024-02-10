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
    accountType: {
      type: String,
      required: [true, "Account Type is required"],
      enum: ["customer", "vender", "expense"],
    },
  },
  {
    timestamps: true,
  }
);

export const Account = model("Account", accountSchema);
