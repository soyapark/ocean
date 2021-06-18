import React from 'react'
import ReactDOM from 'react-dom'

import $ from "jquery";

import html_text from './Ziva.js'

class Paper extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
		
		this.state  = {...this.props, ...{
            dom_nodes: $($.parseHTML(html_text))
		}};		
	}
	
	componentDidMount() {
        // document.querySelectorAll('#paper_content').forEach(el => {
        //     let clean, cursor;
        //     el.addEventListener('click', e => {
        //         let position = window.getSelection().focusOffset;
        //         if (cursor && position > cursor)
        //             position--;
        //         if (clean)
        //             el['innerText'] = clean;
        //         let textnode = el.firstChild['splitText'](position);
        //         clean = textnode.wholeText;
        //         cursor = position;
        //         el.insertBefore(document.createTextNode('|'), textnode);
        //         el['innerText'] = textnode.wholeText;
        //     });
        // });
    }


	render() {
        // return <div id="paper_content" dangerouslySetInnerHTML={{__html: html_text}} onClick={get_char_pos} style={{textAlign: "left", marginLeft: "5px"}}/>
        return this.state.dom_nodes;
	}
}

export {Paper};
