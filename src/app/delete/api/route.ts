import { NextRequest, NextResponse } from "next/server";
import items from '../../Items.js';
export async function GET(request: NextRequest) {
    const a = request.nextUrl.searchParams.get("id");
    const response = items.filter(item => item.productId == a);
    return NextResponse.json(response);
};