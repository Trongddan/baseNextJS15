// types/next-auth.d.ts
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from "next-auth";
declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      accessToken?: string; // 👈 Thêm accessToken ở đây
    };
  }

  interface User {
    accessToken?: string; // 👈 Nếu bạn thêm accessToken khi signIn
  }
}
