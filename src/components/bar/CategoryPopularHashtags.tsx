import { slice } from 'lodash-es';
import { useTranslation } from 'react-i18next';

import HashtagBadge from '@components/badge/HashtagBadge';
import {
  CategoryPopularHashtagsBox,
  CategoryTypography,
  HashtagBadgeBox,
  HashtagBox,
} from '@components/bar/CategoryPopularHashtags.style';
import { Hashtag } from '@models/hashtag';
import { useHashtagSearchConditionStore } from '@stores/useHashtagSearchConditionStore';

const MAX_HASHTAG_COUNT = 10;

interface CategoryPopularHashtagsProps {
  category: string;
  hashtags: Hashtag[];
}

const CategoryPopularHashtags = (props: CategoryPopularHashtagsProps) => {
  const { category, hashtags } = props;

  const { t } = useTranslation();
  const { setHashtagSearchConditions } = useHashtagSearchConditionStore();

  return (
    <CategoryPopularHashtagsBox>
      <HashtagBox>
        <CategoryTypography>
          {t('search-page.label.category-popular-hashtag', { name: category })}
        </CategoryTypography>
        <HashtagBadgeBox>
          {slice(hashtags, 0, MAX_HASHTAG_COUNT).map((hashtag, index) => (
            <HashtagBadge
              key={`${hashtag.name}_${index}`}
              type='outlined'
              name={hashtag.name}
              onClick={() => setHashtagSearchConditions([hashtag])}
            />
          ))}
        </HashtagBadgeBox>
      </HashtagBox>
    </CategoryPopularHashtagsBox>
  );
};

export default CategoryPopularHashtags;
