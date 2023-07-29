import { Autocomplete, AutocompleteRenderInputParams } from '@mui/material';
import { filter, isEmpty } from 'lodash-es';
import { useTranslation } from 'react-i18next';

import {
  HashtagAutocompleteBox,
  HashtagBadgeBox,
  HashtagTextFieldStack,
  StyledSearchIcon,
  StyledTextField,
} from '@components/autocomplete/HashtagAutocomplete.style';
import HashtagBadge from '@components/badge/HashtagBadge';
import { Hashtag } from '@models/hashtag';
import { useHashtagSearchConditionStore } from '@stores/useHashtagSearchConditionStore';

interface HashtagAutocompleteProps {
  hashtags: Hashtag[];
}

const HashtagAutocomplete = (props: HashtagAutocompleteProps) => {
  const { hashtags } = props;

  const { t } = useTranslation();
  const {
    hashtagSearchConditions,
    limitCountOfHashtag,
    disableHashtagAutocomplete,
    setHashtagSearchConditions,
  } = useHashtagSearchConditionStore();

  const onChangeAutocomplete = (event: unknown, value: Hashtag[]) => {
    setHashtagSearchConditions(value);
  };

  return (
    <>
      <HashtagBadgeBox show={!isEmpty(hashtagSearchConditions)}>
        {hashtagSearchConditions.map((tag, index) => (
          <HashtagBadge
            key={`${tag.label}_${index}`}
            type="delete"
            name={tag.label}
            onDelete={() =>
              setHashtagSearchConditions(
                filter(hashtagSearchConditions, (hashtag: Hashtag) => hashtag.code !== tag.code),
              )
            }
          />
        ))}
      </HashtagBadgeBox>
      <HashtagAutocompleteBox>
        <Autocomplete
          size="small"
          multiple={true}
          disabled={disableHashtagAutocomplete}
          disableClearable={true}
          getOptionDisabled={() => disableHashtagAutocomplete}
          options={hashtags}
          value={hashtagSearchConditions}
          filterSelectedOptions={true}
          autoHighlight={true}
          getOptionLabel={(option) => option.label}
          noOptionsText={t('search-page.message.no-option')}
          popupIcon=""
          renderTags={() => null}
          renderInput={(params: AutocompleteRenderInputParams) => (
            <HashtagTextFieldStack direction="row" alignItems="center">
              <StyledSearchIcon />
              <StyledTextField
                {...params}
                size="small"
                placeholder={
                  disableHashtagAutocomplete
                    ? t('search-page.message.disable-autocomplete', { count: limitCountOfHashtag })
                    : t('search-page.message.placeholder')
                }
              />
            </HashtagTextFieldStack>
          )}
          onChange={onChangeAutocomplete}
        />
      </HashtagAutocompleteBox>
    </>
  );
};
export default HashtagAutocomplete;
