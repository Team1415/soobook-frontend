import { StyledAvartar } from '@components/avartar/SoobookAvartar.style';

interface SoobookAvartarProps {
  name?: string;
}

const SoobookAvartar = (props: SoobookAvartarProps) => {
  const { name } = props;

  return (
    <>
      {name ? (
        <StyledAvartar variant="rounded">{name}</StyledAvartar>
      ) : (
        <StyledAvartar variant="square" src="/src/assets/fallback-user-icon.svg" />
      )}
    </>
  );
};

export default SoobookAvartar;
