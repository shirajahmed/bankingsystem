import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = () => {
  const loggedIn = {
    firstName: "Shiraj",
    lastName: "Ahmed",
    email: "shiraj@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            subtext="Access and mange account "
            user={loggedIn?.firstName || "Guest"}
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1234.0}
          />
        </header>
        RECENT TRANSCTION
      </div>
      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 12.0 }, { currentBalance: 12.0 }]}
      />
    </section>
  );
};

export default Home;
