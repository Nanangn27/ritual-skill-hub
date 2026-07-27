import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const skill = await prisma.skill.create({
      data: {
        title: body.title,
        description: body.description,
        repository: body.repository || null,
        documentation: body.documentation || null,
        ownerAddress: body.ownerAddress || null,
      },
    });

    return NextResponse.json(skill);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to publish skill",
        message: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
