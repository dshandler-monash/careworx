import './NavigationBar.css';


const NavigationBar = () =>{

    return (
            <div class='bgi'>
                <div class='fixed'>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li class="dropdown">
                            <a href="javascript:void(0)" class="dropbtn">Social Activities</a>
                            <div class="dropdown-content">
                                <a href="#Social Activities">Create Activity</a>
                                <a href="#Social Activities">Search Activity</a>
                            </div>
                        </li>
                        <li class="dropdown">
                            <a href="javascript:void(0)" class="dropbtn">Profile</a>
                            <div class="dropdown-content">
                                <a href="#Profile">Create Profile</a>
                                <a href="#Profile">Connect People</a>
                            </div>
                        </li>
                        <li><a href="#Find a Aged Care Home">Find a Aged Care Home</a></li>
                        <li><a href="#Entitled Government Benefits">Entitled Government Benefits</a></li>
                        <li><a href="#Contact us">Contact us</a></li>
                    </ul>
                </div>
            </div>
    )

};

export default NavigationBar;