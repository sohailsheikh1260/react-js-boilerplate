/**
 * @format
 */
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { IUserState } from "redux/user/auth";
import { RootState } from "../redux/store";

function useDecodedData(): any {
  const userInfo: IUserState = useSelector((state: RootState) => state.user);
  const { token } = userInfo;
  const decoded = token ? jwtDecode(token) : null;

  return decoded;
}

export default useDecodedData;
