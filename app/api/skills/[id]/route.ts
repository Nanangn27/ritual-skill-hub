import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Props = {
  params: Promise<{ id: string }>;
};

export async function PUT(
  request: Request,
  { params }: Props
) {
  try {
    const { id } = await params;
    const skillId = Number(id);

    const body = await request.json();

    const skill = await prisma.skill.update({
      where: {
        id: skillId,
      },
      data: {
        title: body.title,
        description: body.description,
      },
    });

    return NextResponse.json(skill);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to update skill" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
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
