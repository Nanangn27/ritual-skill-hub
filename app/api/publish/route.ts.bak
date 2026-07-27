import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const skill = await prisma.skill.create({
      data: {
        title: body.title,
        description: body.description,
        repository: body.repository,
        documentation: body.documentation,
        ownerAddress: body.ownerAddress,
      },
    });

    return NextResponse.json({
      success: true,
      skill,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

export async function GET() {
  const skills = await prisma.skill.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(skills);
}
