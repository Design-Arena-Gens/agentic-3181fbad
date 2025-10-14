import { NextResponse } from "next/server";
import { z } from "zod";

const payloadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please use a valid email."),
  company: z.string().optional().default(""),
  message: z
    .string()
    .min(20, "Share a short brief (at least 20 characters).")
    .max(2000, "Message is too long."),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = payloadSchema.parse(body);

    console.log("[VoltSense contact submitted]", JSON.stringify(data));

    return NextResponse.json(
      {
        success: true,
        received: { name: data.name, email: data.email, company: data.company },
      },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      const firstIssue = error.issues[0]?.message ?? "Validation failed.";
      return NextResponse.json(
        {
          error: firstIssue,
        },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Unable to process request." },
      { status: 500 },
    );
  }
}
