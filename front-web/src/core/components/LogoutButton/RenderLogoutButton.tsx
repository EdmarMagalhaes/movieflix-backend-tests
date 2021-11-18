import { isAuthenticated } from "core/utils/auth";
import React from "react";

type Props = {
    children?: React.ReactNode;
}

const RenderLogoutButton = ({ children }: Props) => {
    return (
        
        <div className= "col-1 position-btnlogout">
       
        {
        isAuthenticated() ? (
            children
          )
          
          : (
            
            <>
            </>
          )
            }
            </div>
          )
        };
    export default RenderLogoutButton;