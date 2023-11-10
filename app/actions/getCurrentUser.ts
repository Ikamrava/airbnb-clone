import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import psisma from "@/app/libs/prismaDb"

export async function getSession() {
  const session = await getServerSession(authOptions);
  return session;
}

export default async function getCurrentUser() {
    try {
        const session = await getSession();
        const currentUser = await psisma.user.findUnique({
            where: {
                email: session?.user?.email as string
            }
        })
        if (!currentUser) return null;
        return currentUser;
        
    } catch (error: any) {
        return null
    }
}