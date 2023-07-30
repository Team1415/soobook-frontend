import { useTranslation } from 'react-i18next';

import { SearchResultHeaderBox, TotalTypography } from '@components/header/SearchResultHeader.style';
import SortSelect from '@components/select/SortSelect';

interface SearchResultHeaderProps {
  total?: number;
}

const SearchResultHeader = (props: SearchResultHeaderProps) => {
  const { total = 0 } = props;

  const { t } = useTranslation();

  return (
    <SearchResultHeaderBox>
      <TotalTypography>{t('search-page.label.total', { count: total })}</TotalTypography>
      <SortSelect />
    </SearchResultHeaderBox>
  );
};

export default SearchResultHeader;
