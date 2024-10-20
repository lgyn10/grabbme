import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { BoardCardProps, Pagination, SearchBar, StackSearch } from '@/features/board/ui';
import { boardPostFetch } from '@/pages/board/model/boardPostFetch';
import { useBoardPostsMutation } from '@/pages/board/model/useBoardPostsMutation';
import * as S from '@/pages/board/ui/project/Project.style';
import { IcPost } from '@/shared/assets';
import { Button } from '@/shared/ui';
import BoardCardList from '@/widgets/board/ui/BoardCardList';

const EXAMPLE_POST_PAGE_3: BoardCardProps[] = [
  {
    id: 11,
    title: 'Project Lambda',
    content: 'This is the content for Project Lambda.',
    career: '2 years',
    stacks: ['1', '2', '3'],
    viewCount: 170,
    bookmarkCount: 38,
    chatCount: 7,
    isBookmarked: true,
  },
  {
    id: 12,
    title: 'Project Mu',
    content: 'This is the content for Project Mu.',
    career: '3 years',
    stacks: ['4', '5', '6', '7'],
    viewCount: 220,
    bookmarkCount: 60,
    chatCount: 13,
    isBookmarked: false,
  },
  {
    id: 13,
    title: 'Project Nu',
    content: 'This is the content for Project Nu.',
    career: '1 year',
    stacks: ['8', '9', '10'],
    viewCount: 140,
    bookmarkCount: 28,
    chatCount: 5,
    isBookmarked: true,
  },
  {
    id: 14,
    title: 'Project Xi',
    content: 'This is the content for Project Xi.',
    expiredAt: '2023-09-30',
    stacks: ['1', '2', '5', '8', '14'],
    viewCount: 320,
    bookmarkCount: 80,
    chatCount: 20,
    isBookmarked: false,
  },
  {
    id: 15,
    title: 'Project Omicron',
    content: 'This is the content for Project Omicron.',
    expiredAt: '2023-11-15',
    stacks: ['17', '19', '21'],
    viewCount: 200,
    bookmarkCount: 50,
    chatCount: 10,
    isBookmarked: true,
  },
];

const Project = () => {
  const { data: boardPosts, isLoading } = useBoardPostsMutation();
  const [query, setQuery] = useState('');
  const [fixedBoardPosts, setFixedBoardPosts] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchQuery = params.get('search');
    if (searchQuery) {
      setQuery(searchQuery);
    }
  }, [location.search]);

  useEffect(() => {
    if (boardPosts && !fixedBoardPosts) {
      setFixedBoardPosts(boardPosts);
    }
  }, [boardPosts, fixedBoardPosts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <S.Header>관심있는 스택을 가진 그래퍼를 찾아보세요!</S.Header>
      <S.SearchBox>
        <SearchBar query={query} setQuery={setQuery} />
        <StackSearch />
      </S.SearchBox>
      <S.PostListLabel>
        그랩존 리스트
        <Button
          type="button"
          icon={<IcPost />}
          variant="primary"
          size="sm"
          onClick={() => navigate('/register/project')}
        >
          그랩존 등록
        </Button>
      </S.PostListLabel>
      <BoardCardList boardCardList={boardPostFetch(boardPosts.data.posts)} />
      <S.PaginationWrapper>
        <Pagination totalPages={Math.ceil(boardPosts.data.totalPost / 5)} />
      </S.PaginationWrapper>
    </>
  );
};

export default Project;
