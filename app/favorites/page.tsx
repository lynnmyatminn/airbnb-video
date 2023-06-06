// 'use client';
import getCurrentUser from '../actions/getCurrentUser';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import getFavorites from '../actions/getFavorites';
import FavoritesClient from './FavoritesClient';

const FavoritePage = async () => {
  const favorites = await getFavorites();
  const currentUser = await getCurrentUser();
  if (favorites.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title='No favorites found!'
          subtitle='Looks like you have no favorites'
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoritesClient favorites={favorites} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default FavoritePage;
