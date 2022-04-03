import DashboardActions from "./DashboardActions"
import Education from "./Education"
import Experience from "./Experience"

const Dashboard = () =>{
    return (
        <section className="container">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome Onur Yurdagelen
        </p>

            <DashboardActions />
            <Experience />
            <Education />
  
            <div className="my-2">
              <button className="btn btn-danger">
                <i className="fas fa-user-minus" /> Delete My Account
              </button>
            </div>
          
         
      </section>
    )
}
export default Dashboard;