import Counter from './components/Counter'
import ArrayList from './components/ArrayList'
import HookUseEffect from './components/HookUseEffect'
import Home from './components/home'
import JobPage from './components/JobPages/JobPage'
import SinglePageError from './components/SinglePageError'
import GraphqlBasics from './components/GraphqlBasics'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        index: true,
        errorElement: <SinglePageError />,
        element: <Counter></Counter>,
      },
      {
        path: '/arraylist',
        errorElement: <SinglePageError />,
        element: <ArrayList></ArrayList>,
      },
      {
        path: '/hookuseff',
        errorElement: <SinglePageError />,
        element: <HookUseEffect></HookUseEffect>,
      },
      {
        path: '/jobs/:jobId',
        errorElement: <SinglePageError />,
        element: <JobPage></JobPage>,
      },
      {
        path: '/graphqlbas',
        errorElement: <SinglePageError />,
        element: <GraphqlBasics></GraphqlBasics>,
      },
    ],
  },
])

function App() {
  return (
    <div className="container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
