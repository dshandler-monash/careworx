import './homepage.css'




const Homepage = () =>{

    return (
        <div class="whole">

            <div class="w3-container w3-content w3-center w3-padding-64" id="band">
                <h2 class="w3-wide" >Welcome to CareWorx!</h2>
                <p class="w3-justify">CAREWORX is an initiative that helps reconnect our elderly people with the community.</p>
                <p class="w3-justify">Dive into our wide array of unique services which could help you participate in social activities,find your ideal aged-care home or interact with our</p>
                <p class="w3-justify">virtual companion.Immerse yourself into the CareWorx experience!</p>
            </div>
            <div class="w3-row w3-padding-32" id="imgbox">
                <div class="w3-quarter" >
                    <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F41836844%2F4193f5d9a7af43d6af3bfa62c7a5ead9.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvNDE4MzY4NDQvNDE5M2Y1ZDlhN2FmNDNkNmFmM2JmYTYyYzdhNWVhZDkuanBn%2Fsign%2F5aa3dc61bbfb6d726ef59d34d85a68a3.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664764706&t=bf2b2f9267d2189546c6bd1808b78b18" class="w3-round w3-margin-bottom" alt="Random Name"></img>
                    <p>Explore social activities happening near you and grab the opportunity to make new friends</p>
                </div>
                <div class="w3-quarter">
                    <img src="https://media.istockphoto.com/vectors/print-vector-id1042311206?s=170667a" class="w3-round w3-margin-bottom" alt="Random Name"></img>
                    <p>Find your ideal aged care home that fullfills your needs.</p>
                </div>
                <div class="w3-quarter">
                    <img src="https://www.mercurynews.com/wp-content/uploads/2016/08/20120612_014537_ecct0613salary_money_databa.jpg?w=482" class="w3-round" alt="Random Name"></img>
                    <p>Learn about your entitled government benefits.</p>
                </div>
                <div class="w3-quarter">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixrTXxgSiOo37c43NsA3E8TdMR8kNrdME9A&usqp=CAU" class="w3-round" alt="Random Name"></img>
                    <p>Interact with your Artifitial Intelligence enabled Virtual Companion.</p>
                </div>
            </div>
            {/* <a href="/searchactivity">
                <div class="ibox">
                        <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F41836844%2F4193f5d9a7af43d6af3bfa62c7a5ead9.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvNDE4MzY4NDQvNDE5M2Y1ZDlhN2FmNDNkNmFmM2JmYTYyYzdhNWVhZDkuanBn%2Fsign%2F5aa3dc61bbfb6d726ef59d34d85a68a3.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1664764706&t=bf2b2f9267d2189546c6bd1808b78b18"></img>
                        <p>Explore social activities happening near you and grab the opportunity to make new friends</p>
                </div>
            </a>
            <a href="/findhome">
                <div class="ibox2">
                    <img src="https://media.istockphoto.com/vectors/print-vector-id1042311206?s=170667a"></img>
                    <p>Find your ideal aged care home that fullfills your needs.</p>
                </div>
            </a>
            <a href="/benefits">
                <div class="ibox3">
                    <img src="https://www.mercurynews.com/wp-content/uploads/2016/08/20120612_014537_ecct0613salary_money_databa.jpg?w=482"></img>
                    <p>Learn about your entitled government benefits.</p>
                </div>
            </a>
            <a href="/contact">
                <div class="ibox4">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRixrTXxgSiOo37c43NsA3E8TdMR8kNrdME9A&usqp=CAU"></img>
                    <p>Interact with your Artifitial Intelligence enabled Virtual Companion.</p>
                </div>
            </a>
            <div class="fbox">
                <div class="leftb">
                    <h1 class="hleft">Contact With Us On</h1>
                    <a href="#"><img src="https://www.bjxku.com/uploads/images/img/2021/0625/1624615049152259.png"></img></a>
                    <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdHpYA21EVEYu13nqZrRdP5ERwmAVO5Z-vuQ&usqp=CAU"></img></a>
                    <a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDrdBBTkQtR2eh28PU2O2uk_6xvc9sd4N8MaxmnP8lLdZXnA7lxbnvUWIkHPGejsAiPI&usqp=CAU"></img></a>
                </div>
                <div class="midb">
                    <h1 class="hmid">Contact Us</h1>
                    <img src="https://img0.baidu.com/it/u=3370469644,2599191469&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></img>
                    <p>+XX XXXXXXXXXXXXX</p>
                    <br></br>
                    <img src="https://img2.baidu.com/it/u=3951169214,743600348&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"></img>
                    <p>wjin0011@student.monash.edu</p>
                </div>
                <div class="rightb">
                    <h1 class="hright">About Us</h1>
                    <a href="#">Terms of Service</a>
                    <a href="#">Legal</a>
                </div> */}
        </div>
    )

};

export default Homepage;