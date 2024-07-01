import { redirect } from "next/navigation";

/**
 * The root homepage has not been implemented in the case study.
 * This would reflect "https://www.manual.co/" page.
 */
export default function Home() {
  redirect("/hairloss");
}
