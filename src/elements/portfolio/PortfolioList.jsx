import React, { Component } from "react";
import {Link} from "react-router-dom";

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Building Constructiont',
        title: 'Hiring project engineers, skilled workers, machine operators etc'
    },
    {
        image: 'image-2',
        category: 'Road Construction',
        title: 'Hired more than 30000 blue collar and white collar professionals'
    },
    {
        image: 'image-3',
        category: 'Oil and Gas',
        title: 'Helped Oil and Gas companies recruit 7000+ project managers.'
    },
    {
        image: 'image-4',
        category: 'Facility Management',
        title: 'Handling all sized facility.'
    },
    {
        image: 'image-3',
        category: 'Security',
        title: 'We support companies to hire'
    },
    {
        image: 'image-4',
        category: 'MEP (Mechanical, Electrical, & Plumbing)',
        title: 'From managerial levels to on ground staffs.'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div>
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4><a href="/portfolio-details">{value.title}</a></h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href="/portfolio-details">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <Link className="link-overlay" to="/portfolio-details"></Link>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;