import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function DELETE(
  _request: Request,
  { params }: Props
) {
  try {
    const { id } = await params;
    const skillId = Number(id);

    await prisma.skill.delete({
      where: {
        id: skillId,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to delete skill" },
      { status: 500 }
    );
  }
}
