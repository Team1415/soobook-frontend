import { useEffect, useRef } from 'react';

import { Autocomplete, AutocompleteRenderInputParams } from '@mui/material';
import { filter, isEmpty } from 'lodash-es';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

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
  type: 'home' | 'search';
  hashtags?: Hashtag[];
}

const HashtagAutocomplete = (props: HashtagAutocompleteProps) => {
  const { type, hashtags = [] } = props;

  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    hashtagSearchConditions,
    limitCountOfHashtag,
    disableHashtagAutocomplete,
    setHashtagSearchConditions,
    initializeHashtagSearchConditions,
  } = useHashtagSearchConditionStore();

  const hashtagAutocompleteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (type === 'home') {
      initializeHashtagSearchConditions();
    }
  }, []);

  const onChangeAutocomplete = (event: unknown, value: Hashtag[]) => {
    setHashtagSearchConditions(value);
  };

  return (
    <>
      <HashtagBadgeBox show={!isEmpty(hashtagSearchConditions)}>
        {hashtagSearchConditions.map((tag, index) => (
          <HashtagBadge
            key={`${tag.name}_${index}`}
            type='delete'
            name={tag.name}
            onDelete={() =>
              setHashtagSearchConditions(
                filter(hashtagSearchConditions, (hashtag: Hashtag) => hashtag.id !== tag.id),
              )
            }
          />
        ))}
      </HashtagBadgeBox>
      <HashtagAutocompleteBox
        onClick={() => {
          if (type === 'home') {
            navigate('/search', {
              state: { height: hashtagAutocompleteRef.current?.getBoundingClientRect().top },
            });
          }
        }}
      >
        <Autocomplete
          ref={hashtagAutocompleteRef}
          size='small'
          multiple={true}
          disabled={type === 'home' || disableHashtagAutocomplete}
          disableClearable={true}
          getOptionDisabled={() => disableHashtagAutocomplete}
          options={hashtags}
          value={hashtagSearchConditions}
          filterSelectedOptions={true}
          autoHighlight={true}
          getOptionLabel={(option) => option.name}
          noOptionsText={t('search-page.message.no-option')}
          popupIcon=''
          isOptionEqualToValue={(option: Hashtag, value: Hashtag) => option.id === value.id}
          renderTags={() => null}
          renderInput={(params: AutocompleteRenderInputParams) => (
            <HashtagTextFieldStack
              direction='row'
              alignItems='center'
              sx={{ cursor: type === 'home' ? 'pointer' : undefined }}
            >
              <StyledSearchIcon />
              <StyledTextField
                {...params}
                size='small'
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
