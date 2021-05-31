import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "@/reducers";
import Main from './main'
import style from "./body.less";
import { AppState } from './reducers'
const rootContainerElement = document.createElement('div')
document.body.append(rootContainerElement)
rootContainerElement.className=style['app']
import { startGClick } from "@/event/click";
startGClick(document.body)
const store=createStore(reducer)
ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, 
  rootContainerElement
)
