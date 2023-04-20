import { useNavigate } from 'react-router-dom';
import { RouteConstant } from '../../constants/RouteCostant';

function Login() {
  const navigation = useNavigate();

  return (
    <button onClick={() => navigation(RouteConstant.LoginPage)}>
      Sing In <i className="fa-solid fa-user"></i>{' '}
    </button>
  );
}

export default Login;
