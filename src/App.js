import React from "react";
import {BrowserRouter as Router,
    /*Switch,
    Route,
    Link*/
} from "react-router-dom";
import { Provider } from "react-redux";
import store from './redux/store';
import './styles/App.css';

class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <header className="App-header">
                        hello
                    </header>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
