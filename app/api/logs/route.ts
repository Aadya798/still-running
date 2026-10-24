import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import dns from 'node:dns/promises';
dns.setServers(['8.8.8.8', '8.8.4.4']);
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is missing in .env.local");
  }
  await mongoose.connect(process.env.MONGODB_URI as string);
};

const LogSchema = new mongoose.Schema({
  mood: Number,
  distance: Number,
  note: String,
  date: { type: Date, default: Date.now },
});
const Log = mongoose.models.Log || mongoose.model('Log', LogSchema);

export async function GET() {
  try {
    await connectDB();
    const logs = await Log.find().sort({ date: -1 });
    return NextResponse.json(logs);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const newLog = await Log.create(body);
    return NextResponse.json(newLog, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}