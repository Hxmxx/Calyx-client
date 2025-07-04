import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { THEME } from '../../styles/theme';
import Button from '../ui/Button';

const HeroContainer = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${THEME.colors.Calyx.Gradient.Background};
  padding: ${THEME.spacing[8]} ${THEME.spacing[4]};

  @media (min-width: ${THEME.BREAKPOINTS.tablet}) {
    padding: ${THEME.spacing[16]} ${THEME.spacing[8]};
  }
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 1;
`;

const FloatingElement = styled.div<{ delay: number; duration: number; size: number }>`
  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.Calyx.Accent.Purple};
  opacity: 0.1;
  animation: float ${({ duration }) => duration}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;

  &:nth-of-type(1) {
    top: 20%;
    left: 10%;
    background: ${THEME.colors.Calyx.Accent.Green};
  }

  &:nth-of-type(2) {
    top: 60%;
    right: 15%;
    background: ${THEME.colors.Calyx.Accent.Peach};
  }

  &:nth-of-type(3) {
    bottom: 30%;
    left: 20%;
    background: ${THEME.colors.Calyx.Accent.Blue};
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
`;

const PlanetVisual = styled.div<{ isVisible: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${({ isVisible }) => 
    isVisible 
      ? `radial-gradient(circle, ${THEME.colors.Calyx.Accent.Green} 0%, ${THEME.colors.Calyx.Accent.Purple} 50%, ${THEME.colors.Calyx.Primary} 100%)`
      : 'linear-gradient(45deg, #f0f0f0, #e0e0e0)'
  };
  box-shadow: ${({ isVisible }) => 
    isVisible 
      ? THEME.shadows.calyx.glow
      : '0 4px 20px rgba(0, 0, 0, 0.1)'
  };
  transition: all ${THEME.transitions.smooth};
  opacity: 0.3;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: -20px;
    bottom: -20px;
    border-radius: 50%;
    background: ${({ isVisible }) => 
      isVisible 
        ? `conic-gradient(from 0deg, ${THEME.colors.Calyx.Secondary}, ${THEME.colors.Calyx.Primary}, ${THEME.colors.Calyx.Secondary})`
        : 'transparent'
    };
    opacity: 0.2;
    animation: ${({ isVisible }) => isVisible ? 'rotate 20s linear infinite' : 'none'};
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${THEME.BREAKPOINTS.tablet}) {
    width: 200px;
    height: 200px;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-family: ${THEME.typography.fontFamily.display.join(', ')};
  font-size: ${THEME.typography.fontSize['6xl']};
  font-weight: ${THEME.typography.fontWeight.bold};
  color: ${THEME.colors.Calyx.Text.Primary};
  margin-bottom: ${THEME.spacing[6]};
  line-height: 1.1;
  background: ${THEME.colors.Calyx.Gradient.Primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${THEME.BREAKPOINTS.tablet}) {
    font-size: ${THEME.typography.fontSize['4xl']};
  }
`;

const Subtitle = styled.p`
  font-family: ${THEME.typography.fontFamily.body.join(', ')};
  font-size: ${THEME.typography.fontSize.xl};
  color: ${THEME.colors.Calyx.Text.Secondary};
  margin-bottom: ${THEME.spacing[8]};
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${THEME.BREAKPOINTS.tablet}) {
    font-size: ${THEME.typography.fontSize.lg};
  }
`;

const CTAButton = styled(Button)`
  font-size: ${THEME.typography.fontSize.lg};
  padding: ${THEME.spacing[4]} ${THEME.spacing[8]};
  min-height: 56px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: ${THEME.spacing[8]};
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateX(-50%) translateY(0);
    }
    40% {
      transform: translateX(-50%) translateY(-10px);
    }
    60% {
      transform: translateX(-50%) translateY(-5px);
    }
  }
`;

const ScrollArrow = styled.div`
  width: 2px;
  height: 30px;
  background: ${THEME.colors.Calyx.Text.Muted};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 6px solid ${THEME.colors.Calyx.Text.Muted};
  }
`;

export const HeroSection: React.FC = () => {
  const [isPlanetVisible, setIsPlanetVisible] = useState(false);

  useEffect(() => {
    // 페이지 로드 후 행성이 천천히 나타나는 효과
    const timer = setTimeout(() => {
      setIsPlanetVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStarted = () => {
    // TODO: 온보딩 플로우로 이동
    console.log('Get Started clicked');
  };

  return (
    <HeroContainer>
      <BackgroundElements>
        <FloatingElement delay={0} duration={6} size={60} />
        <FloatingElement delay={2} duration={8} size={40} />
        <FloatingElement delay={4} duration={7} size={80} />
      </BackgroundElements>
      
      <PlanetVisual isVisible={isPlanetVisible} />
      
      <ContentContainer>
        <Title>Grow Your Creativity</Title>
        <Subtitle>
          Calyx는 1인 콘텐츠 크리에이터를 위한 감성적 콘텐츠 도구입니다. 
          자연의 성장처럼 당신의 콘텐츠를 키워보세요.
        </Subtitle>
        <CTAButton 
          variant="primary" 
          size="lg" 
          onClick={handleGetStarted}
          className="pulse"
        >
          Start Growing
        </CTAButton>
      </ContentContainer>

      <ScrollIndicator>
        <ScrollArrow />
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection; 