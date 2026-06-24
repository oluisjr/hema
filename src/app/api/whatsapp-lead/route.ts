import { NextResponse } from "next/server";
import { z } from "zod";
import { createLead } from "@/lib/db";

const schema = z.object({
  productId: z.string().optional().nullable(),
  message: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const body = schema.parse(await request.json());
    await createLead({ productId: body.productId, message: body.message, source: "whatsapp" });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
