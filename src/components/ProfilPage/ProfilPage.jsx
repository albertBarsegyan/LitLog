import React from 'react';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import style from "../ProfilPage/profilPage.module.css"
import CenterSite from './CenterSite/CenterSite';

const ProfilPage = () => {
    return (
        <div className={style.bigDiv}>
            <div>
                <LeftSide />
            </div>
            <div>
                <RightSide />
                <CenterSite/>
            </div>  
            
        </div>
    );
};

export default ProfilPage;