import { IResolvers } from 'apollo-server-express';
import { Database } from '../../../lib/types';
import { ObjectId } from 'mongodb';
import { Listing } from '../../../lib/types';

export const listingResolvers: IResolvers = {
  Query: {
    listings: async (
      _root: undefined,
      args: {},
      { db }: { db: Database }
    ): Promise<Listing[]> => {
      return await db.listings.find({}).toArray();
    }
  },
  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      const deleteRes = await db.listings.findOneAndDelete({
        _id: new ObjectId(id)
      });

      if (!deleteRes.value) {
        throw new Error('failed to delete listing');
      }

      return deleteRes.value;
    }
  },
  Listing: {
    id: (listing: Listing): string => listing._id.toString()
  }
};
