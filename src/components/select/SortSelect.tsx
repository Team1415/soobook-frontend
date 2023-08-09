import { get } from 'lodash-es';
import { useTranslation } from 'react-i18next';

import { SortSelectBox, StyledSelect } from '@components/select/SortSelect.style';
import { BookSort } from '@constants/sort';

const SortSelect = () => {
  const { t } = useTranslation();

  return (
    <SortSelectBox>
      <StyledSelect defaultValue={BookSort.RELATIVE}>
        {Object.keys(BookSort).map((key: string, index) => (
          <option key={`${key}_${index}`} value={get(BookSort, key)}>
            {t(`common.label.sort.${key}`)}
          </option>
        ))}
      </StyledSelect>
    </SortSelectBox>
  );
};

export default SortSelect;
