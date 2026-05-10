import mongoose, { Document, Schema } from "mongoose";

// 1. Interface (Type Definition)
export interface ISession extends Document {
  sessionId: string;
  visitorName: string;
  visitorPage: string;
  country: string;
  lastMessage: string;
  lastMessageTime: Date;
  unreadCount: number;
  isOnline: boolean;
  isBlocked: boolean;
  createdAt: Date;
}

// 2. Schema
const SessionSchema: Schema<ISession> = new Schema({
  sessionId:       { type: String, required: true, unique: true, index: true },
  visitorName:     { type: String, default: "Visitor" },
  visitorPage:     { type: String, default: "/" },
  country:         { type: String, default: "Unknown" },
  lastMessage:     { type: String, default: "" },
  lastMessageTime: { type: Date, default: Date.now },
  unreadCount:     { type: Number, default: 0 },
  isOnline:        { type: Boolean, default: false },
  isBlocked:       { type: Boolean, default: false },
  createdAt:       { type: Date, default: Date.now },
});

// 3. Model
export const Session = mongoose.model<ISession>("Session", SessionSchema);
