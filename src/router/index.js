import { createBrowserRouter } from "react-router-dom";
import App from "../App";  // 主布局组件
import Home from "../pages/Home";

/**
 * 路由配置中心
 * 使用 createBrowserRouter 配置路由表
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // 顶层布局
    children: [
      {
        index: true, // 默认子路由
        element: <Home />,
      },
    ],
  },
]);

export default router;