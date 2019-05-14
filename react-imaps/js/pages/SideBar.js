class SideBar extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){

	}


	render() {

    var hash = this.props.hash;
    var className = "navigation";
    if(this.props.showSideBar){
        className+= " left-sidebar-open";
    }else{
        className+= " left-sidebar-closed";
    }

    return(
        <aside className={className}>
                    <ul className="menu-list">
                        <li className="menu-label">
                            Data discovery
                        </li>
                        <li className={(hash == '' || hash == '#') ? "menu-item active" : 'menu-item'} onClick={e => browserHistory.push(browserHistory.getCurrentLocation().pathname+'#')}>
                            <a className="menu-link" href="#">Home</a>
                        </li>
                        <li className={(hash && hash == '#populacao') ? "menu-item active" : 'menu-item'} href="#a">
                            <a className="menu-link" href="#populacao">Dados População</a>
                        </li>
                        <li className={(hash && hash == '#saude') ? "menu-item active" : 'menu-item'}>
                            <a className="menu-link" href="#saude">Dados Saúde</a>
                        </li>
                        <li className="menu-item">
                            <a className="menu-link" href="#populacao/TesteSubmenu">Dados Educação</a>
                        </li>

                    </ul>
        
                    <div className="nav-info">

                        <br/>
                        <br/>
                        <span className="nav-info-first">Some useful information for who is using the application</span>
                        <span className="nav-info-second">
                            support@yourdomain.com |<br/>
                            (55) 5555-5555<br/>
                            Your City, STATE<br/>
                        </span>
            
                    </div>
                </aside>
      )
  }
}


