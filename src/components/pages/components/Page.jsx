import {  Box } from "@mui/material";

const Page = ({children, value , index , ...others}) => {


    return(
        <div
        role="page"
        hidden={value!==index}
        id={`page-${index}`}
        aria-labelledby={`sidebar-tab-${index}`}
        {...others}
        >
            {value === index && (
                <Box sx={{height:"100vh" , overflow:"hidden"}}>
                    {children}
                </Box>
            )}
        </div>
    )
}

export default Page;