import { NextResponse } from "next/server";
import { getAllSkills } from "@/lib/skills";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = Number(searchParams.get("page") ?? 1);
  const limit = Number(searchParams.get("limit") ?? 12);

  const skills = getAllSkills();

  const start = (page - 1) * limit;
  const end = start + limit;

  return NextResponse.json({
    success: true,
    total: skills.length,
    page,
    limit,
    totalPages: Math.ceil(skills.length / limit),
    data: skills.slice(start, end),
  });
}
