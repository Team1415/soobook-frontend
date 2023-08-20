import { ChangeEvent } from 'react';

import { get, lowerCase } from 'lodash-es';
import { useTranslation } from 'react-i18next';

import { SortSelectBox, StyledSelect } from '@components/select/SortSelect.style';
import { BookSort } from '@constants/sort';
import { useHashtagSearchConditionStore } from '@stores/useHashtagSearchConditionStore';

const SortSelect = () => {
  const { sort, setSort } = useHashtagSearchConditionStore();

  const { t } = useTranslation();

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'new') {
      setSort(BookSort.NEW);
    }

    if (e.target.value === 'popular') {
      setSort(BookSort.POPULAR);
    }
  };

  return (
    <SortSelectBox>
      <StyledSelect defaultValue={sort} onChange={onChange}>
        {Object.keys(BookSort).map((key: string, index) => (
          <option key={`${key}_${index}`} value={get(BookSort, key)}>
            {t(`common.label.sort.${lowerCase(key)}`)}
          </option>
        ))}
      </StyledSelect>
    </SortSelectBox>
  );
};

export default SortSelect;
