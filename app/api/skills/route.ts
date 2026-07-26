import { NextResponse } from "next/server";
import { getAllSkills } from "@/lib/skills";

export async function GET() {
  return NextResponse.json({
    success: true,
    total: getAllSkills().length,
    data: getAllSkills(),
  });
}
