import products from "../Data"
import { type NextRequest, NextResponse } from "next/server"

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get("query");

    const data = query ? products.filter(item => item.id == parseInt(query)) : products;

    return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const newProduct: Product = {
        id: products.length + 1,
        name: body.name || "Unnamed Product", // Fallback if name is not provided
        price: body.price || 0, // Default price
        category: body.category || "Uncategorized", // Default category
    };

    products.push(newProduct);

    return NextResponse.json(newProduct);
}
