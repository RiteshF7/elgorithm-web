import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // For now, we'll just accept any user.
        // In a real application, you'd look up the user in a database.
        const user = { id: "1", name: "Test User", email: credentials?.email }
        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ]
})

export { handler as GET, handler as POST }
