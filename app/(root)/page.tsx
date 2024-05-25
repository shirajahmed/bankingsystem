import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = {firstName: 'Shiraj'};
  return (
    <section className='home'>
      <div className="home-content">
        <header className='home-header'>
         <HeaderBox 
         type="greeting"
         title="Welcome"
         subtext="Access and mange account "
         user={loggedIn?.firstName || 'Guest'}
         />

         <TotalBalanceBox 
         accounts={[]}
         totalBanks={1}
         totalCurrentBalance={1234.00}
         />
        </header>
      </div>
    </section>
  )
}

export default Home