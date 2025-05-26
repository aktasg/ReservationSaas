import mongoose from 'mongoose';

export interface IEmployee extends mongoose.Document {
  name: string;
  email: string;
  phone: string;
  position: string;
  businessId: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const employeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'İsim alanı zorunludur'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'E-posta alanı zorunludur'],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Geçerli bir e-posta adresi giriniz'],
    },
    phone: {
      type: String,
      required: [true, 'Telefon alanı zorunludur'],
      trim: true,
    },
    position: {
      type: String,
      required: [true, 'Pozisyon alanı zorunludur'],
      trim: true,
    },
    businessId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IEmployee>('Employee', employeeSchema); 