import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainComponent} from "./pages/main-page/MainComponent";
import {UsersPage} from "./pages/users-pages/UsersPage";
import {PostsPage} from "./pages/posts-pages/PostsPage";

const root = ReactDOM.createRoot(document.getElementById('root'));

const routes = createBrowserRouter([
    {path: '/', element: <},
    {}
])

root.render(
  <RouterProvider router={routes}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
