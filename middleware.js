// middleware.js
import { NextResponse } from 'next/server'

export function middleware(request) {
  const BASIC_AUTH_USER = 'user';
  const BASIC_AUTH_PASS = '12345'; // замените на свой пароль

  const authHeader = request.headers.get('authorization');

  if (authHeader) {
    const base64 = authHeader.split(' ')[1];
    const [user, pass] = atob(base64).split(':');

    if (user === BASIC_AUTH_USER && pass === BASIC_AUTH_PASS) {
      return NextResponse.next(); 
    }
  }

  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
