// =====> IMPORTS
import { createBrowserRouter } from "react-router";
import Layout from "@/components/layout";
import { HistoryPage, HomePage } from "@/pages";

// =====> MY-SETUP
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/history",
        element: <HistoryPage />
      }
    ]
  }
])

// =====> EXPORTS
export default router;