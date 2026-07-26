import { NextResponse } from "next/server";
import { getSkillById } from "@/lib/skills";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const skill = getSkillById(id);

  if (!skill) {
    return NextResponse.json(
      { success: false, message: "Skill not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: skill,
  });
}
