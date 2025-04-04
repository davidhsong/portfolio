// src/routes.js
import React, { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './components/common/Loader';
import SEO from './components/SEO';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const Resume = lazy(() => import('./pages/Resume'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Route config with SEO data
const routes = [
  {
    path: '/',
    element: <Home />,
    seo: {
      title: 'David Song | Software Engineer & Full-Stack Developer',
      description: 'David Song is a Software Engineer and Full-Stack Developer specializing in modern web applications with React, Node.js, and MongoDB.',
    }
  },
  {
    path: '/about',
    element: <About />,
    seo: {
      title: 'About | David Song',
      description: 'Learn more about David Song, my background, education, skills, and what drives me as a Software Engineer and Full-Stack Developer.',
    }
  },
  {
    path: '/projects',
    element: <Projects />,
    seo: {
      title: 'Projects | David Song',
      description: 'Explore my portfolio of web development and software engineering projects including e-commerce, AI, IoT, and data analysis applications.',
    }
  },
  {
    path: '/projects/:id',
    element: <ProjectDetail />,
    // SEO is handled dynamically within component
  },
  {
    path: '/resume',
    element: <Resume />,
    seo: {
      title: 'Resume | David Song',
      description: 'View my professional resume including my education, work experience, projects, and technical skills as a Software Engineer.',
    }
  },
  {
    path: '/blog',
    element: <Blog />,
    seo: {
      title: 'Blog | David Song',
      description: 'Read my thoughts and insights on web development, programming, and technology in my blog.',
    }
  },
  {
    path: '/blog/:id',
    element: <BlogPost />,
    // SEO is handled dynamically within component
  },
  {
    path: '/contact',
    element: <Contact />,
    seo: {
      title: 'Contact | David Song',
      description: 'Get in touch with me for collaboration, job opportunities, or just to connect. I\'m currently open to internships and freelance projects.',
    }
  },
  {
    path: '*',
    element: <NotFound />,
    seo: {
      title: '404 - Page Not Found | David Song',
      description: 'The page you are looking for does not exist or has been moved.',
    }
  }
];

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <>
                {route.seo && <SEO {...route.seo} />}
                {route.element}
              </>
            }
          />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;