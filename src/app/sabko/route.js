import items from "../Items"
import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json(items);
}