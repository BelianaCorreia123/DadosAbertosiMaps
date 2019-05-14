
class NavBar extends React.Component {

	constructor(props){
		super(props);
		this.state = {selectionsLength: 0};
	}

	componentDidMount(){

	}

	clearFilters(){
		if(this.props.app){
			this.props.app.clearAll();
		}
	}

    onChangeSelectionsLength(length){
        this.setState({selectionsLength: length});
    }


	render() {

		var filterSelections = [];
		if(this.props.app){
					filterSelections= <CurrentSelectionButton app={this.props.app} onChangeSelectionsLength={this.onChangeSelectionsLength.bind(this)}/>;
		}
    return(
		<nav className="navbar" role="navigation" aria-label="main navigation">
		  <div className="brand-wrapper">
                        <a className="branding" href="#">
                            <img src="img/imaps-logo.png"></img>
                            Cidadão
                        </a>
                        <div className="update-time-container">
                            <p id="update-time"></p>
                        </div>
                    </div>
                    <button className="burger-menu"  onClick={this.props._onClick}>
                        <i className="material-icons"></i>
                    </button>
                    <div className="qlik-topfilters">
                            <div className="btn btn-default qlik-button-filter qvplaceholder" id="index-filter01" type="button">Filter</div>
                            <div className="btn btn-default qlik-button-filter qvplaceholder" id="index-filter02" type="button">Filter</div>
                            <div className="btn btn-default qlik-button-filter qvplaceholder" id="index-filter03" type="button">Filter</div>
                        </div>
                    <div className="right-buttons">
                        <button className="btn btn-default more-filters" id="more-filters" onClick={this.props._onClickRightSideBar}>More filters</button>
                        {filterSelections}
                        <button className={"btn btn-secondary clear_selections" + (this.state.selectionsLength == 0 ? ' deactivated' : '')} onClick={this.clearFilters.bind(this)}>Clear</button>
                        <button className="btn-icon logout-btn">
                            <i className="material-icons"></i>                      
                        </button>
                    </div>
                    {/* <div className="nav-right-mobile">
                        <button className="icon-filter more-filters btn-icon" id="more-filters-mobile">
                            <i className="material-icons"></i>
                        </button>
                        <button className="logout-btn btn-icon">
                            <i className="material-icons"></i>                                      
                        </button>
                    </div> */}

		</nav>
      )
  }
}


		 /*   <div className="navbar-end">
		      <div className="navbar-item">
		        <div className="buttons">
		        	<a className="button" onClick={this.props._onClickRightSideBar}>
					  	 		<span className="icon"><i className="fa fa-filter"></i></span>
				      </a>
		          
		          {filterSelections}
		          <a onClick={this.clearFilters.bind(this)} className="button is-light">
		            Clear Filters
		          </a>
		        </div>
		      </div>
		    </div>*/
