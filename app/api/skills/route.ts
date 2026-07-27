import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ownerAddress = searchParams.get("ownerAddress");

  try {
    const skills = await prisma.skill.findMany({
      where: ownerAddress
        ? { ownerAddress }
        : undefined,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(skills);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch skills" },
      { status: 500 }
    );
  }
}
