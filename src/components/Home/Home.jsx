import React, { Component } from "react";
import '../../styles/App.scss'
import Slide from 'react-reveal/Fade';
import { withRouter } from "react-router-dom";
class Home extends Component {
    constructor(s) {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <div className="Main" >
                <div className="Home">
                    <div className="Cover">
                        <Slide bottom cascade>
                            <div className="Cover-Box">
                                <h2>The Foundation For</h2>
                                <h1>Ancient American Studies</h1>
                                <h2>Exploring the archaeology, language, culture, and religion of mesoamerica</h2>
                                <button onClick={() => this.props.history.push('/about')}>Learn more</button>
                            </div>
                        </Slide>
                    </div>
                    <div className="Page">
                        <div className="Page-Margin">
                            <p>Suspendisse bibendum condimentum mauris ut fringilla. Cras eget eleifend felis, vel ornare ipsum. Nunc blandit felis ut lobortis convallis. Nulla est ex, facilisis nec blandit maximus, sollicitudin id nulla. Morbi ornare sapien vel nisi ultrices accumsan. Praesent congue, odio et tempor tincidunt, nibh augue auctor elit, vitae facilisis lacus metus at risus. Integer faucibus, massa semper fermentum gravida, velit turpis tempus augue, a elementum velit velit sed turpis. Vivamus sed magna elit. Integer condimentum eu est sed semper. Praesent blandit lorem in tempor molestie. Cras at diam luctus, imperdiet nisi at, vestibulum est. Pellentesque a tortor vulputate, fringilla est eu, placerat tellus.</p>
                            <p>Suspendisse bibendum condimentum mauris ut fringilla. Cras eget eleifend felis, vel ornare ipsum. Nunc blandit felis ut lobortis convallis. Nulla est ex, facilisis nec blandit maximus, sollicitudin id nulla. Morbi ornare sapien vel nisi ultrices accumsan. Praesent congue, odio et tempor tincidunt, nibh augue auctor elit, vitae facilisis lacus metus at risus. Integer faucibus, massa semper fermentum gravida, velit turpis tempus augue, a elementum velit velit sed turpis. Vivamus sed magna elit. Integer condimentum eu est sed semper. Praesent blandit lorem in tempor molestie. Cras at diam luctus, imperdiet nisi at, vestibulum est. Pellentesque a tortor vulputate, fringilla est eu, placerat tellus.</p>
                            <p>Suspendisse bibendum condimentum mauris ut fringilla. Cras eget eleifend felis, vel ornare ipsum. Nunc blandit felis ut lobortis convallis. Nulla est ex, facilisis nec blandit maximus, sollicitudin id nulla. Morbi ornare sapien vel nisi ultrices accumsan. Praesent congue, odio et tempor tincidunt, nibh augue auctor elit, vitae facilisis lacus metus at risus. Integer faucibus, massa semper fermentum gravida, velit turpis tempus augue, a elementum velit velit sed turpis. Vivamus sed magna elit. Integer condimentum eu est sed semper. Praesent blandit lorem in tempor molestie. Cras at diam luctus, imperdiet nisi at, vestibulum est. Pellentesque a tortor vulputate, fringilla est eu, placerat tellus.</p>
                            <p>Suspendisse bibendum condimentum mauris ut fringilla. Cras eget eleifend felis, vel ornare ipsum. Nunc blandit felis ut lobortis convallis. Nulla est ex, facilisis nec blandit maximus, sollicitudin id nulla. Morbi ornare sapien vel nisi ultrices accumsan. Praesent congue, odio et tempor tincidunt, nibh augue auctor elit, vitae facilisis lacus metus at risus. Integer faucibus, massa semper fermentum gravida, velit turpis tempus augue, a elementum velit velit sed turpis. Vivamus sed magna elit. Integer condimentum eu est sed semper. Praesent blandit lorem in tempor molestie. Cras at diam luctus, imperdiet nisi at, vestibulum est. Pellentesque a tortor vulputate, fringilla est eu, placerat tellus.</p>
                            <p>Suspendisse bibendum condimentum mauris ut fringilla. Cras eget eleifend felis, vel ornare ipsum. Nunc blandit felis ut lobortis convallis. Nulla est ex, facilisis nec blandit maximus, sollicitudin id nulla. Morbi ornare sapien vel nisi ultrices accumsan. Praesent congue, odio et tempor tincidunt, nibh augue auctor elit, vitae facilisis lacus metus at risus. Integer faucibus, massa semper fermentum gravida, velit turpis tempus augue, a elementum velit velit sed turpis. Vivamus sed magna elit. Integer condimentum eu est sed semper. Praesent blandit lorem in tempor molestie. Cras at diam luctus, imperdiet nisi at, vestibulum est. Pellentesque a tortor vulputate, fringilla est eu, placerat tellus.</p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default withRouter(Home);
