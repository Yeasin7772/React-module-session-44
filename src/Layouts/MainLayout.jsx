import { Outlet, useNavigation } from "react-router-dom";
import Spinner from "../Components/Spinner/Spinner";


const MainLayout = () => {
    const navigation = useNavigation()
    const isLoadingProducts = navigation.state === "loading"; 
    return (
        <div>
            <section className="flex justify-between gap-5 px-5 shadow-lg py-5 ">
                <div >
                    <h1 className="text-2xl font-semibold">Amazon</h1>
                </div>
                <div>
                <div >
                    <ol className="flex gap-5 text-2xl ">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/products">Product</a>
                        </li>
                        <li>
                            <a href="/dashbord">Dashboard</a>
                        </li>
                    </ol>
                </div>
                </div>
            </section>
            {isLoadingProducts ? <Spinner></Spinner> : <div className="my-10">
        <Outlet></Outlet>
      </div>}
        </div>
    );
};

export default MainLayout;