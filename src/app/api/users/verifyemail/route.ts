import { connect } from "@/dbConfig/dbConfig";
import { NextResponse, NextRequest } from "next/server";
import User from "@/models/userModel";

connect();

export default async function (request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { token } = reqBody;

    User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
