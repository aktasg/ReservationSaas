import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  role: 'super-admin' | 'business-admin' | 'user';
  businessName?: string;
  businessAddress?: string;
  businessPhone?: string;
  businessEmail?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'İsim alanı zorunludur'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'E-posta alanı zorunludur'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Geçerli bir e-posta adresi giriniz'],
    },
    password: {
      type: String,
      required: [true, 'Şifre alanı zorunludur'],
      minlength: [6, 'Şifre en az 6 karakter olmalıdır'],
    },
    role: {
      type: String,
      enum: ['super-admin', 'business-admin', 'user'],
      default: 'business-admin',
    },
    businessName: {
      type: String,
      required: function() {
        return this.role === 'business-admin';
      },
      trim: true,
    },
    businessAddress: {
      type: String,
      trim: true,
    },
    businessPhone: {
      type: String,
      trim: true,
    },
    businessEmail: {
      type: String,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, 'Geçerli bir e-posta adresi giriniz'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Şifreyi hashleme
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error: any) {
    next(error);
  }
});

// Şifre karşılaştırma metodu
userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model<IUser>('User', userSchema); 