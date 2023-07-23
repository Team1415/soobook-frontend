import { useState } from 'react';

import {
  Autocomplete,
  AutocompleteRenderGetTagProps,
  AutocompleteRenderInputParams,
  Chip,
  Stack,
  TextField,
} from '@mui/material';

import { ReactComponent as SearchIcon } from '@assets/search-icon.svg';

interface CustomAutocompleteProps<T> {
  options: T[];
  limitOptionCount?: number;
  onChange?: (newValue: T[]) => void;
}

interface Option {
  code: string | number;
  label: string;
}

const CustomAutocomplete = <T extends Option>(props: CustomAutocompleteProps<T>) => {
  const { options, limitOptionCount = 3, onChange } = props;

  const [disable, setDisable] = useState(false);

  const onChangeAutocomplete = (event: unknown, value: T[]) => {
    if (value.length >= limitOptionCount) {
      setDisable(true);
    } else {
      setDisable(false);
    }
    onChange?.(value);
  };

  return (
    <Autocomplete
      size="small"
      multiple={true}
      disabled={disable}
      disableClearable={true}
      getOptionDisabled={() => disable}
      options={options}
      filterSelectedOptions={true}
      autoHighlight={true}
      getOptionLabel={(option: T) => option.label}
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
      renderTags={(tags: T[], getTagProps: AutocompleteRenderGetTagProps) =>
        tags.map((tag, index) => (
          <Chip
            label={tag.label}
            size="small"
            {...getTagProps({ index })}
            style={{
              maxWidth: '100px',
              fontSize: '11px',
            }}
            key={`${tag.label}_${index}`}
            disabled={false}
          />
        ))
      }
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
            placeholder={disable ? '최대 3개까지 입력 가능합니다' : '키워드를 검색하세요'}
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
  );
};
export default CustomAutocomplete;
