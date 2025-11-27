import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './Dashboard.jsx'
import AddItem from './AddItem.jsx'
import RecipeBook from './RecipeBook.jsx'
import Profile from './Profile.jsx'
import DeleteItem from './DeleteItem.jsx'
import Reviews from './Reviews.jsx'
import UserData from './UserData.jsx'




createRoot(document.getElementById('root')).render(
 
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path="/add-item" element={<AddItem />} />
      <Route path="/book" element={<RecipeBook />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/delete-Item" element={<DeleteItem />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/user-Data" element={<UserData />} />
      
  </Routes>
  
  </BrowserRouter>
)