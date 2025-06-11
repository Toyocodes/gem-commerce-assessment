// types/next.d.ts
import 'next';
import { NextApiRequest } from 'next';

declare module 'next' {
  interface NextApiRequest {
    file?: Express.Multer.File; // Extend the request type to include 'file'
  }
}