import CustomAutocomplete from '@components/autocomplete/CustomAutocomplete';
import { HashtagAutocompleteBox } from '@components/autocomplete/HashtagAutocomplete.style';
import { Hashtag } from '@models/hashtag';

interface HashtagAutocompleteProps {
  hashtags: Hashtag[];
}

const HashtagAutocomplete = (props: HashtagAutocompleteProps) => {
  const { hashtags } = props;

  return (
    <HashtagAutocompleteBox>
      <CustomAutocomplete options={hashtags} />
    </HashtagAutocompleteBox>
  );
};

export default HashtagAutocomplete;
