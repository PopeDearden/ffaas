import React, { Component } from "react";
import '../../styles/App.scss'
import Slide from 'react-reveal/Slide'



class Header extends Component {
    constructor(s) {
        super()
        this.state = {
            menu: false,
        }
    }

    hitLink = async (path) => {
        await this.setState(prevState => ({
            menu: !prevState.menu
        }))
        this.props.history.push(path)
    }

    render() {
        return (
            <div className="Header">
                <div className="Header-Top">
                    <img id="Fudll-Logo" src="https://lh3.googleusercontent.com/UOCxcTbunND8bg5al1cECSQ-jAZWZs8UfizWL-fiWTBkeSnXF44iaEyR0TcnOk9rIZ8Iuo2Id53g50Q7gb4yNXezaH7pYk6gTexbAXKqG8akeGT2vE6cimtWRwDs_ii8qUmRw7R5oVVnmGXFKPMcIqQv6vYwpF1FqFUPSKpFP9JJpHkB0eGwGSZCjIY9VkcrTINtFnWRyLgXmNVnzvEqamoZGFuokf_AQulH5IATwvLMfLg2yRCXCSBvWiOXkOFGt1HqL3Q_BsacilNe6H7uJ90qKmScNeBYmaEHk2NgImFGu_ixA98QB60Fv8ECjbG49ulNiDjzhDDWKYS3pvnxARHkmv1-5BmSWffqU-qqC0GSrMPn1kkEybrphdvtcZKftc7GBamsPqUtOLFNegKEVbA9zIQ2MEx0CzyOUf6yqHaPprXhvrMtIWCLcKBADloWmHOI0-FwwfMWsDXK9Oy7etfUAHrXxlH7kAxo_E0j9MICyTIDbpXJSSyLfTqOws6ykYmmZ01U9aw3E7stwXnXY1Jt-XY0SRGYQknXvMXec6YBVa0D1MwYLp3eMIAjSr7-YrhLsQ6CdksaAYVSzZatvbNvDnZOheInVAw7L6dn0zuaoVKtdN8X52uNwVyjGZZm44VS_lF0_3_ZlEth3YvRAwMHk7nLs5Iv0kb2gm2ui5OwErV7j0GT4p0qudYGrex2eQNzPsY3w4OaenOfLELB82PnoMCgi2nLwxpe3xo-1_KbwLAaRAnhLsY=w1440-h349-no" alt="FFAAS Logo" />
                    <div className="Menu">
                        <div className="Menu-Item">
                            <h2>Home</h2>
                        </div>
                        <div className="Menu-Item">
                            <h2>About</h2>
                        </div>
                        <div className="Menu-Item">
                            <h2>Research</h2>
                        </div>
                        <div className="Menu-Item">
                            <h2>Hopi</h2>
                        </div>
                        <div className="Menu-Item">
                            <h2>Donate</h2>
                        </div>
                    </div>
                    <div className="Hamburger" onClick={() => this.setState(prevState => ({
                        menu: !prevState.menu
                    }))}>
                        <i class="fas fa-bars"></i>
                    </div>
                </div>
                <div className="Mobile-Menu">
                    <div className={`Menu-${this.state.menu}`}>
                        <div className="Menu-List">
                            <h2>Home</h2>
                        </div>
                        <div className="Menu-List">
                            <h2>About</h2>
                        </div>
                        <div className="Menu-List">
                            <h2>Research</h2>
                        </div>
                        <div className="Menu-List">
                            <h2>Hopi</h2>
                        </div>
                        <div className="Menu-List">
                            <h2>Donate</h2>
                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default Header;
