import { Routes,Route } from 'react-router-dom'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import Navbar from './components/Navbar'
import MainNavbar from './components/MainNavbar'
import Home from './components/Home'
import Men from './components/pages/men/Men'
import Kids from './components/pages/kids/Kids'
import Brends from './components/pages/brends/Brends'
import SpecialPrices from './components/pages/SpecialPrices'
import Adidas from './components/pages/brends/Adidas'
import Nike from './components/pages/brends/Nike'
import Fila from './components/pages/brends/Fila'
import Puma from './components/pages/brends/Puma'
import Rebook from './components/pages/brends/Rebook'
import FashionSnikers from './components/pages/men/categories/FashionSnikers'
import Boots from './components/pages/men/categories/Boots'
import DeepSnikers from './components/pages/men/categories/DeepSnikers'
import HighlandCreek from './components/pages/brends/HighlandCreek'
import SportSnikers from './components/pages/men/categories/SportSnikers'
import ElegantShoes from './components/pages/men/categories/ElegantShoes'
import Venice from './components/pages/brends/Venice'
import EasyStreet from './components/pages/brends/EasyStreet'
import Skechers from './components/pages/brends/Skechers'
import Trekking from './components/pages/men/categories/Trekking'
import Sandals from './components/pages/men/categories/Sandals'
import Slippers from './components/pages/men/categories/Slippers'
import Kappa from './components/pages/brends/Kappa'
import HelloKitty from './components/pages/brends/HelloKitty'
import KidsSnikers from './components/pages/kids/categories/KidsSnikers'
import Elefanten from './components/pages/brends/Elefanten'
import MinnieMouse from './components/pages/brends/MinnieMouse'
import KidsDeepSnikers from './components/pages/kids/categories/KidsDeepSnikers'
import KidsBoots from './components/pages/kids/categories/KidsBoots'
import KidsRubberBoots from './components/pages/kids/categories/KidsRubberBoots'
import KidsHomeSlippers from './components/pages/kids/categories/KidsHomeSlippers'
import Footer from './components/footer/Footer'
import Contact from './components/pages/Contact'
import CompaniData from './components/pages/CompaniData'
import PostOffice from './components/pages/PostOffice'
import Reclamations from './components/pages/Reclamations'
import Sport from './components/pages/Sport'


function App() {
  
  return (

   <ShoppingCartProvider>
    <MainNavbar/>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/kontakt' element={<Contact/>}/>
      <Route path='/muskarci' element={<Men/>}/>
      <Route path='/deca' element={<Kids/>}/>
      <Route path='/Sport' element={<Sport/>}/>
      <Route path='/Specijalne-cene' element={<SpecialPrices/>}/>
      <Route path='/Marke' element={<Brends/>}/>
      <Route path='/podaci/o/kompaniji' element={<CompaniData/>}/>
      <Route path='/dostava' element={<PostOffice/>}/>
      <Route path='/reklamacija' element={<Reclamations/>}/>
      <Route path='/marke/adidas' element={<Adidas/>}/>
      <Route path='/marke/nike' element={<Nike/>}/>
      <Route path='/marke/fila' element={<Fila/>}/>
      <Route path='/marke/puma' element={<Puma/>}/>
      <Route path='marke/rebook' element={<Rebook/>}/>
      <Route path='/marke/skechers' element={<Skechers/>}/>
      <Route path='/marke/kappa' element={<Kappa/>}/>
      <Route path='/marke/venice' element={<Venice/>}/>
      <Route path='/marke/easy-street' element={<EasyStreet/>}/>
      <Route path='/marke/hello-kitty' element={<HelloKitty/>}/>
      <Route path='/marke/elefanten' element={<Elefanten/>}/>
      <Route path='/marke/minnie-mouse' element={<MinnieMouse/>}/>
      <Route path='marke/highland-creek' element={<HighlandCreek/>}/>
      <Route path='/muskarci/modne-patike' element={<FashionSnikers/>}/>
      <Route path="/muskarci/cizme&gleznjace" element={<Boots/>}/>
      <Route path='/muskarci/elegantne-cipele' element={<ElegantShoes/>}/>
      <Route path='/muskarci/duboke-patike'  element={<DeepSnikers/>}/>
      <Route path='/muskarci/sportske-patike' element={<SportSnikers/>}/>
      <Route path='/muskarci/trekking' element={<Trekking/>}/>
      <Route path='/muskarci/sandale' element={<Sandals/>}/>
      <Route path='/muskarci/papuce' element={<Slippers/>}/>
      <Route path='/deca/patike' element={<KidsSnikers/>}/>
      <Route path='/deca/duboke-patike' element={<KidsDeepSnikers/>}/>
      <Route path='/deca/cizme' element={<KidsBoots/>}/>
      <Route path='/deca/gumene-cizme' element={<KidsRubberBoots/>}/>
      <Route path='/deca/kucne-papuce' element={<KidsHomeSlippers/>}/>
     </Routes>
     <Footer/>
   </ShoppingCartProvider>
  )
}

export default App
