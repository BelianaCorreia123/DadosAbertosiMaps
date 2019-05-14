class RightSideBar extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){

	}


	render() {

    var hash = this.props.hash;
    var className = "navigation-right";
    var closeButton = [];
    if(this.props.showSideBar){
        className+= " right-sidebar-open";
        closeButton = <button className="close-filters" onClick={this.props.closeBar}>X</button>;
    }else{
        className+= " right-sidebar-closed";
    }
    var filterSelections = [];
		if(this.props.app){
    	filterSelections = <FilterCurrentSelections app={this.props.app}/>;
    }
    return(
        <aside className={className}>
            <div className="filter-actions-mobile">
                <button className="btn btn-secondary btn-counter btn-selections deactivated" id="btn-selectionsmobile">Current selections<span className="btn-secondary counter">0</span></button>
                <ul className="current-selections" id="selectionsmobile">
                </ul>
                <button className="btn btn-secondary clear_selections deactivated">Clear</button>
            </div>
            {filterSelections}
            <div className="blocker-layer"></div>
            {closeButton}
        </aside>
      )
  }
}

