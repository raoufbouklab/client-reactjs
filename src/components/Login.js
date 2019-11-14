import React, {Component} from 'react';

export default class Login extends Component {
    render() {
        return (
            <div className="content">
                <div className="col-md-offset-1 col-md-10">
                    <div class="col-sm-9">
                        <form role="form" className="form-horizontal"  action="/en/signin" method="post">

                            <div className="form-group">
                                <label htmlFor="signin_username" className="control-label col-sm-3"><span className="required">*</span>&nbsp;Username</label>
                                <div className="col-sm-9"><input className="form-control" type="text" name="signin[username]" id="signin_username"/></div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="signin_password" className="control-label col-sm-3"><span className="required">*</span>&nbsp;Password</label>
                                <div className="col-sm-9"><input className="form-control" type="password" name="signin[password]" id="signin_password"/></div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="signin_remember" className="control-label col-sm-3">Remember me</label>
                                <div className="col-sm-9"><input style={{'float' : 'left', 'margin': '15px 0px'}} type="checkbox" name="signin[remember]" id="signin_remember"/></div>
                            </div>

                            <div>
                                <button type="submit" className="btn btn-success" style={{margin : '15px'}}>Sign In</button>
                                <button type="submit" className="btn btn-outline-primary" style={{margin : '15px'}}>Forgot your password?</button>
                                <button type="submit" className="btn btn-outline-primary" style={{margin : '15px'}}>Register</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-9">
                        <p>
                            <a className="btn btn-success" href="/login/github">
                                <img style={{display:'inline-block', height:'auto',width:'32px',align:'middle'}}
                                     src={"../images/github32.png"}/> GitHub Login </a>
                        </p>
                        <button type="submit" className="btn btn-outline-primary" style={{margin : '15px'}}>GitHub Login</button>
                        <button type="submit" className="btn btn-outline-primary" style={{margin : '15px'}}>Twitter Login</button>
                        <button type="submit" className="btn btn-outline-primary" style={{margin : '15px'}}>Facebook Login</button>

                        <button><img src="../images/github32.png" alt="my image" onClick={this.myfunction} /></button>
                    </div>
                </div>
            </div>
        );
    }
}