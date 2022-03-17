import Header from '../components/HeaderComponent'
import SideTextImageComponent from '../components/SideTextImageComponent'
import WellcomeToSoekirman from '../components/WellcomeToSoekirman'
import WellcomeToTheClub from '../components/WellcomeToTheClub'
import CommunityTools from '../components/CommunityTool'
import Footer from '../components/Footer'
import TheTeam from '../components/TheTeam'



export default function Home(){
  return(
    <div className="">
      <Header />
      <WellcomeToSoekirman/>
      <SideTextImageComponent title={"The Spec"}/>
      <WellcomeToTheClub/>
      <SideTextImageComponent title={"The Bathroom"}/>
      <CommunityTools></CommunityTools>
      <TheTeam/>
      <Footer/>
    </div>
  )
}