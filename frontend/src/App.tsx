import { Authenticated, GitHubBanner, Refine } from "@refinedev/core";
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import {
    ErrorComponent,
    ThemedLayoutV2,
    ThemedSiderV2,
    useNotificationProvider,
} from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
    CatchAllNavigate,
    DocumentTitleHandler,
    NavigateToResource,
    UnsavedChangesNotifier,
} from "@refinedev/react-router";
import dataProvider from "@refinedev/simple-rest";
import { App as AntdApp } from "antd";
import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import { authProvider } from "./authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { BlogPostCreate, BlogPostEdit, BlogPostList, BlogPostShow } from "./pages/admin/blog-posts";
import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from "./pages/admin/categories";
import { ForgotPassword } from "./pages/auth/forgotPassword";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import LayoutStore from "./components/LayoutStore";
import ProductList from "./pages/admin/products/list";
<<<<<<< HEAD
<<<<<<< HEAD
import { ProductCreate } from "./pages/admin/products/create";
=======
import ProductCreate from "./pages/admin/products/create";
>>>>>>> 6b1ab22 (chore: remove stale-dolls-smile project files and migrate frontend configuration)
=======
import { ProductCreate } from "./pages/admin/products/create";
>>>>>>> 95cb95d (feat: implement product management API and frontend integration with create, read, update, and delete functionality)
import ProductEdit from "./pages/admin/products/edit";
import ProductShow from "./pages/admin/products/show";

function App() {
    return (
        <BrowserRouter>
            <RefineKbarProvider>
                <ColorModeContextProvider>
                    <AntdApp>
                        <DevtoolsProvider>
                            <Refine
<<<<<<< HEAD
<<<<<<< HEAD
                                dataProvider={dataProvider("http://localhost:8080/api")}
=======
                                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
>>>>>>> 6b1ab22 (chore: remove stale-dolls-smile project files and migrate frontend configuration)
=======
                                dataProvider={dataProvider("http://localhost:8080/api")}
>>>>>>> 95cb95d (feat: implement product management API and frontend integration with create, read, update, and delete functionality)
                                notificationProvider={useNotificationProvider}
                                routerProvider={routerBindings}
                                authProvider={authProvider}
                                resources={[
                                    {
                                        name: "blog_posts",
                                        list: "/admin/blog-posts",
                                        create: "/admin/blog-posts/create",
                                        edit: "/admin/blog-posts/edit/:id",
                                        show: "/admin/blog-posts/show/:id",
                                        meta: {
                                            canDelete: true,
                                        },
                                    },
                                    {
                                        name: "products",
                                        list: "/admin/products",
                                        create: "/admin/products/create",
                                        edit: "/admin/products/edit/:id",
                                        show: "/admin/products/show/:id",
                                        meta: {
                                            canDelete: true,
                                        },
                                    },
                                    {
                                        name: "categories",
                                        list: "/admin/categories",
                                        create: "/admin/categories/create",
                                        edit: "/admin/categories/edit/:id",
                                        show: "/admin/categories/show/:id",
                                        meta: {
                                            canDelete: true,
                                        },
                                    },
                                ]}
                                options={{
                                    syncWithLocation: true,
                                    warnWhenUnsavedChanges: true,
                                    useNewQueryKeys: true,
                                    projectId: "x0wOu6-4HuOXn-EZAQEw",
                                }}
                            >
                                <Routes>
                                    <Route
                                        path="admin"
                                        element={
                                            <Authenticated
                                                key="authenticated-inner"
                                                fallback={<CatchAllNavigate to="/login" />}
                                            >
                                                <ThemedLayoutV2
                                                    Header={Header}
                                                    Sider={(props) => (
                                                        <ThemedSiderV2 {...props} fixed />
                                                    )}
                                                >
                                                    <Outlet />
                                                </ThemedLayoutV2>
                                            </Authenticated>
                                        }
                                    >
                                        <Route
                                            index
                                            element={<NavigateToResource resource="products" />}
                                        />
                                        <Route path="products">
                                            <Route index element={<ProductList />} />
                                            <Route path="create" element={<ProductCreate />} />
                                            <Route path="edit/:id" element={<ProductEdit />} />
                                            <Route path="show/:id" element={<ProductShow />} />
                                        </Route>
                                        <Route path="blog-posts">
                                            <Route index element={<BlogPostList />} />
                                            <Route path="create" element={<BlogPostCreate />} />
                                            <Route path="edit/:id" element={<BlogPostEdit />} />
                                            <Route path="show/:id" element={<BlogPostShow />} />
                                        </Route>
                                        <Route path="categories">
                                            <Route index element={<CategoryList />} />
                                            <Route path="create" element={<CategoryCreate />} />
                                            <Route path="edit/:id" element={<CategoryEdit />} />
                                            <Route path="show/:id" element={<CategoryShow />} />
                                        </Route>
                                        <Route path="*" element={<ErrorComponent />} />
                                    </Route>
                                    <Route
                                        path=""
                                        element={
                                            <LayoutStore>
                                                <Outlet />
                                            </LayoutStore>
                                        }
                                    >
                                        <Route index element={<h1>Home Page</h1>} />
                                        <Route path="/login" element={<Login />} />
                                        <Route path="/register" element={<Register />} />
                                        <Route
                                            path="/forgot-password"
                                            element={<ForgotPassword />}
                                        />
                                    </Route>
                                </Routes>

                                <RefineKbar />
                                <UnsavedChangesNotifier />
                                <DocumentTitleHandler />
                            </Refine>
                            <DevtoolsPanel />
                        </DevtoolsProvider>
                    </AntdApp>
                </ColorModeContextProvider>
            </RefineKbarProvider>
        </BrowserRouter>
    );
}

export default App;
