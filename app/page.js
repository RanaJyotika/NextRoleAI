import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center">
      <div className="text-4xl font-bold text-gray-800 mb-4 h-screen w-full flex flex-col gap-5 items-center justify-center">
        NextRoleAI
        <br />
        <Button>Get Started</Button>
        </div>
    </div>
  );
}
