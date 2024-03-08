import { ToastContainer } from "react-toastify";
//components
import AppRouter from "./Routes/AppRoutes";
function App() {
  return (
    <div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="colored" />
      <div>
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
