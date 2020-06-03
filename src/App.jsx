import React, { useContext, useEffect} from "react";
import "./App.scss";
import { BBxProvider } from './components/BBxContext';
import { BBxContext } from './components/BBxContext';
import { Menu } from './components/menu';
import Start from './pages/start';
import Home from './pages/home';
import Profile from './pages/profile';
import Timetable from './pages/timetable';
import Members from './pages/members';


// const App = () => {
//     const [bla, setbla] = useState('bla');
//     console.log(bla);
//     return (
//         <div className="App">
//             <Menu/>
//             <Timetable/>
//             <Leaderboard/>
//         </div>
//     );
// };

// export default App;

const mapStatusToRenderMethod = {
    HOME: <Home />,
    PROFILE: <Profile />,
    TIMETABLE: <Timetable />,
    START: <Start />,
    MEMBERS: <Members />,
};

const App = () => {
    return (
        <BBxProvider>
            <MainApp />
        </BBxProvider>
    );
};

const MainApp = () => {
    const { status, setIsClassLayerVisible} = useContext(BBxContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(status);
        setIsClassLayerVisible(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status]);


    return <div className="App">{status === 'START'?'':<Menu/>}{mapStatusToRenderMethod[status]}</div>;
};

export default App;
