import React, { Component } from "react";
import '../../styles/App.scss'
import Slide from 'react-reveal/Slide';
class Home extends Component {
    constructor(s) {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <div className="Page" >
                <div className="Home">
                    <div className="Cover">
                        <Slide left cascade>
                            <div className="Cover-Box">
                                <h1>The Foundation For Ancient American Studies</h1>
                                <h2>Exploring the archaeology, language, culture, and religion of mesoamerica</h2>
                                <button>Learn more</button>
                            </div>
                        </Slide>
                    </div>
                </div>
            </div>
        )

    }
}

export default Home;
