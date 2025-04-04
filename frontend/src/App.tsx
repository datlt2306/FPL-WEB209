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
import { authProvider } from "./providers/authProvider";
import { Header } from "./components/header";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { BlogPostCreate, BlogPostEdit, BlogPostList, BlogPostShow } from "./pages/admin/blog-posts";
import { CategoryCreate, CategoryEdit, CategoryList, CategoryShow } from "./pages/admin/categories";
import { ForgotPassword } from "./pages/auth/forgotPassword";
import { Login } from "./pages/auth/login";
import { Register } from "./pages/auth/register";
import ProductList from "./pages/admin/products/list";
import ProductCreate from "./pages/admin/products/create";
import ProductEdit from "./pages/admin/products/edit";
import ProductShow from "./pages/admin/products/show";
import LayoutStore from "./components/LayoutStore";
import HomePage from "./pages/store/homepage";
import ProductListPage from "./pages/store/products";

function App() {
    return (
        <BrowserRouter>
            <GitHubBanner />
            <RefineKbarProvider>
                <ColorModeContextProvider>
                    <AntdApp>
                        <DevtoolsProvider>
                            <Refine
                                dataProvider={dataProvider("http://localhost:8080/api")}
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
                                    projectId: "gn6FN3-rONuuq-mle4LO",
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
                                            element={<NavigateToResource resource="blog_posts" />}
                                        />
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
                                        <Route path="products">
                                            <Route index element={<ProductList />} />
                                            <Route path="create" element={<ProductCreate />} />
                                            <Route path="edit/:id" element={<ProductEdit />} />
                                            <Route path="show/:id" element={<ProductShow />} />
                                        </Route>
                                        <Route path="*" element={<ErrorComponent />} />
                                    </Route>
                                    <Route
                                        element={
                                            <LayoutStore>
                                                <Outlet />
                                            </LayoutStore>
                                        }
                                    >
                                        <Route path="" element={<HomePage />} />
                                        <Route path="products" element={<ProductListPage />} />
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
