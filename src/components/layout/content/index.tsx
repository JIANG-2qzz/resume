import Introduction from "../../introduction"
import './layout.less'
const ContentLayout = (props:any)=>{
    const {children} = props
    return (
        <div className="layoutbox">
            <div>
                <Introduction/>
            </div>
            {children}
        </div>
    )
}

export default ContentLayout