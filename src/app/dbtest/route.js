import clientPromise from "../../../libs/mongo";
import { NextResponse } from "next/server";
export async function GET(request) {
    const a = request.nextUrl.searchParams.get("value");
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const usersCollection = db.collection('users');
    if (a) {
        const users = await usersCollection.find({ name: { $regex: a, $options: "i" } }).sort({ name: 1 }).limit(20).toArray();
        return NextResponse.json(users)
    }

    const users = await usersCollection.find({}).limit(20).sort({ name: 1 }).toArray();
    return NextResponse.json(users);
}
export async function POST(request) {
    const response = await request.json();
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const usersCollection = db.collection('users');
    const users = await usersCollection.insertOne({ name: response.name, email: response.name });
    return NextResponse.json({ success: true, user: users });
}
