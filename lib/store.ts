import { create } from 'zustand';

export const LOCAL_STORAGE_KEY_LIKED = 'liked';
export const LOCAL_STORAGE_KEY_DISLIKED = 'disliked';

type CircreteStore = {
  liked: Set<number>;
  disliked: Set<number>;
  _updateLiked: (liked: Set<number>) => void;
  _updateDisliked: (disliked: Set<number>) => void;
  addLiked: (liked: number) => void;
  addDisliked: (disliked: number) => void;
  removeLiked: (liked: number) => void;
  removeDisliked: (disliked: number) => void;
};

export const useCircreteStore = create<CircreteStore>((set, get) => ({
  liked: new Set(),
  disliked: new Set(),
  _updateLiked: (liked) => {
    set(() => ({ liked }));
    localStorage.setItem(LOCAL_STORAGE_KEY_LIKED, JSON.stringify([...liked.values()]));
  },
  _updateDisliked: (disliked) => {
    set(() => ({ disliked }));
    localStorage.setItem(LOCAL_STORAGE_KEY_DISLIKED, JSON.stringify([...disliked.values()]));
  },
  addLiked: (liked) => get()._updateLiked(new Set([...get().liked, liked])),
  addDisliked: (disliked) => get()._updateDisliked(new Set([...get().disliked, disliked])),
  removeLiked: (liked) => get()._updateLiked(new Set([...get().liked, liked])),
  removeDisliked: (disliked) => get()._updateDisliked(new Set([...get().disliked, disliked]))
}));
