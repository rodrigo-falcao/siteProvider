import '../app/globals.css'
import CustomerInsights from './components/CustomerInsights/CustomerInsights'
import Infos from '../app/components/Infos/Infos'
import Inputs from '../app/components/Inputs/Inputs'
import Menu from '../app/components/Menu/Menu'
import Presentation from '../app/components/Presentation/Presentation'
import Technologies from './components/Technologies/technologies'
import MenuMobile from './components/menuMobile/MenuMobile'

export default function Home() {
  return (
    <>
        <MenuMobile />
        <Menu />
        <Presentation />
        <Technologies />
        <CustomerInsights />
        <Inputs />
        <Infos />
    </>
  )
}
