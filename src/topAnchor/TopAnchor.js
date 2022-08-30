import './TopAnchor.css';


const TopAnchor = () =>{

    return (
        <button  onClick={handleScroll} style={{position:'fixed',
        top:'600px',right:'0',width:'50px',height:'50px',zIndex:'3',
        border:'1px',transition:'all 1s'}}>Back to Top</button>

    )
    function handleScroll(){
        document.body.ScrollTop = document.documentElement.scrollTop = 0;
    }

};

export default TopAnchor;