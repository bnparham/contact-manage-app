import SearchContact from "./contact/SearchContact"

import {Purple, Background} from "../helpers/colors";

const header = () => {
    return(
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg"
        style={{backgroundColor:Background}}>
            <div className="container">
                <div className="row w-100">
                    <div className="col">
                        <div className="navbar-brand">
                        <i className="fas fa-id-badge" style={{color :Purple}}></i>{" "}
                        وب اپلیکیشن مدیریت {" "}
                        <span style={{color:Purple}}>مخاطبین</span>
                        </div>
                    </div>
                    <div className="col">
                        <SearchContact />
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default header