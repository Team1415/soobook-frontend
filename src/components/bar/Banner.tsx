import { ReactComponent as Car } from '@assets/car.svg';
import {
  BannerBox,
  BoldTypography,
  StyledTypography,
  SvgBox,
  TypoBox,
  TypoTopBox,
} from '@components/bar/Banner.style';

const Banner = () => {
  return (
    <BannerBox>
      <TypoBox>
        <TypoTopBox>
          <BoldTypography>수북으로 10권 완독</BoldTypography>
          <StyledTypography>하고</StyledTypography>
        </TypoTopBox>
        <StyledTypography>드림카 받아가세요</StyledTypography>
      </TypoBox>
      <SvgBox>
        <Car />
      </SvgBox>
    </BannerBox>
  );
};

export default Banner;
