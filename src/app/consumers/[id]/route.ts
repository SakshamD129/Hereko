import products from "@/app/Data";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const product = products.filter(item => item.id === parseInt(id));
    return Response.json(product);
}