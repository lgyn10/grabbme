import { createBrowserRouter } from 'react-router-dom';
import { DashboardLayout, MainLayout } from '@/app/layout';
import { SignUp } from '@/pages/auth';
import { GrabbZone, Project } from '@/pages/board/ui';
import Home from '@/pages/home/ui/Home';
import { MyProfilePage, MyPostPage, MyProjectPage, MyBookmarkPage } from '@/pages/mypage';
import { GrabbZoneDetail, ProjectDetail } from '@/pages/post';
import RegisterGrabbzone from '@/pages/post/ui/grabbzone/RegisterGrabbzone';
import RegisterProject from '@/pages/post/ui/project/RegisterProject';
import { routerPath } from '@/shared';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: routerPath.HOME,
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: routerPath.SIGNUP,
        element: <SignUp />,
      },
      {
        path: routerPath.REGISTER_GRABBZONE,
        element: <RegisterGrabbzone />,
      },
      {
        path: routerPath.REGISTER_PROJECT,
        element: <RegisterProject />,
      },
      { path: routerPath.PROJECT, element: <Project /> },
      { path: routerPath.PROJECT_DETAIL, element: <ProjectDetail /> },
      { path: routerPath.GRABB_ZONE, element: <GrabbZone /> },
      { path: routerPath.GRABB_ZONE_DETAIL, element: <GrabbZoneDetail /> },
    ],
  },
  {
    path: routerPath.MYPAGE,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MyProfilePage />,
      },
      {
        path: routerPath.MY_PROFILE,
        element: <MyProfilePage />,
      },
      {
        path: routerPath.MY_POSTS,
        element: <MyPostPage />,
      },
      {
        path: routerPath.MY_BOOKMARKS,
        element: <MyBookmarkPage />,
      },
      {
        path: routerPath.MY_PROJECTS,
        element: <MyProjectPage />,
      },
    ],
  },
]);
