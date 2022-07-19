import Link from "next/link";
import styled from "styled-components";

interface PaginationProps {
  currentPage: number;
  pageNumber: number;
}

const Pagination = ({ currentPage, pageNumber }: PaginationProps) => {
  const start: number = Math.floor((currentPage - 1) / 10) * 10 + 1;
  const pageRange: number[] = Array.from({length: 10}, (_, i) => i + start).filter(n => n <= pageNumber);
  const hasPrev: boolean = start !== 1;
  const hasNext: boolean = pageRange[pageRange.length - 1] + 1 <= pageNumber;

  return (
    <Container>
      {hasPrev && (
        <Link href={`/blog/page/${pageRange[0] - 1}`}>
          <Page>
            이전
          </Page> 
        </Link>
      )}
      {pageRange.map((page, i) => {
        return (
          <Link href={`/blog/page/${page}`} key={i}>
            <Page current={page === currentPage}>
              {page}
            </Page>
          </Link>
        );
      })}
      {hasNext && (
        <Link href={`/blog/page/${pageRange[0] + 10}`}>
          <Page>
            다음
          </Page>
        </Link>
      )}
    </Container>
  )
}

export default Pagination;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const Page = styled.span<{ current?: boolean }>`
  margin: 0 10px;
  cursor: pointer;
  ${props => props.current && `font-weight: 800`};
`;
