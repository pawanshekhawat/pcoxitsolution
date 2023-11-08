import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    {
        icon: <FiCast />,
        title: 'HR Services',
        description: 'Welcome to our overseas recruitment website! We are thrilled to have you here. At our HR services, we strive to connect talented individuals...',
        path:'/hr-services'
    },
    {
        icon: <FiLayers />,
        title: 'HR Consulting',
        description: 'Welcome to our HR consulting services website! We are delighted to have you here. At our firm, we specialize in providing comprehensive and...',
        path:'/hr-consulting'
    },
    {
        icon: <FiUsers />,
        title: 'HR Third Party Payroll Services',
        description: 'Welcome to our HR third-party payroll services! We are delighted to offer you a comprehensive and efficient solution to manage your payroll...',
        path:'/hr-third-party'
    },
    { 
        icon: <FiMonitor />,
        title: 'Business Consulting',
        description:'Welcome to our Business Consulting services! We specialize in providing expert guidance to businesses, helping them navigate...',
        path:'/business-consulting'
        
    },
    {
        icon: <FiUsers />,
        title: 'Employee Training and Development:',
        description: 'nvest in your workforce with our customized training programs. From skill development workshops to leadership training...',
        path:'/employee-training'
    },
    { 
        icon: <FiMonitor />,
        title: 'HR Compliance and Legal Support', 
        description: 'Stay compliant with ever-changing employment laws and regulations. Our HR experts provide guidance on legal matters...',
        path:'/hr-compliance'

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
