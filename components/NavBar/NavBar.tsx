"use client"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { CiEdit, CiGrid41 } from "react-icons/ci";
import { VscGithubInverted } from "react-icons/vsc";
import { SiLinkedin } from "react-icons/si"
import Link from 'next/link';

function NavBar() {

    const sidebarStyles: React.CSSProperties = {
        backgroundColor: 'white',
        borderRightWidth: "0",
        margin: 0,
        position: 'fixed',
        height: '100%',
    };
    
    return (
        <Sidebar style={sidebarStyles} collapsed={false} width='200px'>
            <Menu>
                <MenuItem component={<Link href="/"></Link>} icon={<CiGrid41 />}> Tareas </MenuItem>
                <MenuItem component={<Link href="/create"></Link>} icon={<CiEdit />}> Crear tarea </MenuItem>
            </Menu>
            <div className=' absolute bottom-0 left-0 right-0 p-4 bg-slate'>
                <h3 className=''>
                    <a href="https://www.linkedin.com/in/joaquin-espinosa/" target='_blank' className="flex items-center justify-between">
                        Linkedin
                        <span className=' ml-2 mb-1 '><SiLinkedin className="m-0" /></span>
                    </a>
                </h3>
                <h3>
                    <a href="https://github.com/joaquin-espinosa733" target="_blank" className="flex items-center justify-between">
                        GitHub
                        <span className=' ml-2 mt-1'><VscGithubInverted className="m-0" /></span>
                    </a>
                </h3>
            </div>
        </Sidebar >
    )
}

export default NavBar

