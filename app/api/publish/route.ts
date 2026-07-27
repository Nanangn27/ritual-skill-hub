import { NextResponse } from "next/server";

const skills: any[] = [];

export async function POST(req: Request) {
  const body = await req.json();

  const skill = {
    id: Date.now(),
    ...body,
    createdAt: new Date().toISOString(),
  };

  skills.push(skill);

  return NextResponse.json({
    success: true,
    skill,
  });
}

export async function GET() {
  return NextResponse.json(skills);
}
