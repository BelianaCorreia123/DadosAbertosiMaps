'use strict';
var browserHistory = ReactRouter.browserHistory;
class App extends React.Component {
  constructor(props) {
    super(props);
    var hash = browserHistory.getCurrentLocation().hash;
    this.state = { showSideBar: false, hash:hash };
  }

  componentDidMount(){
    browserHistory.listen((resp) => this.setState({hash: resp.hash}));
  }

  onMessage(state){
    this.setState(state);
  }

  render() {

    var divs = [];
    var mashup = [];
    var app = this.state.app;
    if(this.state.app && this.state.csApp){
      mashup = <Mashup app={this.state.app} csApp={this.state.csApp}/>
     
    }else{
      if(this.state.errorMessage){
        mashup = <span>{this.state.errorMessage}</span>;
      }
    }

    var page = <DadosPopulacao/>;
    var hash = this.state.hash.split('/')[0];
    var pageParam = this.state.hash.split('/')[1];
    switch(hash){
      case '#populacao': page = <DadosPopulacao pageParam={pageParam}/>
                break;
      case '#saude': page = <DadosSaude pageParam={pageParam}/>
                break;
      default: page = mashup;
    }

    var contentClasses = "content-page";
    if(this.state.showSideBar){
      contentClasses += ' nav-left-toggle';
    }
    if(this.state.showRightSideBar){
      contentClasses += ' nav-right-toggle';
    }

    return (
      <div style={{backgroundColor: '#2a2b3d !important'}}>
        <NavBar app={app} showSideBar={this.state.showSideBar} _onClick={e => this.setState({showSideBar: !this.state.showSideBar})} _onClickRightSideBar={e => this.setState({showRightSideBar: !this.state.showRightSideBar})}/>
        
        <SideBar showSideBar={this.state.showSideBar} hash={hash}/>
        <RightSideBar app={app} showSideBar={this.state.showRightSideBar} hash={hash} closeBar={e => this.setState({showRightSideBar: !this.state.showRightSideBar})}/>
        <section className={contentClasses}>
          <div className="main-content">
            {page}
            <QlikSocketToDesktop _onMessage={this.onMessage.bind(this)} appName="app" qvfName="Helpdesk Management.qvf"/>
            <QlikSocketToDesktop _onMessage={this.onMessage.bind(this)} appName="csApp" qvfName="Consumer Sales.qvf"/>
          </div>
        </section>
      </div>)
  }
}

const domContainer = document.querySelector('#mashup_container');
ReactDOM.render(<App/>, domContainer);

