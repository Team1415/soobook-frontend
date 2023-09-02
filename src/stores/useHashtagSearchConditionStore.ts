import { create } from 'zustand';

import { BookSort } from '@constants/sort';
import { Hashtag } from '@models/hashtag';

interface HashtagSearchConditionState {
  hashtagSearchConditions: Hashtag[];
  limitCountOfHashtag: number;
  disableHashtagAutocomplete: boolean;
  sort: BookSort;
  categoryIndex: number;
  setHashtagSearchConditions: (param: Hashtag[]) => void;
  initializeHashtagSearchConditions: () => void;
  setSort: (param: BookSort) => void;
  setCategoryIndex: (param: number) => void;
}

export const useHashtagSearchConditionStore = create<HashtagSearchConditionState>((set) => ({
  hashtagSearchConditions: [],
  limitCountOfHashtag: 5,
  disableHashtagAutocomplete: false,
  sort: BookSort.POPULAR,
  categoryIndex: 1,
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
  setSort: (param: BookSort) => set(() => ({ sort: param })),
  setCategoryIndex: (param: number) => set(() => ({ categoryIndex: param })),
}));
