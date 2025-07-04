import React from 'react';
import styled from '@emotion/styled';
import { THEME } from '../../styles/theme';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: string;
}

const HowItWorksContainer = styled.section`
  padding: ${THEME.spacing[20]} ${THEME.spacing[4]};
  background: ${THEME.colors.Calyx.BackgroundAlt};
  position: relative;
  overflow: hidden;

  @media (min-width: ${THEME.BREAKPOINTS.tablet}) {
    padding: ${THEME.spacing[32]} ${THEME.spacing[8]};
  }
`;

const ContentWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: ${THEME.spacing[16]};
`;

const SectionTitle = styled.h2`
  font-family: ${THEME.typography.fontFamily.display.join(', ')};
  font-size: ${THEME.typography.fontSize['5xl']};
  font-weight: ${THEME.typography.fontWeight.bold};
  color: ${THEME.colors.Calyx.Text.Primary};
  margin-bottom: ${THEME.spacing[6]};
  background: ${THEME.colors.Calyx.Gradient.Primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${THEME.BREAKPOINTS.tablet}) {
    font-size: ${THEME.typography.fontSize['3xl']};
  }
`;

const SectionSubtitle = styled.p`
  font-family: ${THEME.typography.fontFamily.body.join(', ')};
  font-size: ${THEME.typography.fontSize.lg};
  color: ${THEME.colors.Calyx.Text.Secondary};
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${THEME.spacing[12]};
  margin-top: ${THEME.spacing[12]};

  @media (min-width: ${THEME.BREAKPOINTS.tablet}) {
    gap: ${THEME.spacing[16]};
  }
`;

const StepCard = styled.div<{ isEven: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;

  @media (min-width: ${THEME.BREAKPOINTS.tablet}) {
    flex-direction: ${({ isEven }) => isEven ? 'row-reverse' : 'row'};
    text-align: ${({ isEven }) => isEven ? 'right' : 'left'};
    gap: ${THEME.spacing[12]};
  }
`;

const StepNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${THEME.colors.Calyx.Gradient.Primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${THEME.typography.fontFamily.display.join(', ')};
  font-size: ${THEME.typography.fontSize['2xl']};
  font-weight: ${THEME.typography.fontWeight.bold};
  color: white;
  margin-bottom: ${THEME.spacing[6]};
  box-shadow: ${THEME.shadows.calyx.soft};
  position: relative;
  z-index: 2;

  @media (min-width: ${THEME.BREAKPOINTS.tablet}) {
    margin-bottom: 0;
    flex-shrink: 0;
  }
`;

const StepContent = styled.div`
  flex: 1;
  max-width: 500px;

  @media (min-width: ${THEME.BREAKPOINTS.tablet}) {
    max-width: none;
  }
`;

const StepIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${THEME.spacing[4]};
  display: block;

  @media (min-width: ${THEME.BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const StepTitle = styled.h3`
  font-family: ${THEME.typography.fontFamily.display.join(', ')};
  font-size: ${THEME.typography.fontSize['2xl']};
  font-weight: ${THEME.typography.fontWeight.semibold};
  color: ${THEME.colors.Calyx.Text.Primary};
  margin-bottom: ${THEME.spacing[4]};
`;

const StepDescription = styled.p`
  font-family: ${THEME.typography.fontFamily.body.join(', ')};
  font-size: ${THEME.typography.fontSize.base};
  color: ${THEME.colors.Calyx.Text.Secondary};
  line-height: 1.6;
`;

const ConnectingLine = styled.div`
  position: absolute;
  left: 50%;
  top: 60px;
  width: 2px;
  height: calc(100% - 120px);
  background: linear-gradient(to bottom, 
    ${THEME.colors.Calyx.Primary}, 
    ${THEME.colors.Calyx.Secondary}, 
    ${THEME.colors.Calyx.Accent.Green}
  );
  opacity: 0.3;
  z-index: 1;

  @media (max-width: ${THEME.BREAKPOINTS.tablet}) {
    display: none;
  }
`;

const CTAWrapper = styled.div`
  text-align: center;
  margin-top: ${THEME.spacing[16]};
  padding: ${THEME.spacing[8]};
  background: ${THEME.colors.Calyx.Glass.Surface};
  backdrop-filter: blur(20px);
  border: 1px solid ${THEME.colors.Calyx.Glass.Border};
  border-radius: ${THEME.borderRadius['3xl']};
  box-shadow: ${THEME.shadows.calyx.glass};
`;

const CTATitle = styled.h3`
  font-family: ${THEME.typography.fontFamily.display.join(', ')};
  font-size: ${THEME.typography.fontSize['3xl']};
  font-weight: ${THEME.typography.fontWeight.semibold};
  color: ${THEME.colors.Calyx.Text.Primary};
  margin-bottom: ${THEME.spacing[4]};
`;

const CTADescription = styled.p`
  font-family: ${THEME.typography.fontFamily.body.join(', ')};
  font-size: ${THEME.typography.fontSize.lg};
  color: ${THEME.colors.Calyx.Text.Secondary};
  margin-bottom: ${THEME.spacing[6]};
  line-height: 1.6;
`;

const steps: StepProps[] = [
  {
    number: 1,
    title: '콘텐츠 주제 입력',
    description: '제작하고 싶은 콘텐츠의 주제나 키워드를 입력하세요. AI가 자동으로 분석하여 최적의 제안을 제공합니다.',
    icon: '✍️',
  },
  {
    number: 2,
    title: 'AI 분석 및 제안',
    description: 'Calyx의 AI가 주제를 분석하여 해시태그, 제목, 발행 시점을 제안합니다. 데이터 기반의 인사이트를 확인하세요.',
    icon: '🤖',
  },
  {
    number: 3,
    title: '콘텐츠 계획 수립',
    description: '제안받은 내용을 바탕으로 콘텐츠 캘린더에 일정을 등록하고 체계적으로 관리하세요.',
    icon: '📋',
  },
];

const StepComponent: React.FC<StepProps & { isEven: boolean }> = ({ 
  number, 
  title, 
  description, 
  icon, 
  isEven 
}) => {
  return (
    <StepCard isEven={isEven}>
      <StepNumber>{number}</StepNumber>
      <StepContent>
        <StepIcon>{icon}</StepIcon>
        <StepTitle>{title}</StepTitle>
        <StepDescription>{description}</StepDescription>
      </StepContent>
    </StepCard>
  );
};

export const HowItWorksSection: React.FC = () => {
  return (
    <HowItWorksContainer>
      <ContentWrapper>
        <SectionHeader>
          <SectionTitle>1분 만에 시작하기</SectionTitle>
          <SectionSubtitle>
            복잡한 설정 없이도 바로 사용할 수 있는 Calyx의 간단한 워크플로우를 확인해보세요
          </SectionSubtitle>
        </SectionHeader>
        
        <StepsContainer>
          <ConnectingLine />
          {steps.map((step, index) => (
            <StepComponent
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              isEven={index % 2 === 1}
            />
          ))}
        </StepsContainer>

        <CTAWrapper>
          <CTATitle>지금 바로 시작해보세요</CTATitle>
          <CTADescription>
            무료로 Calyx의 모든 기능을 체험해보고, 콘텐츠 제작을 더욱 쉽고 효과적으로 만들어보세요
          </CTADescription>
        </CTAWrapper>
      </ContentWrapper>
    </HowItWorksContainer>
  );
};

export default HowItWorksSection; 