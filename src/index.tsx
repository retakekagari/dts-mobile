import React from 'react'
import ReactDOM from 'react-dom'

import Main from './main'
import style from "./body.less";
const rootContainerElement = document.createElement('div')
document.body.append(rootContainerElement)
rootContainerElement.className=style['app']
ReactDOM.render(<Main />, rootContainerElement)
