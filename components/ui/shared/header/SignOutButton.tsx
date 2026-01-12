"use client";

import { signOut } from "next-auth/react";
import { Button } from "../../button";

export default function SignOutButton() {
  return (
    <Button
      className="w-full py-4 px-2 h-4 justify-start cursor-pointer"
      variant="ghost"
      onClick={() => signOut({ redirectTo: "/" })}
    >
      Sign Out
    </Button>
  );
}
