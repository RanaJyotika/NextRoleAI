import { inngest } from "./client";
import prisma from "@/lib/prisma"; // or wherever your Prisma is

export const generateIndustryInsights = inngest.createFunction(
  { id: "generate-industry-insights" },
  { event: "insights/generate" },
  async ({ event, step }) => {
    // ✅ all Prisma or DB calls should be here
    const data = await prisma.user.findMany();
    return { success: true };
  }
);
