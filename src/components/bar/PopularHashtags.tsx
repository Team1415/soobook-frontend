import { Stack } from '@mui/material';
import { slice } from 'lodash-es';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { PopularBox, PopularHashtagBox, PopularItem } from '@components/bar/PopularHashtags.style';
import { Hashtag } from '@models/hashtag';
import { useHashtagSearchConditionStore } from '@stores/useHashtagSearchConditionStore';

const MAX_HASHTAG_COUNT = 3;

interface PopularHashtagsProps {
  hashtags?: Hashtag[];
}

const PopularHashtags = (props: PopularHashtagsProps) => {
  const { hashtags = [] } = props;

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setHashtagSearchConditions } = useHashtagSearchConditionStore();

  return (
    <PopularHashtagBox>
      <PopularBox>{t('home-page.label.popular')}</PopularBox>
      <Stack direction='row'>
        {slice(hashtags, 0, MAX_HASHTAG_COUNT).map((hashtag, index) => (
          <PopularItem
            key={`${hashtag.name}_${index}`}
            onClick={() => {
              navigate('/search');
              setHashtagSearchConditions([hashtag]);
            }}
          >
            {`#${hashtag.name}`}
          </PopularItem>
        ))}
      </Stack>
    </PopularHashtagBox>
  );
};

export default PopularHashtags;
