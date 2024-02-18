import authConfig from './auth/auth.config';
import NextAuth from 'next-auth';
import {
  apiAuthPrefix,
  publicRoutes,
  DEFAULT_LOGIN_REDIRECT,
} from './auth/routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.some(
    (route) =>
      nextUrl.pathname === route ||
      (route.includes('[') &&
        new RegExp(`^${route.replace(/\[.*/, '')}`).test(nextUrl.pathname))
  );

  if (isApiAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callBackUrl = nextUrl.pathname;

    if (nextUrl.search) {
      callBackUrl += nextUrl.search;
    }

    const encodedCallbackUrl = encodeURIComponent(callBackUrl);
    return Response.redirect(
      new URL(`/api/auth/signin?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  return null;
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
