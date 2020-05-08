import React, { Component } from "react";
import '../../styles/App.scss'
import { withRouter } from "react-router-dom";

class About extends Component {
    constructor(s) {
        super()
        this.state = {
        }
    }
    render() {
        return (
            <div className="Page" >
                <div className="Page-Margin">
                    <h1>Who we are</h1>
                    <p>The Foundation for Ancient American Studies (the "Foundation") is a public benefit, 501(c)(3) tax exempt corporation formed in 2008 to:
                    </p>
                    <ul>
                        <li>
                            Conduct research, perform field studies, publish books and articles, disseminate information, and otherwise increase understanding of Mesoamerican and related ancient American culture and geography.
                        </li>
                        <li>
                            Engage in any and all other scientific and educational activities permitted to an organization exempt from federal income tax under Section 501(c)(3) of the Internal Revenue Code of 1986.
                            The Foundation will function in all countries where the Maya culture existed, Mexico, Belize, Guatemala and Honduras, as well as the United States.
                        </li>

                    </ul>
                    <h2>Foundation Board of Directors</h2>
                    <h3>
                        Gregg C. Revell, President
                    </h3>
                    <p>
                        Mr. Revell has visited Central America 45 times in the past 30 years, exploring pre-Columbian ruin sites in Mexico, Guatemala, Belize and Costa Rica, and conducting Book of Mormon tours in Central America. A PADI-certified Rescue Diver, he has developed evidence for the existence of two under-water cities and their GPS locations, off the coast of Belize. For the past eight years, he has explored Utah, Idaho, Nevada, New Mexico, Arizona and Colorado, in the study of ancient petroglyphs. Gregg has been involved in a variety of businesses, focusing principally in the area of real estate development and sales. He served an LDS mission to the Southwest British Mission.
                    </p>
                    <h3>Kim Hosking, Director</h3>
                    <p>Kim has spent over 30 years researching and visiting the ancient ruin sites of Mesoamerica and the American Southwest. She and her young family lived on the Yucatan Peninsula of Mexico for several years. While living there, Kim ran a guide service and ground operations for two different tour companies in Cancun Mexico.
                    Her love of Mesoamerica has taken her all over Mexico, Belize, Guatemala, and Honduras. Kim is a PADI certified diver. She graduated from the College Of Eastern Utah in 2000, with a degree in Anthropology. She has a Certificate of Internship from the Edge of the Cedars Anasazi Museum in Blanding, Utah where she worked as an assistant curator.
                    Currently, Kim is a Managing Director of Good Always Inc, a social enterprise dedicated to combating extreme poverty. Kim is president of Stones of Light Mesoamerican Education Foundation, working to provide schools for the underprivileged Indigenous children of Mesoamerica.
                </p>
                </div>

            </div>
        )

    }
}

export default withRouter(About);
