import { useState, lazy, Suspense } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import "./App.css";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
// import BlogDetail from "./pages/BlogDetail";
// import { loader as blogPostLoader } from "./pages/BlogDetail";
// import Blogs from "./pages/Blogs";
import RootLayout from "./UI/RootLayout";
const Home = lazy(() => import("./pages/Home"));
const Blogs = lazy(() => import("./pages/Blogs"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const Privacy = lazy(() => import("./pages/Privacy"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
import LoaderContainer from "./UI/LoaderContainer";
const routesDefinition = createRoutesFromElements(
  <Route path="/" errorElement={<ErrorPage />} element={<RootLayout />}>
    <Route
      path="/"
      element={
        <Suspense fallback={<LoaderContainer />}>
          <Home />
        </Suspense>
      }
    />
    <Route
      path="/about"
      element={
        <Suspense fallback={<LoaderContainer />}>
          <About />
        </Suspense>
      }
    />
    <Route
      path="/book-a-flight"
      element={
        <Suspense fallback={<LoaderContainer />}>
          <Contact />
        </Suspense>
      }
    />
    <Route
      path="/blogs"
      element={
        <Suspense fallback={<LoaderContainer />}>
          <Blogs />
        </Suspense>
      }
    ></Route>
    <Route
      path="/blogs/:id"
      element={
        <Suspense fallback={<LoaderContainer />}>
          <BlogDetail />
        </Suspense>
      }
    />
    {/* <Route path="/blogs/:id" element={<BlogDetail />} loader={blogPostLoader} /> */}
    <Route
      path="/privacy"
      element={
        <Suspense fallback={<LoaderContainer />}>
          <Privacy />
        </Suspense>
      }
    />
    <Route path="*" element={<Navigate to="/" replace />} />
  </Route>
);

const router = createBrowserRouter(routesDefinition);

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {" "}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
