import styled from "styled-components"

export const FooterWrapper = styled.section`
	width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;
	background: ${(props) => props.theme.colors.background1};
	border-top: 1px solid ${(props) => props.theme.colors.background3};

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`

export const LinkItem = styled.a`
	font-size: 15px;
	line-height: 24px;
	color: ${(props) => props.theme.colors.primary1};
	margin-bottom: 12px;
	transition: .3s ease;
	position: relative;
	left: 0;
	font-weight: 400;

	&:hover {
		color: ${(props) => props.theme.colors.accent1};
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 13px;
		line-height: 20px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`

export const SocialIconsContainer = styled.div`
max-width: 1040px;
display: flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`

export const CompanyContainer = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`

export const Slogan = styled.p`
	color: ${(props) => props.theme.colors.primary1};
	min-width: 180px;
	letter-spacing: 0.02em;
	font-size: 13px;
	line-height: 22px;
	padding: 0.5rem;
	font-weight: 400;

	@media ${props => props.theme.breakpoints.md}{
		font-size: 12px;
		line-height: 18px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 16px;
		font-size: 10px;
		min-width: 100px;
	}
`

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`

export const LinkList = styled.ul`
	border-top: 1px solid ${(props) => props.theme.colors.background3};
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
	padding: 32px 0 20px;

	@media ${props => props.theme.breakpoints.lg} {
		padding: 24px 0 12px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 20px 0 10px;
		gap: 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 16px 4px 8px;
		gap: 5px;
	}
`

export const LinkColumn = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 500;
	font-size: 10px;
	line-height: 18px;
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.primary2};
	margin-bottom: 10px;

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 9px;
		line-height: 10px;
		margin-bottom: 6px;
	}
`
