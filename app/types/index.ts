import { Listing, User } from '@prisma/client';

export type SafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'emailVerified'
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
  // createdAt: createdAt.toISOString();
  //     updatedAt: updatedAt.toISOString();
  //     emailVerified: emailVerified?.toISOString();
};

export type SafeListing = Omit<Listing, 'createdAt'> & {
  createdAt: string;
};
