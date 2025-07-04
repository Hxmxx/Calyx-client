import React from 'react';
import styled from '@emotion/styled';
import { THEME } from '../../styles/theme';

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, ${THEME.colors.Calyx.Text.Primary} 0%, #1a202c 100%);
  color: ${THEME.colors.Calyx.Text.Light};
  padding: ${THEME.spacing[16]} ${THEME.spacing[4]};
  position: relative;
  overflow: hidden;

  @media (min-width: ${THEME.BREAKPOINTS.tablet}) {
    padding: ${THEME.spacing[24]} ${THEME.spacing[8]};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 20% 80%, ${THEME.colors.Calyx.Accent.Green} 0%, transparent 30%),
      radial-gradient(circle at 80% 20%, ${THEME.colors.Calyx.Accent.Purple} 0%, transparent 30%);
    opacity: 0.1;
    pointer-events: none;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${THEME.spacing[12]};
  margin-bottom: ${THEME.spacing[12]};

  @media (min-width: ${THEME.BREAKPOINTS.tablet}) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: ${THEME.spacing[8]};
  }
`;

const BrandSection = styled.div`
  @media (min-width: ${THEME.BREAKPOINTS.tablet}) {
    grid-column: 1;
  }
`;

const Logo = styled.div`
  font-family: ${THEME.typography.fontFamily.display.join(', ')};
  font-size: ${THEME.typography.fontSize['3xl']};
  font-weight: ${THEME.typography.fontWeight.bold};
  background: ${THEME.colors.Calyx.Gradient.Primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: ${THEME.spacing[4]};
`;

const BrandDescription = styled.p`
  font-family: ${THEME.typography.fontFamily.body.join(', ')};
  font-size: ${THEME.typography.fontSize.base};
  color: ${THEME.colors.Calyx.Text.Light};
  line-height: 1.6;
  margin-bottom: ${THEME.spacing[6]};
  max-width: 300px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${THEME.spacing[4]};
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${THEME.colors.Calyx.Glass.Surface};
  backdrop-filter: blur(10px);
  border: 1px solid ${THEME.colors.Calyx.Glass.Border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${THEME.colors.Calyx.Text.Light};
  text-decoration: none;
  transition: all ${THEME.transitions.smooth};

  &:hover {
    background: ${THEME.colors.Calyx.Primary};
    transform: translateY(-2px);
    box-shadow: ${THEME.shadows.calyx.soft};
  }
`;

const FooterColumn = styled.div`
  @media (min-width: ${THEME.BREAKPOINTS.tablet}) {
    grid-column: span 1;
  }
`;

const ColumnTitle = styled.h3`
  font-family: ${THEME.typography.fontFamily.display.join(', ')};
  font-size: ${THEME.typography.fontSize.lg};
  font-weight: ${THEME.typography.fontWeight.semibold};
  color: white;
  margin-bottom: ${THEME.spacing[6]};
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: ${THEME.spacing[3]};
`;

const FooterLinkItem = styled.a`
  font-family: ${THEME.typography.fontFamily.body.join(', ')};
  font-size: ${THEME.typography.fontSize.base};
  color: ${THEME.colors.Calyx.Text.Light};
  text-decoration: none;
  transition: color ${THEME.transitions.smooth};

  &:hover {
    color: ${THEME.colors.Calyx.Secondary};
  }
`;

const NewsletterSection = styled.div`
  margin-top: ${THEME.spacing[8]};
  padding: ${THEME.spacing[8]};
  background: ${THEME.colors.Calyx.Glass.Surface};
  backdrop-filter: blur(20px);
  border: 1px solid ${THEME.colors.Calyx.Glass.Border};
  border-radius: ${THEME.borderRadius['2xl']};
  text-align: center;
`;

const NewsletterTitle = styled.h3`
  font-family: ${THEME.typography.fontFamily.display.join(', ')};
  font-size: ${THEME.typography.fontSize['2xl']};
  font-weight: ${THEME.typography.fontWeight.semibold};
  color: white;
  margin-bottom: ${THEME.spacing[4]};
`;

const NewsletterDescription = styled.p`
  font-family: ${THEME.typography.fontFamily.body.join(', ')};
  font-size: ${THEME.typography.fontSize.base};
  color: ${THEME.colors.Calyx.Text.Light};
  margin-bottom: ${THEME.spacing[6]};
  line-height: 1.6;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: ${THEME.spacing[4]};
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: ${THEME.BREAKPOINTS.tablet}) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: ${THEME.spacing[3]} ${THEME.spacing[4]};
  border: 1px solid ${THEME.colors.Calyx.Glass.Border};
  border-radius: ${THEME.borderRadius.lg};
  background: ${THEME.colors.Calyx.Glass.Background};
  backdrop-filter: blur(10px);
  color: white;
  font-family: ${THEME.typography.fontFamily.body.join(', ')};
  font-size: ${THEME.typography.fontSize.base};

  &::placeholder {
    color: ${THEME.colors.Calyx.Text.Light};
    opacity: 0.7;
  }

  &:focus {
    outline: none;
    border-color: ${THEME.colors.Calyx.Secondary};
    box-shadow: 0 0 0 3px rgba(79, 209, 197, 0.1);
  }
`;

const NewsletterButton = styled.button`
  padding: ${THEME.spacing[3]} ${THEME.spacing[6]};
  background: ${THEME.colors.Calyx.Gradient.Primary};
  border: none;
  border-radius: ${THEME.borderRadius.lg};
  color: white;
  font-family: ${THEME.typography.fontFamily.body.join(', ')};
  font-size: ${THEME.typography.fontSize.base};
  font-weight: ${THEME.typography.fontWeight.medium};
  cursor: pointer;
  transition: all ${THEME.transitions.smooth};

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${THEME.shadows.calyx.soft};
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid ${THEME.colors.Calyx.Glass.Border};
  padding-top: ${THEME.spacing[8]};
  margin-top: ${THEME.spacing[12]};
  text-align: center;
`;

const Copyright = styled.p`
  font-family: ${THEME.typography.fontFamily.body.join(', ')};
  font-size: ${THEME.typography.fontSize.sm};
  color: ${THEME.colors.Calyx.Text.Light};
  opacity: 0.8;
`;

const footerLinks = {
  product: [
    { name: '해시태그 생성기', href: '/hashtag' },
    { name: '제목 분석기', href: '/title-analyzer' },
    { name: '콘텐츠 캘린더', href: '/calendar' },
    { name: 'AI 분석', href: '/ai-analysis' },
  ],
  company: [
    { name: '회사 소개', href: '/about' },
    { name: '팀', href: '/team' },
    { name: '채용', href: '/careers' },
    { name: '뉴스', href: '/news' },
  ],
  support: [
    { name: '도움말', href: '/help' },
    { name: '문의하기', href: '/contact' },
    { name: '피드백', href: '/feedback' },
    { name: 'API 문서', href: '/api-docs' },
  ],
};

export const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 뉴스레터 구독 로직 구현
    console.log('Newsletter subscription');
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <BrandSection>
            <Logo>Calyx</Logo>
            <BrandDescription>
              자연의 성장처럼 당신의 콘텐츠를 키워주는 AI 기반 콘텐츠 도구입니다.
            </BrandDescription>
            <SocialLinks>
              <SocialLink href="#" aria-label="Twitter">
                🐦
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                📷
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                💼
              </SocialLink>
              <SocialLink href="#" aria-label="GitHub">
                💻
              </SocialLink>
            </SocialLinks>
          </BrandSection>

          <FooterColumn>
            <ColumnTitle>제품</ColumnTitle>
            <FooterLinks>
              {footerLinks.product.map((link, index) => (
                <FooterLink key={index}>
                  <FooterLinkItem href={link.href}>{link.name}</FooterLinkItem>
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>회사</ColumnTitle>
            <FooterLinks>
              {footerLinks.company.map((link, index) => (
                <FooterLink key={index}>
                  <FooterLinkItem href={link.href}>{link.name}</FooterLinkItem>
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterColumn>

          <FooterColumn>
            <ColumnTitle>지원</ColumnTitle>
            <FooterLinks>
              {footerLinks.support.map((link, index) => (
                <FooterLink key={index}>
                  <FooterLinkItem href={link.href}>{link.name}</FooterLinkItem>
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterColumn>
        </FooterTop>

        <NewsletterSection>
          <NewsletterTitle>최신 소식 받아보기</NewsletterTitle>
          <NewsletterDescription>
            Calyx의 새로운 기능과 콘텐츠 제작 팁을 이메일로 받아보세요
          </NewsletterDescription>
          <NewsletterForm onSubmit={handleNewsletterSubmit}>
            <NewsletterInput
              type="email"
              placeholder="이메일 주소를 입력하세요"
              required
            />
            <NewsletterButton type="submit">구독하기</NewsletterButton>
          </NewsletterForm>
        </NewsletterSection>

        <FooterBottom>
          <Copyright>
            © 2024 Calyx. All rights reserved. | 개인정보처리방침 | 이용약관
          </Copyright>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 