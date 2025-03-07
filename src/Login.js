import { useState } from 'react';
import './styles/style_index.css'
import { useNavigate } from 'react-router-dom';

function Login() {
    var [user, setUser] = useState("");
    var onChangeName = function (event) {
        setUser(event.target.value);
    }
    var navigate = useNavigate();
    var handleLogin = function () {
        if (user.trim() != "") {
            navigate("/chat", { state: { user } });
        }
    }
    return (
        <div class="container">
            <div class="row clearfix">
                <div class="col-lg-12">
                    <div class="card chat-app">
                        <div class="form-group" style={{ width: "60%", marginLeft: "20%", height: "50vh", alignContent: "center" }}>
                            <label for="usr">Nhập thông tin Email:</label>
                            <input type="text" className="form-control" id="usr" style={{ width: "100%" }} value={user} onChange={onChangeName} />
                            <br />
                            <button type="button" class="btn btn-info" onClick={handleLogin}>Đăng nhập</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;