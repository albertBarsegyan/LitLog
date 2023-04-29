import { useNavigate } from 'react-router-dom';
import style from './reginBut.module.css';
import { RouterConst } from '../../../../constants/RouterConstant';

const ReginBut = () => {
  const navigation = useNavigate();

  return (
    <button onClick={() => navigation(RouterConst.RegPage)} className={style.regin}>
      Sign Up <i className="fa-solid fa-user-plus"></i>
    </button>
  );
};

export default ReginBut;
