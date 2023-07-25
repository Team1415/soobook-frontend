import { Autocomplete, AutocompleteRenderInputParams, Stack, TextField } from '@mui/material';
import { filter, isEmpty } from 'lodash-es';

import { ReactComponent as SearchIcon } from '@assets/search-icon.svg';
import { HashtagAutocompleteBox, HashtagBadgeBox } from '@components/autocomplete/HashtagAutocomplete.style';
import HashtagBadge from '@components/badge/HashtagBadge';
import { Hashtag } from '@models/hashtag';
import { useHashtagSearchConditionStore } from '@stores/useHashtagSearchConditionStore';

interface HashtagAutocompleteProps {
  hashtags: Hashtag[];
}

const HashtagAutocomplete = (props: HashtagAutocompleteProps) => {
  const { hashtags } = props;

  const { hashtagSearchConditions, disableHashtagAutocomplete, setHashtagSearchConditions } =
    useHashtagSearchConditionStore();

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
          noOptionsText="해당하는 키워드가 없습니다. 다시 검색해주세요."
          popupIcon=""
          ListboxProps={{
            style: {
              maxHeight: '200px',
              fontSize: '12px',
            },
            sx: {
              '& .MuiAutocomplete-option': {
                borderBottom: '0.1px dashed rgba(159, 159, 159, 0.3)',
                minHeight: '30px',
                display: 'block',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
            },
          }}
          renderTags={() => null}
          renderInput={(params: AutocompleteRenderInputParams) => (
            <Stack
              direction="row"
              alignItems="center"
              style={{
                borderRadius: '4px',
                height: '44px',
                width: '100%',
                backgroundColor: '#f2f2f2',
              }}
            >
              <SearchIcon style={{ height: '16px', width: '16px', marginLeft: '12px' }} />
              <TextField
                {...params}
                placeholder={
                  disableHashtagAutocomplete ? '최대 5개까지 입력 가능합니다' : '키워드를 검색하세요'
                }
                size="small"
                sx={{
                  '& fieldset': { border: 'none' },
                  '& .MuiInputBase-root': {
                    color: '#9F9F9F',
                    fontSize: '14px',
                    fontWeight: 400,
                    letterSpacing: '-0.28px',
                  },
                  '& .MuiOutlinedInput-root': {
                    paddingRight: '0px!important',
                  },
                }}
              />
            </Stack>
          )}
          onChange={onChangeAutocomplete}
        />
      </HashtagAutocompleteBox>
    </>
  );
};
export default HashtagAutocomplete;
