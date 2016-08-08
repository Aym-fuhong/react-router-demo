const App = React.createClass({
    render: function () {
        return <div>{this.props.children}</div>;
    }
});

const Editor =React.createClass({
    render:function () {
        return <div>
            <ReactRouter.Link to="/previewer">Previewer</ReactRouter.Link>
            Editor
        </div>;
    }
})

const Previewer =React.createClass({
    render:function () {
        return <div>
            <ReactRouter.Link to="/">Edit</ReactRouter.Link>
            Previewer</div>;
    }
})

ReactDOM.render(
    <ReactRouter.Router>
        <ReactRouter.Route path='/' component={App}>
            <ReactRouter.IndexRoute component={Editor}/>
            <ReactRouter.Route path="previewer" component={Previewer}/>
        </ReactRouter.Route>
    </ReactRouter.Router>
    , document.getElementById('content'));