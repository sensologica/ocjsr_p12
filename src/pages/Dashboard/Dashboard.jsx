import useFetch from "../../hooks/useFetch"
import DashboardLoading from "./DashboardLoading"
import DashboardError from "./DashboardError"
import WidgetActivity from "../../components/widgets/Activity/WidgetActivity"
import WidgetPerformance from "../../components/widgets/Performance/WidgetPerformance"
import WidgetSessions from "../../components/widgets/Sessions/WidgetSessions"
import WidgetTodayScore from "../../components/widgets/TodayScore/WidgetTodayScore"
import WidgetNutritionCard from "../../components/widgets/NutritionCard/WidgetNutritionCard"
import DataSourceToast from "../../components/tools/DataSourceToast"
import { useLoaderData } from "react-router-dom"
import "./Dashboard.css"

export default function Dashboard() {
  // Get `userId` value from URL using React Router's loader.
  const userId = useLoaderData()

  const { 
    isLoading, 
    isError,
    errorMessage, 
    data 
  } = useFetch(userId, process.env.REACT_APP_DATA_SOURCE)

  if (isLoading) {
    return (
      <div className="dashboard">
        <DashboardLoading />
      </div>
    )
  } else if (isError) {
    return (
      <div className="dashboard">
        <DashboardError errorMessage={errorMessage} />
      </div>
    )
  } else if (data) {
    return (
      <div className="dashboard">
        <div className="dashboard-intro">
          <h1>Bonjour <span className="dashboard-intro__user-name">
            {data.user && data.user.firstName}
          </span></h1>
          <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
        <div className="widgets">
          <WidgetActivity data={data.dailyActivity} />
          <WidgetSessions data={data.sessionDuration} />
          <WidgetPerformance data={data.performance} />
          <WidgetTodayScore value={data.dailyScore} />
          <WidgetNutritionCard
            className="widget-nutrition-card__calories"
            type="calories"
            value={data.nutrition && data.nutrition.calories} 
          />
          <WidgetNutritionCard
            className="widget-nutrition-card__proteins"
            type="proteins"
            value={data.nutrition && data.nutrition.protein}
          />
          <WidgetNutritionCard
            className="widget-nutrition-card__carbs"
            type="carbs"
            value={data.nutrition && data.nutrition.carbs}
          />
          <WidgetNutritionCard
            className="widget-nutrition-card__fats"
            type="fat"
            value={data.nutrition && data.nutrition.fat}
          />
          <DataSourceToast dataSource={process.env.REACT_APP_DATA_SOURCE} />
        </div>
      </div>
    )
  } else {
    return (
      <div className="dashboard">
        <DashboardError errorMessage="An error occurred." />
      </div>
    )
  }
}