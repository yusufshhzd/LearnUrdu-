import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export const SideNav = () => {
    return (
        <div>
            <Sidebar style={{border:'none' }}>
                <Menu style={{ backgroundColor: 'white'}}>
                    <MenuItem> Home </MenuItem>
                    <SubMenu label="Tenses">
                        <SubMenu label="Present">
                            <MenuItem> Simple Present </MenuItem>
                            <MenuItem> Present Continuous </MenuItem>
                            <MenuItem> Present Perfect </MenuItem>
                            <MenuItem> Present Perfect Continuous </MenuItem>
                        </SubMenu>
                        <SubMenu label="Past">
                            <MenuItem> Simple Past </MenuItem>
                            <MenuItem> Past Continuous </MenuItem>
                            <MenuItem> Past Perfect </MenuItem>
                            <MenuItem> Past Perfect Continuous </MenuItem>
                        </SubMenu>
                        <SubMenu label="Future">
                            <MenuItem> Simple Future </MenuItem>
                            <MenuItem> Future Continuous </MenuItem>
                            <MenuItem> Future Perfect </MenuItem>
                            <MenuItem> Future Perfect Continuous </MenuItem>
                        </SubMenu>
                    </SubMenu>
                    <MenuItem> Vocab Words </MenuItem>
                </Menu>
            </Sidebar>

        </div>
    )
}

export default SideNav
