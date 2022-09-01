import './NavigationBar.css';


const NavigationBar = () =>{

    return (
            <div class='bgi'>
                <div class='fixed'>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li class="dropdown">
                            <a href="javascript:void(0)" class="dropbtn">Social Activities</a>
                            <div class="dropdown-content">
                                <a href="/createactivity">Create Activity</a>
                                <a href="/searchactivity">Search Activity</a>
                            </div>
                        </li>
                        <li class="dropdown">
                            <a href="javascript:void(0)" class="dropbtn">Profile</a>
                            <div class="dropdown-content">
                                <a href="/createprofile">Create Profile</a>
                                <a href="/connectpeople">Connect People</a>
                            </div>
                        </li>
                        <li><a href="/findhome">Find a Aged Care Home</a></li>
                        <li><a href="/benefits">Entitled Government Benefits</a></li>
                        <li><a href="/contact">Contact us</a></li>
                    </ul>
                </div>
            </div>
    )

};

export default NavigationBar;