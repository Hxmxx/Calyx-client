import React from 'react';
import styled from '@emotion/styled';
import { THEME } from '../../styles/theme';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

const FeaturesContainer = styled.section`
  padding: ${THEME.spacing[20]} ${THEME.spacing[4]};
  background: ${THEME.colors.Calyx.Background};
  position: relative;
  overflow: hidden;

  @media (min-width: ${THEME.BREAKPOINTS.tablet}) {
    padding: ${THEME.spacing[32]} ${THEME.spacing[8]};
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(circle at 20% 80%, ${THEME.colors.Calyx.Accent.Green} 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, ${THEME.colors.Calyx.Accent.Purple} 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, ${THEME.colors.Calyx.Accent.Peach} 0%, transparent 50%);
  opacity: 0.05;
  pointer-events: none;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${THEME.spacing[8]};
  margin-top: ${THEME.spacing[12]};

  @media (min-width: ${THEME.BREAKPOINTS.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${THEME.spacing[8]};
  }
`;

const FeatureCard = styled.div<{ gradient: string }>`
  background: ${THEME.colors.Calyx.Glass.Surface};
  backdrop-filter: blur(20px);
  border: 1px solid ${THEME.colors.Calyx.Glass.Border};
  border-radius: ${THEME.borderRadius['3xl']};
  padding: ${THEME.spacing[8]};
  text-align: center;
  transition: all ${THEME.transitions.smooth};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ gradient }) => gradient};
    opacity: 0;
    transition: opacity ${THEME.transitions.smooth};
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${THEME.shadows.calyx.glass};
    border-color: ${THEME.colors.Calyx.Primary};

    &::before {
      opacity: 1;
    }

    .feature-icon {
      transform: scale(1.1) rotate(5deg);
    }
  }
`;

const IconContainer = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto ${THEME.spacing[6]};
  border-radius: ${THEME.borderRadius['2xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${THEME.colors.Calyx.Glass.Background};
  backdrop-filter: blur(10px);
  border: 1px solid ${THEME.colors.Calyx.Glass.Border};
  transition: all ${THEME.transitions.smooth};
`;

const Icon = styled.div<{ gradient: string }>`
  font-size: 2rem;
  background: ${({ gradient }) => gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all ${THEME.transitions.smooth};
`;

const FeatureTitle = styled.h3`
  font-family: ${THEME.typography.fontFamily.display.join(', ')};
  font-size: ${THEME.typography.fontSize['2xl']};
  font-weight: ${THEME.typography.fontWeight.semibold};
  color: ${THEME.colors.Calyx.Text.Primary};
  margin-bottom: ${THEME.spacing[4]};
`;

const FeatureDescription = styled.p`
  font-family: ${THEME.typography.fontFamily.body.join(', ')};
  font-size: ${THEME.typography.fontSize.base};
  color: ${THEME.colors.Calyx.Text.Secondary};
  line-height: 1.6;
`;

const features: FeatureCardProps[] = [
  {
    icon: '🌱',
    title: 'Hashtag Generator',
    description: 'AI가 분석한 키워드로 최적의 해시태그를 자동 생성합니다. 콘텐츠의 발견 가능성을 높여보세요.',
    gradient: THEME.colors.Calyx.Gradient.Primary,
  },
  {
    icon: '✨',
    title: 'Title Analyzer',
    description: '제목의 매력도와 SEO 점수를 분석하여 더 나은 제목을 제안합니다. 클릭률을 높여보세요.',
    gradient: `linear-gradient(135deg, ${THEME.colors.Calyx.Secondary} 0%, ${THEME.colors.Calyx.Accent.Green} 100%)`,
  },
  {
    icon: '📅',
    title: 'Content Calendar',
    description: '콘텐츠 일정을 시각적으로 관리하고 최적의 발행 시점을 찾아보세요. 체계적인 콘텐츠 계획을 세워보세요.',
    gradient: `linear-gradient(135deg, ${THEME.colors.Calyx.Accent.Peach} 0%, ${THEME.colors.Calyx.Accent.Purple} 100%)`,
  },
];

const FeatureCardComponent: React.FC<FeatureCardProps> = ({ icon, title, description, gradient }) => {
  return (
    <FeatureCard gradient={gradient}>
      <IconContainer>
        <Icon gradient={gradient} className="feature-icon">
          {icon}
        </Icon>
      </IconContainer>
      <FeatureTitle>{title}</FeatureTitle>
      <FeatureDescription>{description}</FeatureDescription>
    </FeatureCard>
  );
};

export const FeaturesSection: React.FC = () => {
  return (
    <FeaturesContainer>
      <BackgroundPattern />
      <ContentWrapper>
        <SectionHeader>
          <SectionTitle>Your Creative Toolkit</SectionTitle>
          <SectionSubtitle>
            Calyx의 핵심 기능들로 콘텐츠 제작을 더욱 쉽고 효과적으로 만들어보세요
          </SectionSubtitle>
        </SectionHeader>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCardComponent
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              gradient={feature.gradient}
            />
          ))}
        </FeaturesGrid>
      </ContentWrapper>
    </FeaturesContainer>
  );
};

export default FeaturesSection; 