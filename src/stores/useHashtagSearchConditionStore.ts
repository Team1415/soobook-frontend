import { create } from 'zustand';

import { Hashtag } from '@models/hashtag';

interface HashtagSearchConditionState {
  hashtagSearchConditions: Hashtag[];
  limitCountOfHashtag: number;
  disableHashtagAutocomplete: boolean;
  setHashtagSearchConditions: (param: Hashtag[]) => void;
  initializeHashtagSearchConditions: () => void;
}

export const useHashtagSearchConditionStore = create<HashtagSearchConditionState>((set) => ({
  hashtagSearchConditions: [],
  limitCountOfHashtag: 5,
  disableHashtagAutocomplete: false,
  setHashtagSearchConditions: (param: Hashtag[]) =>
    set((state: HashtagSearchConditionState) => ({
      hashtagSearchConditions: [...param],
      disableHashtagAutocomplete: param.length >= state.limitCountOfHashtag,
    })),
  initializeHashtagSearchConditions: () =>
    set(() => ({
      hashtagSearchConditions: [],
      disableHashtagAutocomplete: false,
    })),
}));
