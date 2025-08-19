import { Outlet, useLoaderData } from "react-router";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
  const categories = useLoaderData();
  // console.log(categories);
  return <div>
    {/* Banner */}
    <Banner/>
    {/* Header */}
    <Heading title="Browes Coffees by Category." subTitle="Choose your desired coffee category to browse through specific coffee that fit in your tatse."/>
    {/* Cetagoreys */}
    <Categories categories={categories}/>
    {/* Dynamic Nasted routes */}
    <Outlet/>
  </div>;
};

export default Home;
