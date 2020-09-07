// https://strapi.io/documentation/3.0.0-beta.x/guides/auth-request.html#setup
// https://strapi.io/blog/nextjs-react-hooks-strapi-auth-4
// https://flaviocopes.com/nextjs-cookies/
// https://medium.com/@enetoOlveda/how-to-use-axios-typescript-like-a-pro-7c882f71e34a

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1338/graphql';

console.log(API_URL);

export const Login = () => {
  if (typeof window === 'undefined') {
    console.log('Server login!');
  }
  return 'Logging in ...';
};

export const Register = () => {};

export const Logout = () => {};
