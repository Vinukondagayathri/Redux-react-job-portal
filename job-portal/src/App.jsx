import { Provider } from "react-redux";
import { store } from "./app/store";
import AddJob from "./components/AddJob";
import JobList from "./components/JobList";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Job Portal</h1>

        <AddJob />

        <JobList />
      </div>
    </Provider>
  );
}

export default App;
