import Github from 'next-auth/providers/github';
import DiscordProvider from 'next-auth/providers/discord';

import type { NextAuthConfig } from 'next-auth';

export default {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig;
