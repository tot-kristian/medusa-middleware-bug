import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  console.log("GET endpoint")
  res.json({ok: true});
}

export const AUTHENTICATE = false;
