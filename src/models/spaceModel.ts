import mongoose, { Schema } from 'mongoose';

const SpaceSchema: Schema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    age: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ISpace>('Space', SpaceSchema);
