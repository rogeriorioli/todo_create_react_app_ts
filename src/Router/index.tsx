import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from '../middleware/Auth';
import NotFound from '../pages/404/NotFound';
import Login from '../pages/Login';
import NewTask from '../pages/NewTask';
import Tasks from '../pages/Tasks';

interface RoutesProps {
  children?: React.ReactNode;
  location?: Partial<Location> | string;
}
export default function Router({children} : RoutesProps) {
  return (
    <BrowserRouter>
    <Auth>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/tasks" element={<Tasks/>} />
        <Route path="/task/new" element={<NewTask/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </Auth>
  </BrowserRouter>
);
}
