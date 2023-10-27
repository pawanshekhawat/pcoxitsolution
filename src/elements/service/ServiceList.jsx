import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'HR Services',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        path:'/hr-services'
    },
    {
        icon: <FiLayers />,
        title: 'HR Consulting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        path:'/hr-consulting'
    },
    {
        icon: <FiUsers />,
        title: 'HR Third Party Payroll Services',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        path:'/hr-third-party'
    },
    { 
        icon: <FiMonitor />,
        title: 'Business Consulting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        path:'/hr-third-party'
        
    },
    {
        icon: <FiUsers />,
        title: 'HR Consulting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        path:'/hr-third-party'
    },
    { 
        icon: <FiMonitor />,
        title: 'Business Consulting', 
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        path:'/hr-third-party'

    }
]


class ServiceThree extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                            <a href={val.path}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default ServiceThree;
