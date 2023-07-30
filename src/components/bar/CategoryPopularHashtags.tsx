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
          {hashtags.map((hashtag, index) => (
            <HashtagBadge
              key={`${hashtag.label}_${index}`}
              type="outlined"
              name={hashtag.label}
              onClick={() => setHashtagSearchConditions([hashtag])}
            />
          ))}
        </HashtagBadgeBox>
      </HashtagBox>
    </CategoryPopularHashtagsBox>
  );
};

export default CategoryPopularHashtags;
